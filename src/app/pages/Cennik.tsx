import { Link } from "react-router";
import { motion } from "motion/react";
import { Check, Star, Info, Usb } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" },
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
    subtitle: "Od narodenia po 1 mesiac",
    price: "100 €",
    items: [
      { label: "Počet upravených záberov", value: "6" },
      { label: "Formát tlače", value: "10 × 15 cm" },
      { label: "Retušovanie", value: "✓", included: true },
      { label: "Kartička novorodenca (10 × 15 cm)", value: "✓", included: true },
      { label: "Každý ďalší záber", value: "+ 10 €" },
      { label: "VIP spracovanie", value: "+ 20 €" },
      { label: "Spracovanie", value: "cca 1 mesiac od výberu" },
    ],
  },
  {
    title: "Rodinné / Deti",
    price: "80 €",
    items: [
      { label: "Počet upravených záberov", value: "6" },
      { label: "Formát tlače", value: "10 × 15 cm" },
      { label: "Retušovanie", value: "✓", included: true },
      { label: "Každý ďalší záber", value: "+ 10 €" },
      { label: "Každá ďalšia začatá hodina", value: "+ 10 €" },
      { label: "VIP spracovanie", value: "+ 20 €" },
      { label: "Spracovanie", value: "cca 1 mesiac od výberu" },
    ],
  },
  {
    title: "Tehotenské a portrétové",
    price: "70 €",
    items: [
      { label: "Počet upravených záberov", value: "5" },
      { label: "Formát tlače", value: "10 × 15 cm" },
      { label: "Retušovanie", value: "✓", included: true },
      { label: "Každý ďalší záber", value: "+ 10 €" },
      { label: "Každá ďalšia začatá hodina", value: "+ 10 €" },
      { label: "VIP spracovanie", value: "+ 20 €" },
      { label: "Spracovanie", value: "cca 1 mesiac od výberu" },
    ],
  },
  {
    title: "MINI balíček",
    price: "60 €",
    items: [
      { label: "Počet upravených záberov", value: "4" },
      { label: "Formát tlače", value: "10 × 15 cm" },
      { label: "Retušovanie", value: "✓", included: true },
      { label: "Každý ďalší záber", value: "+ 10 €" },
      { label: "Každá ďalšia začatá hodina", value: "+ 10 €" },
      { label: "VIP spracovanie", value: "+ 20 €" },
      { label: "Spracovanie", value: "cca 1 mesiac od výberu" },
    ],
  },
  {
    title: "MAXI balíček",
    price: "100 €",
    recommended: true,
    items: [
      { label: "Počet upravených záberov", value: "10" },
      { label: "Formát tlače", value: "10 × 15 cm" },
      { label: "Retušovanie", value: "✓", included: true },
      { label: "Každý ďalší záber", value: "+ 10 €" },
      { label: "Každá ďalšia začatá hodina", value: "+ 10 €" },
      { label: "VIP spracovanie", value: "+ 20 €" },
      { label: "Spracovanie", value: "cca 1 mesiac od výberu" },
    ],
  },
  {
    title: "Vianočné fotografovanie",
    price: "75 €",
    christmas: true,
    items: [
      { label: "Počet upravených záberov", value: "5" },
      { label: "Formát tlače", value: "10 × 15 cm" },
      { label: "Pohľadnica", value: "2 × ZDARMA", included: true },
      { label: "Foto-magnetka", value: "4 €" },
      { label: "Kalendár A3 zalaminovaný", value: "10 €" },
      { label: "Každý ďalší záber", value: "+ 10 €" },
      { label: "VIP spracovanie", value: "+ 20 €" },
      { label: "Spracovanie", value: "cca 1 mesiac od výberu" },
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
      upravene: "30",
      vip: "+ 75 €",
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
      upravene: "40",
      vip: "+ 75 €",
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
      upravene: "60",
      vip: "+ 75 €",
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
  { key: "upravene", label: "Upravené fotografie (tlač 10×15)" },
  { key: "vip", label: "VIP spracovanie" },
  { key: "spracovanie", label: "Spracovanie" },
];

export function Cennik() {
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
            Cenník
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
              className={`relative rounded-2xl border p-6 sm:p-8 ${
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
              {card.subtitle && (
                <p className="text-sm text-muted-foreground mb-4">
                  {card.subtitle}
                </p>
              )}

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
                className={`block text-center mt-6 py-2.5 rounded-full text-sm tracking-wide transition-colors ${
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
              </table>
              <div className="p-4 flex justify-center gap-4">
                {weddingPackages.map((pkg) => (
                  <Link
                    key={pkg.name}
                    to="/kontakt"
                    className="px-6 py-2.5 border border-primary text-primary rounded-full hover:bg-primary/5 transition-colors text-sm"
                  >
                    Vybrať {pkg.name}
                  </Link>
                ))}
              </div>
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

          <motion.p
            {...fadeUp}
            className="text-center text-sm text-muted-foreground mt-6 italic"
          >
            K svadobným balíčkom sa pripočítavajú cestovné náklady pri
            fotografovaní mimo Čadce.
          </motion.p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          {...fadeUp}
          className="bg-card rounded-2xl border border-border p-6 sm:p-8"
        >
          <div className="flex items-center gap-2 mb-6">
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
                <strong>USB kľúč</strong> (tvar fotoaparátu) — 10 € / kus{" "}
                <em className="text-muted-foreground">
                  (prineste si ho na ďalšie fotografovanie)
                </em>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-4 h-4 shrink-0 flex items-center justify-center text-primary">
                ✕
              </span>
              <span>
                <strong>Neupravené zábery</strong> neposkytujeme
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-4 h-4 shrink-0 flex items-center justify-center text-primary">
                ⚡
              </span>
              <span>
                <strong>VIP spracovanie</strong> — urýchlené doručenie (+ 20 € /
                + 75 € pri svadbách)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-4 h-4 shrink-0 flex items-center justify-center text-primary">
                🧲
              </span>
              <span>
                <strong>Foto-magnetka</strong> — 4 €
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-4 h-4 shrink-0 flex items-center justify-center text-primary">
                📅
              </span>
              <span>
                <strong>Kalendár A3 zalaminovaný</strong> — 10 €
              </span>
            </li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
