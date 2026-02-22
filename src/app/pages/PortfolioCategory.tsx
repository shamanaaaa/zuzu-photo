import { useParams, Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState, useCallback, useRef } from "react";
import { ArrowLeft, X } from "lucide-react";
import { galleryImages, images } from "../data/images";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

type CategoryData = {
  title: string;
  intro: string;
  filterKey: string;
  extraImages?: string[];
  cta?: string;
  ctaLink?: string;
};

const categoryMap: Record<string, CategoryData> = {
  novorodenci: {
    title: "Novorodenecké fotografovanie",
    intro: "Prvé dni života sú zázračné. Novorodeniatka sa fotografujú ideálne do 14 dní od narodenia, kedy sú ešte pokojné a poddajné. V pohodlí nášho ateliéru s množstvom rekvizít, jemným svetlom a teplou atmosférou vytvoríme spomienky na celý život. Vaše zlatíčko u nás bude v bezpečí a pohode.",
    filterKey: "novorodenci",
    cta: "Pozrieť cenník",
    ctaLink: "/cennik",
  },
  "deti-do-1-roka": {
    title: "Fotografovanie bábätiek do 1 roka",
    intro: "Každý mesiac prináša nové prekvapenie — prvý úsmev, prvé sedenie, prvé kroky. Zachyťme každú míľnik vášho bábätka v krásnych, hravých fotografiách.",
    filterKey: "deti",
    extraImages: [images.baby1, images.baby2],
  },
  "deti-od-1-roka": {
    title: "Fotografovanie detičiek od 1 roka",
    intro: "Väčšie deti, väčšie dobrodružstvá. S hromadou rekvizít a trpezlivosťou vytvoríme fotografie, ktoré odrazia ich jedinečnú osobnosť — či už je to kuchárik, superhrdina alebo baletka.",
    filterKey: "deti",
    extraImages: [images.toddler, images.childGirl],
  },
  deti: {
    title: "Detské fotografovanie",
    intro: "Deti sú naši najúprimnejší modeli. Ich radosť, zvedavosť a spontánnosť sa premieta do každej fotografie.",
    filterKey: "deti",
  },
  "deti-15": {
    title: "Fotografovanie tínedžerov",
    intro: "Štrnásť, pätnásť, šestnásť — vek plný zmien a objavovania seba samého. Portrétové fotografovanie pre mladých ľudí, ktorí chcú vyjadriť svoju osobnosť. Prirodzene, sebavedome, krásne.",
    filterKey: "deti",
    extraImages: [images.teenager],
  },
  tehotenske: {
    title: "Tehotenské fotografovanie",
    intro: "Tehotenstvo je jedným z najkrajších období v živote ženy. Nechajte si ho zachytiť v nežných, elegantných portrétoch — v ateliéri alebo v exteriéri. K dispozícii máme aj krásne tehotenské šaty na fotografovanie.",
    filterKey: "tehotenske",
    cta: "Pozrieť cenník",
    ctaLink: "/cennik",
  },
  rodinne: {
    title: "Rodinné fotografovanie",
    intro: "Rodina je to najdôležitejšie, čo máme. Spoločné fotografie sú pokladom, ku ktorému sa budete celý život vracať. Príďte k nám celá rodina a zachytíme váš spoločný príbeh.",
    filterKey: "rodina",
  },
  svadobne: {
    title: "Svadobné fotografovanie",
    intro: "Váš svadobný deň je plný emócií, krasy a lásky. Je mojou úlohou, aby ste tieto okamihmi mohli prežívať znova a znova — prostredníctvom fotografií, ktoré rozprávajú váš príbeh. Pracujem nenápadne, s citom a vždy v uvoľnenej, priateľskej atmosfére.",
    filterKey: "svadobne",
    cta: "Pozrieť svadobné balíčky",
    ctaLink: "/cennik",
  },
  exterier: {
    title: "Fotografovanie v exteriéri",
    intro: "Vonkajšie prostredie ponúka neopakovateľné svetlo, farby a kulisy. Lúka, les, historické centrum — exteriérové fotografovanie dodá vašim fotografiám autentickosť a vzdušnosť.",
    filterKey: "exterier",
  },
};

export function PortfolioCategory() {
  const { category } = useParams<{ category: string }>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const data = category ? categoryMap[category] : null;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-foreground mb-4" style={{ fontFamily: "var(--font-family-heading)" }}>
            Kategória nenájdená
          </h1>
          <Link to="/portfolio" className="text-primary hover:text-primary/80">
            Späť na portfólio
          </Link>
        </div>
      </div>
    );
  }

  const categoryImages = galleryImages.filter(
    (img) => img.category === data.filterKey
  );

  const extraImageItems = (data.extraImages || []).map((src, i) => ({
    id: `extra-${i}`,
    src,
    alt: data.title,
    category: data.filterKey,
  }));

  const allImages = [...categoryImages, ...extraImageItems];

  const touchStartX = useRef<number>(0);

  const openLightbox = useCallback((idx: number) => setLightboxIndex(idx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 sm:py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Späť na portfólio</span>
          </Link>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl text-foreground mb-6"
            style={{ fontFamily: "var(--font-family-heading)" }}
          >
            {data.title}
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            {data.intro}
          </p>
          {data.cta && data.ctaLink && (
            <div className="mt-6 flex gap-4">
              <Link
                to={data.ctaLink}
                className="inline-flex items-center px-6 py-2.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-sm tracking-wide"
              >
                {data.cta}
              </Link>
              <Link
                to="/kontakt"
                className="inline-flex items-center px-6 py-2.5 border border-primary text-primary rounded-full hover:bg-primary/5 transition-colors text-sm tracking-wide"
              >
                Rezervovať
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 1024: 3 }}>
          <Masonry gutter="16px">
            {allImages.map((img, idx) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="cursor-pointer group rounded-xl overflow-hidden"
                onClick={() => openLightbox(idx)}
              >
                <ImageWithFallback
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
            onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              const dx = e.changedTouches[0].clientX - touchStartX.current;
              if (Math.abs(dx) > 50) {
                e.stopPropagation();
                if (dx < 0) {
                  setLightboxIndex(lightboxIndex < allImages.length - 1 ? lightboxIndex + 1 : 0);
                } else {
                  setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : allImages.length - 1);
                }
              }
            }}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(
                  lightboxIndex > 0 ? lightboxIndex - 1 : allImages.length - 1
                );
              }}
              className="absolute left-2 z-10 p-3 text-white/70 hover:text-white text-4xl bg-black/40 rounded-full leading-none"
            >
              ‹
            </button>
            <motion.img
              key={allImages[lightboxIndex]?.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={allImages[lightboxIndex]?.src}
              alt={allImages[lightboxIndex]?.alt}
              className="max-h-[85vh] max-w-[calc(100vw-80px)] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(
                  lightboxIndex < allImages.length - 1 ? lightboxIndex + 1 : 0
                );
              }}
              className="absolute right-2 z-10 p-3 text-white/70 hover:text-white text-4xl bg-black/40 rounded-full leading-none"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
