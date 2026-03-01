import { Link } from "react-router";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Check, Star, Info, Usb, Gift } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

type PricingItem = {
  label: string;
  value: string;
  included?: boolean;
};

type PricingCard = {
  title: string;
  subtitle?: string;
  price: string;
  recommended?: boolean;
  christmas?: boolean;
  items: PricingItem[];
};

const pricingCards: PricingCard[] = [
  {
    title: "Novorodenecké fotografovanie",
    subtitle: "Najlepšie do 14 – 21 dní od narodenia",
    price: "130 €",
    items: [
      { label: "Počet upravených záberov", value: "6" },
      { label: "Formát tlače", value: "13 × 18 cm" },
      { label: "USB kľúč (fotoaparát CANON)", value: "+ 13 €" },
      { label: "Retušovanie", value: "✓", included: true },
      { label: "Kartička novorodenca (13 × 18 cm)", value: "✓", included: true },
      { label: "Každý ďalší záber", value: "+ 20 €" },
    ],
  },
  {
    title: "Rodinné / Deti",
    price: "130 €",
    items: [
      { label: "Počet upravených záberov", value: "8" },
      { label: "Formát tlače", value: "13 × 18 cm" },
      { label: "USB kľúč (fotoaparát CANON)", value: "+ 13 €" },
      { label: "Retušovanie", value: "✓", included: true },
      { label: "Každý ďalší záber", value: "+ 15 €" },
    ],
  },
  {
    title: "Tehotenské fotografovanie",
    price: "80 €",
    items: [
      { label: "Počet upravených záberov", value: "5" },
      { label: "Formát tlače", value: "13 × 18 cm" },
      { label: "USB kľúč (fotoaparát CANON)", value: "+ 13 €" },
      { label: "Retušovanie", value: "✓", included: true },
      { label: "Tehotenské šaty k dispozícii", value: "✓", included: true },
      { label: "Každý ďalší záber", value: "+ 15 €" },
    ],
  },
  {
    title: "MINI balíček – Rodinné fotenie",
    price: "70 €",
    items: [
      { label: "Počet upravených záberov", value: "4" },
      { label: "Formát tlače", value: "13 × 18 cm" },
      { label: "USB kľúč (fotoaparát CANON)", value: "+ 13 €" },
      { label: "Retušovanie", value: "✓", included: true },
      { label: "Každý ďalší záber", value: "+ 15 €" },
    ],
  },
  {
    title: "MAXI balíček – Rodinné fotenie",
    price: "130 €",
    recommended: true,
    items: [
      { label: "Počet upravených záberov", value: "10" },
      { label: "Formát tlače", value: "13 × 18 cm" },
      { label: "USB kľúč (fotoaparát CANON)", value: "+ 13 €" },
      { label: "Retušovanie", value: "✓", included: true },
      { label: "Každý ďalší záber", value: "+ 15 €" },
    ],
  },
  {
    title: "Vianočné fotografovanie",
    price: "80 €",
    christmas: true,
    items: [
      { label: "Počet upravených záberov", value: "5" },
      { label: "Formát tlače", value: "13 × 18 cm" },
      { label: "USB kľúč (fotoaparát CANON)", value: "+ 13 €" },
      { label: "Pohľadnica 13 × 18 cm", value: "2 × ZDARMA", included: true },
      { label: "Kalendár A3 zalaminovaný", value: "+ 10 €" },
      { label: "Každý ďalší záber", value: "+ 15 €" },
    ],
  },
];

const weddingPackages = [
  {
    name: "Balíček 1",
    price: "500 €",
    features: {
      trvanie: "cca 3 hodiny",
      pripravy: false,
      obrad: true,
      exterier: "pred/po obrade",
      gratulacie: true,
      hostina: false,
      fotografie: "cca 600",
      upravene: "30 (13 × 18 cm)",
      usb: true,
      spracovanie: "cca 6 týždňov",
    },
  },
  {
    name: "Balíček 2",
    price: "700 €",
    features: {
      trvanie: "Prípravy + obrad + 1. tanec",
      pripravy: true,
      obrad: true,
      exterier: "1 hodina",
      gratulacie: true,
      hostina: "do 1. tanca",
      fotografie: "cca 1 000",
      upravene: "40 (13 × 18 cm)",
      usb: true,
      spracovanie: "cca 6 týždňov",
    },
  },
  {
    name: "Balíček 3",
    price: "1 000 €",
    features: {
      trvanie: "Celý deň (do cca 1:00)",
      pripravy: true,
      obrad: true,
      exterier: "1 hodina",
      gratulacie: true,
      hostina: "do cca 1:00",
      fotografie: "cca 1 800",
      upravene: "60 (13 × 18 cm)",
      usb: true,
      spracovanie: "cca 6 týždňov",
    },
  },
];

