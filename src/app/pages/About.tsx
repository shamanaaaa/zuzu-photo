import { motion } from "motion/react";
import { Quote, Camera } from "lucide-react";
import { images } from "../data/images";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

const specialties = [
  "Novorodenci",
  "Deti",
  "Rodina",
  "Tehotenstvo",
  "Svadby",
  "Exteriér",
  "Portréty",
];

export function About() {
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
            O mne
          </motion.h1>
        </div>
      </section>

      {/* Profile Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-lg">
              <ImageWithFallback
                src={images.photographer}
                alt="Zuzana Ďurná-Kondeková"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/5 rounded-full -z-10" />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="space-y-5 text-foreground leading-relaxed">
              <p>
                Volám sa Zuzana Ďurná-Kondeková a fotografovaniu sa venujem od
                stredoškolských čias. Vyštudovala som umelecko-remeselné
                spracovanie kovov (pasiar), no fotografia ma vždy priťahovala —
                vďaka môjmu otcovi, fotografovi, dokumentaristovi a vydavateľovi
                Jurajovi Ďurnému, ktorý mi daroval môj prvý fotoaparát a
                zasvätil ma do jej tajov. Niekoľko rokov som pracovala ako
                grafička v jeho reklamnej agentúre.
              </p>
              <p>
                Po materskej dovolenke som si splnila sen — otvorila som vlastný
                fotoateliér v Čadci. Moje dve krásne dcéry sú mojou
                každodennou inšpiráciou a práve vďaka nim som si obľúbila
                fotografovanie detí najviac zo všetkého.
              </p>
              <p>
                Verím, že dokonalá fotografia je taká, na ktorej je len to, čo
                tam má byť. A výnimočná je vtedy, keď jej dokážem dať dušu —
                keď vás pohľad na ňu chytí za srdce.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="bg-secondary py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...fadeUp}>
            <Quote className="w-10 h-10 text-primary/30 mx-auto mb-4" />
            <blockquote
              className="text-xl sm:text-2xl text-foreground italic leading-relaxed mb-4"
              style={{ fontFamily: "var(--font-family-heading)" }}
            >
              „Fotografia musí mať dušu — takú, ktorá vás chytí za srdce."
            </blockquote>
            <p className="text-muted-foreground text-sm">
              — Zuzana Ďurná-Kondeková
            </p>
          </motion.div>
        </div>
      </section>

      {/* What I Photograph */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div {...fadeUp} className="text-center mb-8">
          <h2
            className="text-2xl sm:text-3xl text-foreground mb-4"
            style={{ fontFamily: "var(--font-family-heading)" }}
          >
            Čo fotografujem
          </h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-3">
          {specialties.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-full text-sm text-foreground shadow-sm"
            >
              <Camera className="w-4 h-4 text-primary" />
              {s}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Interview Q&A */}
      <section className="bg-card border-y border-border py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <h2
              className="text-2xl sm:text-3xl text-foreground mb-8 text-center"
              style={{ fontFamily: "var(--font-family-heading)" }}
            >
              Z rozhovoru
            </h2>

            <div className="bg-secondary rounded-2xl p-6 sm:p-8">
              <p className="text-sm text-primary mb-4 italic">
                Všimla som si, že fotografujete najčastejšie portréty detí. Je
                práve portrét detí tou formou fotografií, ktoré robíte
                najradšej?
              </p>
              <blockquote className="text-foreground leading-relaxed italic border-l-4 border-primary/30 pl-4">
                Deti ma pri fotografovaní vždy fascinujú. V okamihu sa dokážu
                stať veľmi dospelé — stačí pár rekvizít a pred objektívom mám
                kuchárika, kominárika, manažérku, opravára či boxera... Ale
                pritom stále ostávajú deťmi, čistými a nevinnými. A my dospelí,
                aby sme pri pohľade na ich fotografie objavili dieťa v sebe. Ak
                sa nám to podarí, náš život bude určite krajší.
              </blockquote>
              <p className="text-xs text-muted-foreground mt-4">
                Zdroj: Kysucký večerník
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
