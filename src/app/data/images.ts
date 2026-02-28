export const images = {
  hero: "/images/Novorodenecke/novorodenecke (1).jpg",
  newborn1: "/images/Novorodenecke/novorodenecke (4).jpg",
  newborn2: "/images/Novorodenecke/novorodenecke (3).jpg",
  baby1: "/images/Deticky/detske (1).jpg",
  baby2: "/images/Deticky/detske (2).jpg",
  toddler: "/images/Deticky/detske (3).jpg",
  childGirl: "/images/Deticky/detske (4).jpg",
  teenager: "/images/Deticky/detske (5).jpg",
  maternity1: "/images/Tehotenske/tehotenske (5).jpg",
  maternity2: "/images/Tehotenske/tehotenske (2).jpg",
  wedding1: "/images/Svadobne/svadobne (5).jpg",
  wedding2: "/images/Svadobne/svadobne (2).jpg",
  wedding3: "/images/Svadobne/svadobne (3).jpg",
  family1: "/images/Rodinne/rodinne (1).jpg",
  family2: "/images/Rodinne/rodinne (2).jpg",
  exterior1: "/images/Exterier/exterier (1).jpg",
  exterior2: "/images/Exterier/exterier (25).jpg",
  studio1: "/images/Atelier/Atelier (1).jpg",
  studio2: "/images/Atelier/Atelier (2).jpg",
  vianocne1: "/images/Vianocne/vianoce (1).jpg",
  vianocne2: "/images/Vianocne/vianoce (2).jpg",
  detske15: "/images/Deticky/detske (15).jpg",
  photographer: "/images/o-mne/zuzana-kondekova.jpg",
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: string;
};

export const galleryImages: GalleryImage[] = [
  // Novorodenecke: 53 images
  ...Array.from({ length: 53 }, (_, i) => ({
    id: `novorodenci-${i + 1}`,
    src: `/images/Novorodenecke/novorodenecke (${i + 1}).jpg`,
    alt: `Novorodenecké fotenie Čadca – Zuzu Photo (${i + 1})`,
    category: "novorodenci",
  })),
  // Deticky: 60 images
  ...Array.from({ length: 60 }, (_, i) => ({
    id: `deti-${i + 1}`,
    src: `/images/Deticky/detske (${i + 1}).jpg`,
    alt: `Detský fotograf Čadca – fotenie v záhrade a ateliéri (${i + 1})`,
    category: "deti",
  })),
  // Rodinne: 31 images
  ...Array.from({ length: 31 }, (_, i) => ({
    id: `rodina-${i + 1}`,
    src: `/images/Rodinne/rodinne (${i + 1}).jpg`,
    alt: `Rodinné fotenie Čadca – ateliér Zuzu Photo (${i + 1})`,
    category: "rodina",
  })),
  // Tehotenske: 28 images
  ...Array.from({ length: 28 }, (_, i) => ({
    id: `tehotenske-${i + 1}`,
    src: `/images/Tehotenske/tehotenske (${i + 1}).jpg`,
    alt: `Tehotenské fotenie Čadca – umelecký portrét Zuzu Photo (${i + 1})`,
    category: "tehotenske",
  })),
  // Svadobne: 114 images
  ...Array.from({ length: 114 }, (_, i) => ({
    id: `svadobne-${i + 1}`,
    src: `/images/Svadobne/svadobne (${i + 1}).jpg`,
    alt: `Svadobný fotograf Kysuce – svadobné fotenie Čadca Zuzu Photo (${i + 1})`,
    category: "svadobne",
  })),
  // Exterier: image 1 then 25–49 (26 images total)
  ...[1, ...Array.from({ length: 25 }, (_, i) => i + 25)].map((n, i) => ({
    id: `exterier-${i + 1}`,
    src: `/images/Exterier/exterier (${n}).jpg`,
    alt: `Exteriérové fotenie Čadca – záhrada a terasa Zuzu Photo (${i + 1})`,
    category: "exterier",
  })),
  // Atelier: 35 images (capital A in filename)
  ...Array.from({ length: 35 }, (_, i) => ({
    id: `atelier-${i + 1}`,
    src: `/images/Atelier/Atelier (${i + 1}).jpg`,
    alt: `Fotoateliér Čadca – záhrada a terasa Zuzu Photo (${i + 1})`,
    category: "atelier",
  })),
  // Vianocne: 38 images (folder Vianocne, prefix vianoce)
  ...Array.from({ length: 38 }, (_, i) => ({
    id: `vianocne-${i + 1}`,
    src: `/images/Vianocne/vianoce (${i + 1}).jpg`,
    alt: `Vianočné fotenie Čadca – sviatočná atmosféra Zuzu Photo (${i + 1})`,
    category: "vianocne",
  })),
  // Portret: images 15–30 (16 images)
  ...Array.from({ length: 16 }, (_, i) => ({
    id: `portret-${i + 1}`,
    src: `/images/Portret/portret (${i + 15}).jpg`,
    alt: `Portrétne fotografovanie Čadca – Zuzu Photo (${i + 1})`,
    category: "portret",
  })),
];

export const portfolioCategories = [
  { key: "all", label: "Všetko" },
  { key: "novorodenci", label: "Novorodenci" },
  { key: "deti", label: "Deti" },
  { key: "tehotenske", label: "Tehotenské" },
  { key: "rodina", label: "Rodinné" },
  { key: "svadobne", label: "Svadobné" },
  { key: "exterier", label: "Exteriér" },
  { key: "atelier", label: "Ateliér" },
  { key: "vianocne", label: "Vianočné" },
  { key: "portret", label: "Portrét" },
];
