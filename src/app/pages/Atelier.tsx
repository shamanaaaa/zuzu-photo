import { motion } from "motion/react";
import {
  Sun,
  Puzzle,
  Baby,
  Palette,
  Shirt,
  Usb,
  Car,
  Heart,
  MapPin,
} from "lucide-react";
import { images } from "../data/images";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const features = [
  { icon: Sun, text: "Priestranný, svetlý ateliér v rodinnom dome" },
  { icon: Puzzle, text: "Stovky rekvizít — neustále dopĺňaných" },
  { icon: Baby, text: "Prebaľovací pultík pre bábätká" },
  { icon: Palette, text: "Výber foto-pozadí a oblečenia pre deti" },
  { icon: Shirt, text: "Tehotenské šaty na zapožičanie" },
  { icon: Usb, text: "Štýlový USB kľúč v tvare fotoaparátu" },
  { icon: Car, text: "Parkovanie priamo pred domom" },
  { icon: Heart, text: "Príjemná, rodinná atmosféra" },
];

export function Atelier() {
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
            Náš ateliér
          </motion.h1>
          <p className="text-muted-foreground">
            Miesto, kde vznikajú krásne spomienky
          </p>
        </div>
      </section>

      {/* Studio Images */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.div
            {...fadeUp}
            className="rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <ImageWithFallback
              src={images.studio1}
              alt="Ateliér Zuzu Photo"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <ImageWithFallback
              src={images.studio2}
              alt="Ateliér Zuzu Photo interiér"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Description */}
        <motion.div {...fadeUp} className="max-w-3xl mx-auto">
          <div className="space-y-5 text-foreground leading-relaxed">
            <p>
              Fotografujem v krásnych priestoroch rodinného domu na Hornej ulici
              123 v Čadci — kúsok nad zdravotnou školou. Ateliér je plne
              vybavený a stále sa rozrastá o nové rekvizity a pozadia, z ktorých
              mnohé vlastnoručne vyrábam.
            </p>
            <p>
              Nájdete tu stovky rekvizít pre tých najmenších aj tých väčších —
              od košíčkov a čeleničiek pre novorodeniatka, cez klobúky a kostýmy
              pre deti, až po elegantné doplnky pre tehuľky. K dispozícii je
              tiež prebaľovací pultík, takže vaše bábätko bude mať pohodlie ako
              doma.
            </p>
            <p>
              Po nafotení si môžete odniesť svoje fotografie na štýlovom USB
              kľúči v tvare fotoaparátu — krásna spomienka nielen na
              fotografiách, ale aj v rukách.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="bg-secondary py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-card rounded-xl p-5 flex items-start gap-4 shadow-sm"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    {f.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Address & Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div {...fadeUp} className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-primary mb-3">
            <MapPin className="w-5 h-5" />
            <span className="text-sm tracking-wide uppercase">Kde nás nájdete</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl text-foreground mb-2"
            style={{ fontFamily: "var(--font-family-heading)" }}
          >
            Horná 123, 022 01 Čadca
          </h2>
          <p className="text-muted-foreground text-sm">
            (kúsok nad zdravotnou školou)
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="rounded-2xl overflow-hidden shadow-md"
        >
          <iframe
            src="https://maps.google.com/maps?q=Horn%C3%A1+123%2C+022+01+%C4%8Cadca&output=embed&z=17"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Zuzu Photo ateliér - mapa"
          />
        </motion.div>
      </section>
    </div>
  );
}
