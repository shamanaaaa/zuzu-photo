import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, X } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("zuzu-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("zuzu-cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("zuzu-cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm z-50"
        >
          <div className="bg-card rounded-2xl shadow-xl border border-border p-5 relative">
            <button
              onClick={decline}
              className="absolute top-3 right-3 p-1 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-start gap-3 mb-4">
              <Cookie className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h4
                  className="text-sm text-foreground mb-1"
                  style={{ fontFamily: "var(--font-family-heading)" }}
                >
                  Súbory cookies
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Táto stránka používa súbory cookies na zlepšenie vášho zážitku
                  z prehliadania. Pokračovaním v používaní stránky súhlasíte s
                  ich používaním.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={accept}
                className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-full text-xs hover:bg-primary/90 transition-colors"
              >
                Súhlasím
              </button>
              <button
                onClick={decline}
                className="flex-1 px-4 py-2 border border-border text-muted-foreground rounded-full text-xs hover:bg-secondary transition-colors"
              >
                Odmietnuť
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
