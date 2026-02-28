import { useCallback, useRef, useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { galleryImages, portfolioCategories } from "../data/images";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

function categorySlug(key: string) {
  if (key === "all") return "/portfolio";
  if (key === "rodina") return "/portfolio/rodinne";
  return `/portfolio/${key}`;
}

export function Portfolio() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
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
            Vyberte kategóriu a prezrite si ukážky z mojej práce.
          </p>
        </div>
      </section>

      {/* Category Links */}
      <section className="sticky top-16 sm:top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide pr-10">
              {portfolioCategories.map((cat) => (
                <Link
                  key={cat.key}
                  to={categorySlug(cat.key)}
                  className="shrink-0 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm transition-all bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
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
        </div>
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
                  setLightboxIndex(lightboxIndex < galleryImages.length - 1 ? lightboxIndex + 1 : 0);
                } else {
                  setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : galleryImages.length - 1);
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
                  lightboxIndex > 0 ? lightboxIndex - 1 : galleryImages.length - 1
                );
              }}
              className="absolute left-2 z-10 p-3 text-white/70 hover:text-white text-4xl bg-black/40 rounded-full leading-none"
            >
              ‹
            </button>
            <motion.img
              key={galleryImages[lightboxIndex]?.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={galleryImages[lightboxIndex]?.src}
              alt={galleryImages[lightboxIndex]?.alt}
              className="max-h-[85vh] max-w-[calc(100vw-80px)] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(
                  lightboxIndex < galleryImages.length - 1 ? lightboxIndex + 1 : 0
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
