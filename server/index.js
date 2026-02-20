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
    });
    res.json({ ok: true });
  } catch (err) {
    console.error("SMTP error:", err);
    res.status(500).json({ error: "Odoslanie zlyhalo." });
  }
});

// Serve Vite build
const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
app.use(express.static(dist));
// Express 5 / path-to-regexp: easiest catch-all is a regex route
app.get(/.*/, (_req, res) => res.sendFile(join(dist, "index.html")));

app.listen(Number(PORT), () => {
  console.log(`Server running on port ${PORT}`);
});
