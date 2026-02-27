import { Link } from "react-router";
import { Camera, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#3d2c2c] text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Camera className="w-5 h-5 text-[#b08968]" />
              <span
                className="text-xl text-white tracking-wide"
                style={{ fontFamily: "var(--font-family-heading)" }}
              >
                Zuzu Photo
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Profesionálne fotografovanie v Čadci
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white mb-4 text-base"
              style={{ fontFamily: "var(--font-family-heading)" }}
            >
              Rýchle odkazy
            </h4>
            <ul className="space-y-2">
              {[
                { to: "/portfolio", label: "Portfólio" },
                { to: "/portfolio/atelier", label: "Ateliér" },
                { to: "/cennik", label: "Cenník" },
                { to: "/o-mne", label: "O mne" },
                { to: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/60 hover:text-[#b08968] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white mb-4 text-base"
              style={{ fontFamily: "var(--font-family-heading)" }}
            >
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#b08968]" />
                <span>Horná 123, 022 01 Čadca</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Phone className="w-4 h-4 shrink-0 text-[#b08968]" />
                <a href="tel:+421907533373" className="hover:text-[#b08968] transition-colors">
                  0907 533 373
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Mail className="w-4 h-4 shrink-0 text-[#b08968]" />
                <a href="mailto:zuzukondek@gmail.com" className="hover:text-[#b08968] transition-colors">
                  zuzukondek@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4
              className="text-white mb-4 text-base"
              style={{ fontFamily: "var(--font-family-heading)" }}
            >
              Sledujte ma
            </h4>
            <div className="space-y-3">
              <a
                href="https://www.facebook.com/ZuzuPhotoGraphic/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-[#b08968] transition-colors"
              >
                <Facebook className="w-5 h-5 shrink-0" />
                <span>ZuzuPhotoGraphic</span>
              </a>
              <a
                href="https://www.instagram.com/zuzana_kondekova_zuzu_photo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-[#b08968] transition-colors"
              >
                <Instagram className="w-5 h-5 shrink-0" />
                <span>zuzana_kondekova_zuzu_photo</span>
              </a>
              <a
                href="https://wa.me/421907533373"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-[#b08968] transition-colors"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span>WhatsApp: 0907 533 373</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-xs text-white/40">
            &copy; {new Date().getFullYear()} Zuzu Photo — Zuzana Kondeková. Všetky práva vyhradené.
          </p>
        </div>
      </div>
    </footer>
  );
}
