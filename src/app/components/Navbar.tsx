import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Camera } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { to: "/portfolio", label: "Portfólio" },
  { to: "/portfolio/atelier", label: "Ateliér" },
  { to: "/cennik", label: "Cenník" },
  { to: "/o-mne", label: "O mne" },
  { to: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col group" onClick={() => setMobileOpen(false)}>
            <div className="flex items-center gap-2">
              <Camera className="w-6 h-6 text-primary transition-transform group-hover:rotate-12" />
              <span
                className="text-xl sm:text-2xl tracking-wide text-foreground"
                style={{ fontFamily: "var(--font-family-heading)" }}
              >
                Zuzu Photo
              </span>
            </div>
            <span className="hidden sm:block text-[10px] text-muted-foreground tracking-widest uppercase pl-8 -mt-0.5">
              svetlo · emócia · prirodzenosť
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm tracking-wide transition-colors hover:text-primary ${
                  location.pathname.startsWith(link.to)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="ml-2 px-5 py-2 bg-primary text-primary-foreground rounded-full text-sm tracking-wide hover:bg-primary/90 transition-colors"
            >
              Rezervovať termín
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Zavrieť menu" : "Otvoriť menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 text-base tracking-wide transition-colors ${
                    location.pathname.startsWith(link.to)
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/kontakt"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center mt-3 px-5 py-3 bg-primary text-primary-foreground rounded-full text-base tracking-wide"
              >
                Rezervovať termín
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