const weddingFeatureLabels = [
  { key: "trvanie", label: "Trvanie" },
  { key: "pripravy", label: "Prípravy nevesty/ženícha" },
  { key: "obrad", label: "Obrad (kostol / úrad)" },
  { key: "exterier", label: "Exteriérové portréty" },
  { key: "gratulacie", label: "Gratulácie + rodina" },
  { key: "hostina", label: "Hostina" },
  { key: "fotografie", label: "Počet fotografií (DVD/USB)" },
  { key: "upravene", label: "Upravené fotografie" },
  { key: "usb", label: "USB kľúč (fotoaparát CANON)" },
  { key: "spracovanie", label: "Spracovanie" },
];

export function Cennik() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Cenník fotenia Čadca – Zuzu Photo</title>
        <meta name="description" content="Cenník profesionálneho fotografovania v Čadci. Novorodenci od 130 €, tehotenské od 80 €, svadby od 500 €. Rodinné a detské fotenie Čadca, Kysuce." />
        <link rel="canonical" href="https://www.zuzu-photo.sk/cennik" />
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
            Cenník fotografovania – Čadca a Kysuce
          </motion.h1>
          <p className="text-muted-foreground">
            Cenník je platný od 1. 1. {new Date().getFullYear()}. V prípade otázok ma neváhajte kontaktovať.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`relative rounded-2xl border p-6 sm:p-8 flex flex-col ${
                card.recommended
                  ? "border-primary bg-primary/5 shadow-lg ring-2 ring-primary/20"
                  : "border-border bg-card shadow-sm"
              }`}
            >
              {card.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs">
                  <Star className="w-3 h-3" />
                  Odporúčaný
                </div>
              )}
              {card.christmas && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 bg-[#c41e3a] text-white rounded-full text-xs">
                  🎄 Vianoce
                </div>
              )}

              <h3
                className="text-lg text-foreground mb-1"
                style={{ fontFamily: "var(--font-family-heading)" }}
              >
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 min-h-[1.25rem]">
                {card.subtitle ?? ""}
              </p>

              <div className="mb-6">
                <span
                  className="text-3xl text-primary"
                  style={{ fontFamily: "var(--font-family-heading)" }}
                >
                  {card.price}
                </span>
              </div>

              <ul className="space-y-3">
                {card.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start justify-between gap-3 text-sm"
                  >
                    <span className="text-muted-foreground">{item.label}</span>
                    <span
                      className={`shrink-0 ${
                        item.included
                          ? "text-primary"
                          : "text-foreground"
                      }`}
                    >
                      {item.included && item.value === "✓" ? (
                        <Check className="w-4 h-4 text-primary" />
                      ) : (
                        item.value
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/kontakt"
                className={`block text-center mt-auto pt-6 py-2.5 rounded-full text-sm tracking-wide transition-colors ${
                  card.recommended
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-primary text-primary hover:bg-primary/5"
                }`}
              >
                Rezervovať termín
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gift Voucher */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-2xl bg-primary/5 border border-primary/20 p-8 sm:p-10"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Gift className="w-7 h-7 text-primary" />
            </div>
            <div className="flex-1">
              <h2
                className="text-xl sm:text-2xl text-foreground mb-2"
                style={{ fontFamily: "var(--font-family-heading)" }}
              >
                Darčeková poukážka
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Neviete, čo darovať? Darujte krásny zážitok! Poukážky sú dostupné na novorodenecké, vianočné, rodinné aj tehotenské fotenie – alebo ako univerzálna poukážka využiteľná počas celého roka. Stačí ma kontaktovať a dohodneme podrobnosti.
              </p>
            </div>
            <Link
              to="/kontakt"
              className="shrink-0 inline-block px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm tracking-wide hover:bg-primary/90 transition-colors"
            >
              Objednať poukážku
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Add-ons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div
          {...fadeUp}
          className="bg-card rounded-2xl border border-border p-6 sm:p-8"
        >
          <div className="flex items-center gap-2 mb-5">
            <Info className="w-5 h-5 text-primary" />
            <h3
              className="text-lg text-foreground"
              style={{ fontFamily: "var(--font-family-heading)" }}
            >
              Doplnky & informácie
            </h3>
          </div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Usb className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span>
                <strong>USB kľúč</strong> (tvar fotoaparátu) — 13 € / kus{" "}
                <em className="text-muted-foreground">
                  (prineste si ho na ďalšie fotografovanie)
                </em>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-4 h-4 shrink-0 flex items-center justify-center text-primary">✕</span>
              <span><strong>Neupravené zábery</strong> neposkytujeme</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-4 h-4 shrink-0 flex items-center justify-center text-primary">⚡</span>
              <span>
                <strong>VIP spracovanie</strong> — urýchlené doručenie (+ 20 € / + 75 € pri svadbách)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-4 h-4 shrink-0 flex items-center justify-center text-primary">📅</span>
              <span><strong>Kalendár A3 zalaminovaný</strong> — 10 €</span>
            </li>
          </ul>

          <div className="mt-6 border-t border-border pt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <div className="flex items-start gap-3">
              <span className="shrink-0 text-base">📷</span>
              <p>
                USB kľúč je krásny, štýlový – v tvare fotoaparátu, akým Vás budem fotografovať, stojí 13 € / kus. Preto si ho vždy na ďalšie fotografovanie prineste, alebo ak máte svoj, prineste si ten.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="shrink-0 text-base">👶</span>
              <p>
                Nemusíte si robiť starosti s balením pol domácnosti – máme pre vás kopec krásneho oblečenia, čeleniek, čiapočiek, dečiek a rekvizít, ktoré spolu vyberieme tak, aby vaše bábätko vyniklo v celej svojej dokonalosti.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="shrink-0 text-base">🍼</span>
              <p>
                Na fotografovanie si prineste mliečko, plienočku na prebalenie, látkovú plienočku a deku na zabalenie bábätka. Ak je naučené na cumlík – aj ten zoberte 🙂
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="shrink-0 text-base">👗</span>
              <p>
                K dispozícii sú aj tehotenské šaty, ktoré môžete využiť – alebo si pokojne obliecť svoje obľúbené, v ktorých sa cítite krásna a sebavedomá.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="shrink-0 text-base">🎨</span>
              <p>
                K dispozícii máme veľké množstvo rekvizít, foto-pozadí či oblečenia pre detičky.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Wedding Packages */}
      <section className="bg-secondary py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2
              className="text-2xl sm:text-3xl text-foreground mb-3"
              style={{ fontFamily: "var(--font-family-heading)" }}
            >
              Svadobné fotografovanie
            </h2>
          </motion.div>

          {/* Desktop Table */}
          <motion.div {...fadeUp} className="hidden md:block">
            <div className="bg-card rounded-2xl shadow-sm overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 text-sm text-muted-foreground"></th>
                    {weddingPackages.map((pkg) => (
                      <th key={pkg.name} className="p-4 text-center">
                        <span
                          className="text-base text-foreground block mb-1"
                          style={{ fontFamily: "var(--font-family-heading)" }}
                        >
                          {pkg.name}
                        </span>
                        <span
                          className="text-2xl text-primary"
                          style={{ fontFamily: "var(--font-family-heading)" }}
                        >
                          {pkg.price}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {weddingFeatureLabels.map((feat) => (
                    <tr key={feat.key} className="border-b border-border/50">
                      <td className="p-4 text-sm text-muted-foreground">
                        {feat.label}
                      </td>
                      {weddingPackages.map((pkg) => {
                        const val =
                          pkg.features[
                            feat.key as keyof typeof pkg.features
                          ];
                        return (
                          <td key={pkg.name} className="p-4 text-center text-sm">
                            {val === true ? (
                              <Check className="w-4 h-4 text-primary mx-auto" />
                            ) : val === false ? (
                              <span className="text-muted-foreground/40">—</span>
                            ) : (
                              <span className="text-foreground">{val}</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="p-4"></td>
                    {weddingPackages.map((pkg) => (
                      <td key={pkg.name} className="p-4 text-center">
                        <Link
                          to="/kontakt"
                          className="inline-block px-6 py-2.5 border border-primary text-primary rounded-full hover:bg-primary/5 transition-colors text-sm"
                        >
                          Vybrať {pkg.name}
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
          </motion.div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-6">
            {weddingPackages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-sm"
              >
                <div className="text-center mb-4">
                  <h3
                    className="text-lg text-foreground mb-1"
                    style={{ fontFamily: "var(--font-family-heading)" }}
                  >
                    {pkg.name}
                  </h3>
                  <span
                    className="text-2xl text-primary"
                    style={{ fontFamily: "var(--font-family-heading)" }}
                  >
                    {pkg.price}
                  </span>
                </div>
                <ul className="space-y-3">
                  {weddingFeatureLabels.map((feat) => {
                    const val =
                      pkg.features[feat.key as keyof typeof pkg.features];
                    return (
                      <li
                        key={feat.key}
                        className="flex items-start justify-between gap-3 text-sm"
                      >
                        <span className="text-muted-foreground">
                          {feat.label}
                        </span>
                        <span className="shrink-0 text-right">
                          {val === true ? (
                            <Check className="w-4 h-4 text-primary" />
                          ) : val === false ? (
                            <span className="text-muted-foreground/40">—</span>
                          ) : (
                            <span className="text-foreground">{val}</span>
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <Link
                  to="/kontakt"
                  className="block text-center mt-6 py-2.5 border border-primary text-primary rounded-full hover:bg-primary/5 transition-colors text-sm"
                >
                  Vybrať {pkg.name}
                </Link>
              </motion.div>
            ))}
          </div>

          

          {/* FAQ */}
          <motion.div {...fadeUp} className="mt-10">
            <h2
              className="text-2xl sm:text-3xl text-foreground mb-6 text-center"
              style={{ fontFamily: "var(--font-family-heading)" }}
            >
              Časté otázky – Cena fotenia Čadca
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Koľko stojí fotenie novorodenca v Čadci?",
                  a: "Novorodenecké fotenie u nás stojí 130 €. Cena zahŕňa retušovanie, 6 upravených záberov a tlač vo formáte 13 × 18 cm. Ideálny čas na fotenie je do 14–21 dní od narodenia.",
                },
                {
                  q: "Ako dlho trvá fotenie?",
                  a: "Novorodenecké fotenie trvá 2–4 hodiny, rodinné a detské fotenie cca 1–2 hodiny. Na svadbách závisí od zvoleného balíčka (3–12 hodín).",
                },
                {
                  q: "Kedy dostaneme hotové fotografie?",
                  a: "Fotografie doručíme do 6 týždňov od fotenia. Pri VIP spracovaní (príplatok 20 €, pri svadbách 75 €) doručíme prednostne v kratšom termíne.",
                },
                {
                  q: "Fotografujete aj mimo Čadce – na Kysuciach alebo v Žiline?",
                  a: "Áno, fotíme aj mimo Čadce. K cene sa pripočítavajú cestovné náklady podľa vzdialenosti.",
                },
                {
                  q: "Čo si priniesť na novorodenecké fotenie?",
                  a: "Stačí priniesť mliečko, plienočku, látkovú plienku a deku. Oblečenie, čelenky, deky a rekvizity máme pripravené v ateliéri. Ak je bábätko zvyknuté na cumlík, vezmite aj ten.",
                },
                           {
                  q: "Dá sa u vás zakúpiť darčeková poukážka? ",
                  a: "Áno, u nás si môžete zakúpiť darčekové poukážky na rôzne príležitosti – napríklad na novorodenecké či vianočné fotenie, alebo univerzálnu poukážku využiteľnú počas celého roka.",
                },
                           {
                  q: "Kde sa nachádza váš ateliér?",
                  a: "Náš fotoateliér sa nachádza priamo v centre mesta Čadca, na Hornej ulici 123/51, v rodinnom dome s pohodlným parkovaním. Súčasťou ateliéru je aj krásna terasa so záhradou, kde je možné fotografovať aj vonku. Nachádza sa len kúsok nad Zdravotnou školou.",
                },
              ].map((item) => (
                <div key={item.q} className="bg-card rounded-2xl border border-border p-5 sm:p-6">
                  <h3
                    className="text-base text-foreground mb-2"
                    style={{ fontFamily: "var(--font-family-heading)" }}
                  >
                    {item.q}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Wedding package details */}
          <motion.div
            {...fadeUp}
            className="mt-8 space-y-4"
          >
                     <h2
              className="text-2xl sm:text-3xl text-foreground mb-6 text-center"
              style={{ fontFamily: "var(--font-family-heading)" }}
            >
              Svadobné fotografovanie
            </h2>
            <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 space-y-4 text-sm leading-relaxed">
              <div className="space-y-2">
                <h4
                  className="text-base text-foreground"
                  style={{ fontFamily: "var(--font-family-heading)" }}
                >
                  Balíček 1 – 500 €
                </h4>
                <p className="text-muted-foreground">
                  Balíček zahŕňa fotografovanie obradu v kostole alebo na úrade,
                  gratulácie po obrade a spoločné fotografie s rodinou.
                  Portrétové fotografovanie v exteriéri pred alebo po obrade.
                  Celkové trvanie cca 3 hodiny.
                </p>
                <p className="text-muted-foreground">
                  Výstupom je cca 600 fotografií na USB, 30 upravených fotografií
                  s tlačou vo formáte 13 × 18 cm. Všetky ostatné zábery sú bez retuše.
                  Spracovanie cca 6 týždňov.
                </p>
              </div>

              <div className="border-t border-border/50 pt-4 space-y-2">
                <h4
                  className="text-base text-foreground"
                  style={{ fontFamily: "var(--font-family-heading)" }}
                >
                  Balíček 2 – 700 €
                </h4>

                <p className="text-muted-foreground">
                  Balíček zahŕňa fotografovanie príprav nevesty, ženícha,
                  fotografovanie v kostole alebo na úrade, gratulácie po obrade
                  a spoločné fotografie s rodinou. Portrétové fotografovanie
                  v trvaní 1 hodiny pred alebo po obrade v exteriéri,
                  fotografovanie v sále po prvý tanec mladomanželov.
                </p>
                <p className="text-muted-foreground">
                  Výstupom je cca 1 000 fotografií na DVD, 40 upravených
                  fotografií s tlačou vo formáte 13 × 18 cm. USB kľúč je krásny,
                  štýlový – v tvare fotoaparátu, akým Vás budem fotografovať.
                  Všetky ostatné zábery sú bez retuše.
                </p>
              </div>

              <div className="border-t border-border/50 pt-4 space-y-2">
                <h4
                  className="text-base text-foreground"
                  style={{ fontFamily: "var(--font-family-heading)" }}
                >
                  Balíček 3 – 1 000 €
                </h4>
                <p className="text-muted-foreground">
                  Balíček zahŕňa fotografovanie príprav nevesty, ženícha,
                  portrétové fotografovanie v trvaní 1 hodiny pred alebo po
                  obrade v exteriéri, fotografovanie obradu na úrade alebo
                  v kostole, gratulácie po obrade a spoločné fotografie s rodinou
                  pred kostolom a hostina do cca 1 hodiny v noci.
                </p>
                <p className="text-muted-foreground">
                  Výstupom je cca 1 800 fotografií na DVD/USB, 60 upravených
                  fotografií z celého dňa, tlač vo formáte 13 × 18 cm. USB kľúč
                  je krásny, štýlový – v tvare fotoaparátu, akým Vás budem
                  fotografovať. Všetky ostatné zábery sú bez retuše.
                </p>
              </div>

              <div className="border-t border-border/50 pt-4 space-y-3">
                <p className="text-muted-foreground">
                  K balíčkom sa pripočítavajú cestovné náklady v prípade, ak je
                  fotografovanie, prípadne hostina mimo Čadce.
                </p>
                <p className="text-muted-foreground">
                  Svadba patrí medzi najkrajšie a najvýznamnejšie dni v živote.
                  Každý pohľad, úsmev, dotyk a slza šťastia si zaslúžia zostať
                  navždy zachované. Naším cieľom je vytvoriť fotografie, ktoré
                  budú nielen krásne, ale aj nadčasové – spomienky, ktoré si
                  budete s radosťou pozerať aj o mnoho rokov.
                </p>
                <p className="text-muted-foreground">
                  Fotíme s citom a trpezlivosťou, aby ste sa cítili prirodzene
                  a uvoľnene.
                </p>
                <blockquote className="border-l-4 border-primary/30 pl-4 italic text-foreground">
                  „Svadbu fotografujeme dvaja – ja a môj partner a priateľ –
                  aby sme zachytili všetky momenty z rôznych uhlov a nič
                  dôležité vám neuniklo."
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
