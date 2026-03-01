import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Zuzka – fotografka Čadca – Zuzu Photo</title>
        <meta name="description" content="Spoznajte Zuzku – profesionálnu fotografku z Čadce s 15-ročnou praxou. Novorodenci, deti, rodina, svadby, tehotenstvo. Fotografie plné emócií a lásky." />
        <link rel="canonical" href="https://www.zuzu-photo.sk/o-mne" />
      </Helmet>

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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Fotografovanie je pre mňa viac než práca – je to radosť chodiť do práce a zároveň spôsob, ako zastaviť čas a uchovať chvíle, ktoré sa už nikdy nevrátia.
          </motion.p>
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
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src={images.photographer}
                alt="Zuzana Ďurná-Kondeková"
                className="w-full h-auto"
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
            <div className="space-y-5 text-foreground leading-relaxed text-justify">
              <p>
                Moju cestu k fotografovaniu ovplyvnili moje dve krásne deti a tiež môj otec, fotograf a dokumentarista, ktorý mi daroval prvý fotoaparát a naučil ma vidieť svet cez objektív. Okrem štúdia na umeleckej škole – odboru pasiar (umelecko-remeselné spracovanie kovov) – ma fascinovali aj hodiny fotografie. Po skončení štúdia som niekoľko rokov pracovala ako grafička a zároveň fotografovala produktové fotografie, čo mi poskytlo cenný cit pre vizuál a detaily. Po materskej dovolenke som si splnila sen a otvorila vlastný ateliér.
              </p>
              <p>
                Už viac ako 15 rokov je každé fotenie pre mňa jedinečné – od prvých dní života až po detičky, rodiny či tehotné maminky. Novorodenci sú pre mňa špeciálni, no všetky vekové kategórie vítam s rovnakou láskou. Deti ma pri fotografovaní fascinujú – v okamihu sa dokážu stať kuchárikom, hudobníkom, kominárikom či manažérkou, alebo princeznou… no pritom stále ostávajú deťmi – čistými a nevinnými.
              </p>
              <p>
                Je dôležité, aby na fotografii bolo len to, čo tam má byť. Skvelé je, keď fotografii dokážem dať dušu, ktorá vás pohľadom na ňu chytí za srdce.
              </p>
              <p>
                Fotenie prebieha v útulnom prostredí rodinného domu v Čadci – s pohodlným parkovaním priamo na mieste, ateliérom aj krásnou terasou so záhradou, kde sa dá fotografovať aj vonku.
              </p>
              <p>
                Môžete si vybrať atmosféru, ktorá vám najviac vyhovuje, alebo kombinovať interiér s exteriérom – a to všetko pokojne a pohodlne, s úžasnou kávou alebo čajom v ruke.
              </p>
              <p>
                Za tie roky nevznikli len tisíce fotografií, ale aj krásne priateľstvá. Sledujem, ako z vašich novorodencov rastú školáci či mladí dospelí, a veľmi si vážim vašu dôveru. Teším sa na každý ďalší príbeh, ktorý spoločne zachytíme.
              </p>
              <p className="font-medium">
                Objednávky: +421 907 533 373
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
              „Fotografia musí mať dušu — takú, ktorá vás chytí za srdce a na chvíľu zastaví čas.."
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

            <div className="space-y-6">
              <div className="bg-secondary rounded-2xl p-6 sm:p-8">
                <p className="text-sm text-primary mb-3 italic font-medium">
                  Odkedy sa venujete fotografovaniu a ako dlho vykonávate túto profesiu?
                </p>
                <blockquote className="text-foreground leading-relaxed border-l-4 border-primary/30 pl-4">
                  Okrem študijného odboru pasiar (umelecko-remeselné spracovanie kovov) ma zaujímali aj hodiny fotografie. Mám otvorený vlastný ateliér v Čadci, ktorý je bohato vybavený rôznymi rekvizitami, ktoré nielen nakupujem, ale aj vlastnoručne vyrábam, a tým sú moje fotografie originálne.
                </blockquote>
              </div>

              <div className="bg-secondary rounded-2xl p-6 sm:p-8">
                <p className="text-sm text-primary mb-3 italic font-medium">
                  Čo vás k fotografovaniu priviedlo? Prečo práve fotografia?
                </p>
                <blockquote className="text-foreground leading-relaxed border-l-4 border-primary/30 pl-4">
                  Ďalšou inšpiráciou bol môj otec, fotograf, dokumentarista a vydavateľ Juraj Ďurný, ktorý mi daroval môj prvý fotoaparát a zasvätil ma do tajov fotografovania. V jeho reklamnej agentúre som pracovala ako grafička niekoľko rokov. Po skončení materskej dovolenky som si otvorila vlastný ateliér, kde sa naplno venujem svojej tvorbe. Okrem fotografovania detí, novorodencov a portrétovej fotografie sa venujem aj svadobnej, tehotenskej, rodinnej, fotografovaniu modeliek, interiérovej a exteriérovej fotografii.
                </blockquote>
              </div>

              <div className="bg-secondary rounded-2xl p-6 sm:p-8">
                <p className="text-sm text-primary mb-3 italic font-medium">
                  Všimla som si, že fotografujete najčastejšie portréty detí. Je práve portrét detí tou formou fotografií, ktoré robíte najradšej?
                </p>
                <blockquote className="text-foreground leading-relaxed border-l-4 border-primary/30 pl-4">
                  Deti ma pri fotografovaní vždy fascinujú. V okamihu sa dokážu stať veľmi dospelé, stačí pár rekvizít a pred objektívom mám kuchárika, kominárika, manažérku, opravára či boxera…, ale pritom stále ostávajú deťmi, čistými a nevinnými. Veľmi by som im priala, aby také ostali, aj keď vyrastú. A my dospelí, aby sme pri pohľade na ich fotografie objavili dieťa v sebe. Ak sa nám to podarí, náš život bude určite krajší…
                </blockquote>
              </div>

              <div className="bg-secondary rounded-2xl p-6 sm:p-8">
                <p className="text-sm text-primary mb-3 italic font-medium">
                  Čo vaša fotografia musí obsahovať, aby bola podľa vás dokonalá, alebo sa k dokonalosti aspoň približovala?
                </p>
                <blockquote className="text-foreground leading-relaxed border-l-4 border-primary/30 pl-4">
                  Je dobré, keď je na fotografii len to, čo tam má byť. Vynikajúce je, keď fotografii dokážem dať dušu, ktorú má vtedy, keď vás pohľad na ňu chytí za srdce.
                </blockquote>
              </div>

              <p className="text-xs text-muted-foreground text-right">
                Zdroj: Kysucký večerník
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
