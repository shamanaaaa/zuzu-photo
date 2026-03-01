import { Link } from "react-router";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Baby, Users, Heart, Gem, Building2, TreePine, Star, ArrowRight, Quote, Camera, Clock, UserCircle } from "lucide-react";
import { images, galleryImages } from "../data/images";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const services = [
  {
    icon: Baby,
    title: "Novorodenci",
    alt: "Novorodenecké fotenie Čadca – Zuzu Photo ateliér",
    desc: "Prvé dni života sú najkrehkejšie a najzázračnejšie – maličké pršteky, sladké zívanie a vôňa bábätka, na ktorú sa nezabúda. Zachyťme tieto neopakovateľné chvíle skôr, než sa z nich stanú len spomienky.",
    image: images.newborn1,
    to: "/portfolio/novorodenci",
  },
  {
    icon: Users,
    title: "Deti",
    alt: "Detský fotograf Čadca – fotenie detí v ateliéri a záhrade",
    desc: "Detstvo je najkrajšie a zároveň najrýchlejšie obdobie života. Každý úsmev, každý pohľad a každý malý pokrok si zaslúži zostať navždy zachovaný.",
    image: images.toddler,
    to: "/portfolio/deti",
  },
  {
    icon: Heart,
    title: "Tehotenské",
    alt: "Tehotenské fotenie Čadca – umelecký portrét budúcej mamičky",
    desc: "Tehotenstvo je jedinečné, magické a neopakovateľné obdobie v živote ženy. Čas, keď pod srdcom nosíte celý svoj svet. Teším sa, keď spolu zachytíme toto čarovné obdobie skôr, než sa z bruška ozve prvé „ahoj, mami\".   ",
    image: images.maternity1,
    to: "/portfolio/tehotenske",
  },
  {
    icon: Gem,
    title: "Svadobné",
    alt: "Svadobný fotograf Čadca – svadobné fotenie Kysuce a Žilina",
    desc: "Keď sa stretnú dve srdcia a rozhodnú sa biť ako jedno. Nech tieto okamihy zostanú živé navždy.",
    image: images.wedding1,
    to: "/portfolio/svadobne",
  },
  {
    icon: Building2,
    title: "Ateliér",
    alt: "Fotoateliér Čadca – fotostúdio so záhradou a terasou Zuzu Photo",
    desc: "ZUZU photo-graphic – svetlo, emócia a prirodzenosť na jednom mieste. Fotenie v ateliéri, rozkvitnutej záhrade aj na slnečnej terase pre vaše výnimočné fotografie.",
    image: images.studio1,
    to: "/portfolio/atelier",
  },
  {
    icon: TreePine,
    title: "Exteriér",
    alt: "Exteriérové fotenie Čadca – rodinné fotenie v záhrade Zuzu Photo",
    desc: "Najkrajšie momenty často vznikajú prirodzene – vonku, v pohybe, v smiechu, na čerstvom vzduchu. Prírodné svetlo, zeleň a pokojné prostredie vytvárajú dokonalú kulisu pre nadčasové fotografie.",
    image: images.exterior1,
    to: "/portfolio/exterier",
  },
  {
    icon: Star,
    title: "Vianočné",
    alt: "Vianočné fotenie Čadca – sviatočná atmosféra Zuzu Photo ateliér",
    desc: "Vianoce sú časom kúziel, smiechu a spoločných spomienok, ktoré zostávajú navždy.",
    image: images.vianocne2,
    to: "/portfolio/vianocne",
  },
  {
    icon: Star,
    title: "Rodina",
    alt: "Rodinné fotenie Čadca – rodinný fotograf Kysuce Zuzu Photo",
    desc: "Rodinné chvíle sú tie najcennejšie a fotografie sú spomienky, ktoré vydržia celé roky.",
    image: images.family1,
    to: "/portfolio/rodinne",
  },
  {
    icon: UserCircle,
    title: "Portrét",
    alt: "Portrétová fotografia Čadca – Zuzu Photo ateliér",
    desc: "Každý z nás má v sebe jedinečnú iskru. Portrét nie je len fotografia tváre – je to zachytenie osobnosti, nálady, pohľadu a emócie, ktorá vás robí výnimočnými.",
    image: images.portret1,
    to: "/portfolio/portret",
  },
];

const testimonials = [
  {
    name: "Martina K.",
    text: "Zuzka je úžasná fotografka! Atmosféra v ateliéri bola veľmi príjemná a výsledné fotky predčili naše očakávania. Vrelo odporúčam!",
    rating: 5,
  },
  {
    name: "Jana S.",
    text: "Novorodenecké fotenie bolo krásne. Zuzka bola veľmi trpezlivá a výsledky sú nádherné. Určite sa vrátime na ročné fotky!",
    rating: 5,
  },
  {
    name: "Peter a Lucia",
    text: "Svadobné fotky sú nad naše očakávania. Zuzka zachytila každý dôležitý moment a výsledok je jednoducho dokonalý. Ďakujeme!",
    rating: 5,
  },
];

