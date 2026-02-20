import { Link } from "react-router";
import { Camera } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <Camera className="w-16 h-16 text-primary/30 mx-auto mb-6" />
        <h1
          className="text-4xl text-foreground mb-3"
          style={{ fontFamily: "var(--font-family-heading)" }}
        >
          404
        </h1>
        <p className="text-muted-foreground mb-6">
          Táto stránka nebola nájdená.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-2.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-sm tracking-wide"
        >
          Späť na úvod
        </Link>
      </div>
    </div>
  );
}
