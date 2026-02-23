import { useState, useCallback, useRef } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { galleryImages, portfolioCategories } from "../data/images";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const touchStartX = useRef<number>(0);

  const openLightbox = useCallback((idx: number) => setLightboxIndex(idx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 sm:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl text-foreground mb-4"
            style={{ fontFamily: "var(--font-family-heading)" }}
          >
            Portfólio
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Prezrite si ukážky z mojej práce. Kliknite na kategóriu pre filtrovanie.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-16 sm:top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {portfolioCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm transition-all ${
                  activeFilter === cat.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-accent"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-wrap gap-2">
          {[
            { to: "/portfolio/novorodenci", label: "Novorodenci" },
            { to: "/portfolio/deti-do-1-roka", label: "Deti do 1 roka" },
            { to: "/portfolio/deti-od-1-roka", label: "Deti od 1 roka" },
            { to: "/portfolio/deti-15", label: "Deti 15+" },
            { to: "/portfolio/tehotenske", label: "Tehotenské" },
            { to: "/portfolio/rodinne", label: "Rodinné" },
            { to: "/portfolio/svadobne", label: "Svadobné" },
            { to: "/portfolio/exterier", label: "Exteriér" },
            { to: "/portfolio/vianocne", label: "Vianočné" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 1024: 3 }}>
          <Masonry gutter="16px">
            {filtered.map((img, idx) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
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
                  setLightboxIndex(lightboxIndex < filtered.length - 1 ? lightboxIndex + 1 : 0);
                } else {
                  setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : filtered.length - 1);
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
                  lightboxIndex > 0 ? lightboxIndex - 1 : filtered.length - 1
                );
              }}
              className="absolute left-2 z-10 p-3 text-white/70 hover:text-white text-4xl bg-black/40 rounded-full leading-none"
            >
              ‹
            </button>
            <motion.img
              key={filtered[lightboxIndex]?.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={filtered[lightboxIndex]?.src}
              alt={filtered[lightboxIndex]?.alt}
              className="max-h-[85vh] max-w-[calc(100vw-80px)] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(
                  lightboxIndex < filtered.length - 1 ? lightboxIndex + 1 : 0
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
