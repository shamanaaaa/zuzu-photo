import express from "express";
import nodemailer from "nodemailer";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readFileSync, existsSync } from "fs";

// Load .env manually (no external dotenv dependency needed)
const envPath = join(dirname(fileURLToPath(import.meta.url)), "..", ".env");
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const match = line.match(/^([^#=\s][^=]*)=(.*)$/);
    if (match) process.env[match[1].trim()] = match[2].trim();
  }
}

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  SMTP_FROM,
  CONTACT_TO,
  CONTACT_TO_LIST,
  PORT = "3000",
} = process.env;

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT) || 587,
  secure: Number(SMTP_PORT) === 465,
  auth: { user: SMTP_USER, pass: SMTP_PASS },
});

function esc(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildHtml({ name, email, phone, type, message }) {
  const rows = [
    ["Meno", name],
    ["E-mail", `<a href="mailto:${esc(email)}" style="color:#b08968;text-decoration:none;">${esc(email)}</a>`],
    ["Telefón", phone || "–"],
    ["Typ fotografovania", type || "–"],
  ];

  const rowsHtml = rows
    .map(
      ([label, value], i) => `
      <tr style="background:${i % 2 === 0 ? "#ffffff" : "#f5ebe0"};">
        <td style="padding:12px 20px;font-size:12px;color:#7a6a5e;font-family:Arial,sans-serif;white-space:nowrap;width:160px;vertical-align:top;">${label}</td>
        <td style="padding:12px 20px;font-size:14px;color:#3d2c2c;font-family:Arial,sans-serif;">${typeof value === "string" && !value.startsWith("<") ? esc(value) : value}</td>
      </tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="sk">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#fdf9f6;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#fdf9f6;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e8d5c4;">

        <!-- Header -->
        <tr>
          <td style="background:#ffffff;border-top:4px solid #b08968;padding:36px 40px 28px;">
            <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#b08968;">Nová správa z webu</p>
            <h1 style="margin:0;font-family:Georgia,serif;font-size:28px;font-weight:400;color:#3d2c2c;">Zuzu Photo</h1>
          </td>
        </tr>

        <!-- Fields table -->
        <tr>
          <td style="padding:0 0 8px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${rowsHtml}
            </table>
          </td>
        </tr>

        <!-- Message -->
        <tr>
          <td style="padding:8px 40px 32px;">
            <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#7a6a5e;">Správa</p>
            <div style="background:#f8f2ec;border-left:3px solid #b08968;border-radius:4px;padding:16px 20px;font-family:Arial,sans-serif;font-size:14px;line-height:1.7;color:#3d2c2c;white-space:pre-wrap;">${esc(message || "–")}</div>
          </td>
        </tr>

        <!-- Reply button -->
        <tr>
          <td style="padding:0 40px 36px;">
            <a href="mailto:${esc(email)}"
               style="display:inline-block;padding:12px 28px;background:#b08968;color:#ffffff;font-family:Arial,sans-serif;font-size:14px;text-decoration:none;border-radius:100px;letter-spacing:0.5px;">
              Odpovedať
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f5ebe0;padding:20px 40px;border-top:1px solid #e8d5c4;">
            <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:#7a6a5e;">
              Táto správa bola odoslaná cez kontaktný formulár na <strong style="color:#3d2c2c;">zuzu-photo.sk</strong>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

const app = express();
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, type, message } = req.body ?? {};

  if (!name || !email) {
    return res.status(400).json({ error: "Chýba meno alebo e-mail." });
  }

  try {
    const toRaw = (CONTACT_TO_LIST || CONTACT_TO || "").trim();
    const to = toRaw
      ? toRaw
          .replace(/^"|"$/g, "")
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
      : undefined;

    await transporter.sendMail({
      from: `"${name}" <${SMTP_FROM}>`,
      replyTo: email,
      to,
      subject: `Správa z webu – ${type || "kontaktný formulár"}`,
      text: [
        `Meno: ${name}`,
        `E-mail: ${email}`,
        `Telefón: ${phone || "–"}`,
        `Typ fotografovania: ${type || "–"}`,
        "",
        message,
      ].join("\n"),
      html: buildHtml({ name, email, phone, type, message }),
    });
    res.json({ ok: true });
  } catch (err) {
    console.error("SMTP error:", err);
    res.status(500).json({ error: "Odoslanie zlyhalo." });
  }
});

// Serve Vite build
const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");

// Hashed JS/CSS assets — cache forever (Vite adds content hash to filenames)
app.use("/assets", express.static(join(dist, "assets"), {
  maxAge: "1y",
  immutable: true,
}));

// Photo images — cache for 30 days
app.use("/images", express.static(join(dist, "images"), {
  maxAge: "30d",
}));

// Everything else (index.html, favicon, etc.) — no cache so deploys are picked up immediately
app.use(express.static(dist, { maxAge: 0 }));

// Express 5 / path-to-regexp: easiest catch-all is a regex route
app.get(/.*/, (_req, res) => res.sendFile(join(dist, "index.html")));

app.listen(Number(PORT), () => {
  console.log(`Server running on port ${PORT}`);
});
