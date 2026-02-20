import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Facebook, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const shootingTypes = [
  "Novorodenecké",
  "Deti",
  "Rodinné",
  "Tehotenské",
  "Svadobné",
  "Exteriér",
  "Iné",
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      toast.error("Odoslanie sa nepodarilo. Skúste to prosím znova.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 sm:py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl text-foreground mb-4"
            style={{ fontFamily: "var(--font-family-heading)" }}
          >
            Kontakt
          </motion.h1>
          <p className="text-muted-foreground">
            Neváhajte ma kontaktovať. Rada odpoviem na všetky vaše otázky.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Details */}
          <motion.div
            {...fadeUp}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2
                className="text-xl text-foreground mb-6"
                style={{ fontFamily: "var(--font-family-heading)" }}
              >
                Kontaktné údaje
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Adresa</p>
                    <p className="text-foreground">
                      Horná 123, 022 01 Čadca
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefón</p>
                    <a
                      href="tel:+421907533373"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      0907 533 373
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">E-mail</p>
                    <a
                      href="mailto:zuzukondek@gmail.com"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      zuzukondek@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Facebook className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Facebook</p>
                    <a
                      href="https://www.facebook.com/ZuzuPhotoGraphic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      ZuzuPhotoGraphic
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Person name */}
            <div className="bg-secondary rounded-xl p-5">
              <p className="text-sm text-muted-foreground mb-1">Fotografka</p>
              <p
                className="text-lg text-foreground"
                style={{ fontFamily: "var(--font-family-heading)" }}
              >
                Zuzana Kondeková
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-card rounded-2xl border border-border p-8 sm:p-12 text-center">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3
                  className="text-xl text-foreground mb-3"
                  style={{ fontFamily: "var(--font-family-heading)" }}
                >
                  Ďakujem za správu!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Ozvem sa vám čo najskôr. Zvyčajne odpovedám do 24 hodín.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", type: "", message: "" });
                  }}
                  className="px-6 py-2.5 border border-primary text-primary rounded-full hover:bg-primary/5 transition-colors text-sm"
                >
                  Odoslať ďalšiu správu
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl border border-border p-6 sm:p-8 space-y-5"
              >
                <h2
                  className="text-xl text-foreground mb-2"
                  style={{ fontFamily: "var(--font-family-heading)" }}
                >
                  Napíšte mi
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-1.5">
                      Meno a priezvisko *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="Vaše meno"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-1.5">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="vas@email.sk"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-1.5">
                      Telefón
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="+421..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-1.5">
                      Typ fotografovania
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) =>
                        setFormData({ ...formData, type: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all appearance-none"
                    >
                      <option value="">Vyberte typ...</option>
                      {shootingTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-1.5">
                    Správa / Otázka
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2.5 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                    placeholder="Napíšte mi vašu správu alebo otázku..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {sending ? "Odosiela sa…" : "Odoslať správu"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <motion.div {...fadeUp}>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <iframe
              src="https://maps.google.com/maps?q=Horn%C3%A1+123%2C+022+01+%C4%8Cadca&output=embed&z=17"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zuzu Photo - mapa"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Ateliér sa nachádza kúsok nad zdravotnou školou. Parkovanie je možné
            priamo pred domom.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