export function Home() {
  return (
    <div>
      <Helmet>
        <title>Profesionálny fotograf Čadca – Zuzu Photo</title>
        <meta name="description" content="Profesionálny fotograf a fotoateliér v Čadci. Novorodenci, deti, svadby, tehotenstvo, rodinné fotenie. Útulný ateliér so záhradou a parkovaním. Čadca, Kysuce, Žilina." />
        <link rel="canonical" href="https://www.zuzu-photo.sk/" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={images.hero}
            alt="Profesionálne fotografovanie v Čadci – Zuzu Photo ateliér"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3d2c2c]/80 via-[#3d2c2c]/50 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-family-heading)" }}
            >
              Okamih trvá sekundu<br />
              Spomienka celý život
            </h1>
            <p className="text-base sm:text-lg text-white/80 mb-3 leading-relaxed">
              Profesionálne fotografovanie v Čadci – v útulnom rodinnom dome so záhradou, terasou a pohodlným parkovaním.
            </p>
            <p className="text-sm sm:text-base text-white/60 mb-8 leading-relaxed">
              Novorodenci, deti, tehotenstvo, rodina, Vianoce, svadby a produktové zábery – fotografie, ktoré vám prinesú úsmev a budú krásnou spomienkou na celé roky.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center px-7 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors tracking-wide"
              >
                Rezervovať termín
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-7 py-3 bg-white/15 text-white rounded-full hover:bg-white/25 transition-colors backdrop-blur-sm tracking-wide"
              >
                Pozrieť portfólio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Strip */}
      <section className="py-16 sm:py-20 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...fadeUp}>
            <p
              className="text-xl sm:text-2xl text-foreground leading-relaxed italic"
              style={{ fontFamily: "var(--font-family-heading)" }}
            >
              Volám sa Zuzka a fotografovanie je pre mňa viac než práca – je to radosť chodiť do práce a zároveň spôsob, ako zastaviť čas a uchovať chvíle, ktoré sa už nikdy nevrátia. Vitajte vo svete Zuzu Photo.
            </p>
            <Link
              to="/o-mne"
              className="inline-flex items-center gap-2 mt-6 text-primary hover:text-primary/80 transition-colors"
            >
              <span>Viac o mne</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {[
              {
                icon: Heart,
                title: "Srdcom a s trpezlivosťou",
                desc: "Každé stretnutie pre mňa znamená viac než len fotografovanie. Vytváram bezpečný a pokojný priestor, kde môžete byť sami sebou.",
              },
              {
                icon: Camera,
                title: "Profesionálny výsledok",
                desc: "Starostlivo retušované fotografie, kvalitná tlač a všetky zábery uložené na USB – pre váš dokonalý spomienkový album.",
              },
              {
                icon: Clock,
                title: "7 dní v týždni",
                desc: "Prispôsobím sa vášmu voľnému času. Fotenia prebiehajú aj cez víkendy a sviatky.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3
                    className="text-lg text-foreground"
                    style={{ fontFamily: "var(--font-family-heading)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12 sm:mb-16">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl text-foreground mb-4"
              style={{ fontFamily: "var(--font-family-heading)" }}
            >
              Fotografické služby – Čadca a Kysuce
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Každé fotenie je pre mňa jedinečný príbeh. Pozrite sa, ako vám
              môžem pomôcť zachytiť vaše najkrajšie okamihy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    to={service.to}
                    className="group block relative rounded-2xl overflow-hidden aspect-[4/3] hover:shadow-xl transition-shadow"
                  >
                    <ImageWithFallback
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3d2c2c]/90 via-[#3d2c2c]/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5 text-[#b08968]" />
                        <h3
                          className="text-lg text-white"
                          style={{ fontFamily: "var(--font-family-heading)" }}
                        >
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-sm text-white/90 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl text-foreground mb-4"
              style={{ fontFamily: "var(--font-family-heading)" }}
            >
              Čo hovoria klienti
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-card rounded-2xl p-6 sm:p-8 shadow-sm"
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-foreground leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{t.name}</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-[#b08968] text-[#b08968]"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl text-foreground mb-4"
              style={{ fontFamily: "var(--font-family-heading)" }}
            >
              Z môjho portfólia
            </h2>
          </motion.div>
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-4" style={{ minWidth: "max-content" }}>
            {galleryImages.slice(0, 10).map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="shrink-0 w-60 sm:w-72 aspect-[3/4] rounded-xl overflow-hidden"
              >
                <ImageWithFallback
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors tracking-wide"
          >
            Zobraziť celé portfólio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={images.detske15}
            alt="Profesionálne fotografovanie v Čadci – Zuzu Photo ateliér so záhradou"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#3d2c2c]/75" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...fadeUp}>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl text-white mb-4"
              style={{ fontFamily: "var(--font-family-heading)" }}
            >
              Pripravení zachytiť svoj výnimočný okamih a uchovať ho na celý život?
            </h2>
            <p className="text-white/70 mb-8 text-base sm:text-lg">
              Profesionálne fotografovanie v Čadci – ateliér, rozkvitnutá záhrada aj slnečná terasa pre vaše výnimočné fotografie. Parkovanie priamo na mieste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center px-7 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors tracking-wide"
              >
                Napísať správu
              </Link>
              <a
                href="tel:+421907533373"
                className="inline-flex items-center justify-center px-7 py-3 bg-white/15 text-white rounded-full hover:bg-white/25 transition-colors backdrop-blur-sm tracking-wide"
              >
                Zavolať
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
