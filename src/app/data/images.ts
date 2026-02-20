export const images = {
  hero: "/images/novorodenci/novorodenci-1.jpg",
  newborn1: "/images/novorodenci/novorodenci-2.jpg",
  newborn2: "/images/novorodenci/novorodenci-3.jpg",
  baby1: "/images/deti-do-1-roka/deti-do-1-roka-1.jpg",
  baby2: "/images/deti-do-1-roka/deti-do-1-roka-2.jpg",
  toddler: "/images/deti-od-1-roka/deti-od-1-roka-1.jpg",
  childGirl: "/images/deti/deti-1.jpg",
  teenager: "/images/deti-15/deti-15-1.jpg",
  maternity1: "/images/tehotenske/tehotenske-1.jpg",
  maternity2: "/images/tehotenske/tehotenske-2.jpg",
  wedding1: "/images/svadobne/svadobne-1.jpg",
  wedding2: "/images/svadobne/svadobne-2.jpg",
  wedding3: "/images/svadobne/svadobne-3.jpg",
  family1: "/images/rodinne/rodinne-1.jpg",
  family2: "/images/rodinne/rodinne-2.jpg",
  exterior1: "/images/exterier/exterier-1.jpg",
  exterior2: "/images/exterier/exterier-2.jpg",
  studio1: "/images/atelier/atelier-1.jpg",
  studio2: "/images/atelier/atelier-2.jpg",
  photographer: "/images/o-mne/zuzana-kondekova.jpg",
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: string;
};

// Build gallery from all real images
const makeImages = (
  category: string,
  folder: string,
  prefix: string,
  count: number,
  altLabel: string
): GalleryImage[] =>
  Array.from({ length: count }, (_, i) => ({
    id: `${category}-${i + 1}`,
    src: `/images/${folder}/${prefix}-${i + 1}.jpg`,
    alt: `${altLabel} ${i + 1}`,
    category,
  }));

export const galleryImages: GalleryImage[] = [
  ...makeImages("novorodenci", "novorodenci", "novorodenci", 24, "Novorodenec"),
  ...makeImages("deti", "deti-do-1-roka", "deti-do-1-roka", 18, "Bábätko"),
  ...makeImages("deti", "deti-od-1-roka", "deti-od-1-roka", 18, "Dieťa"),
  ...makeImages("deti", "deti", "deti", 17, "Dieťa"),
  ...makeImages("deti", "deti-15", "deti-15", 13, "Tínedžer"),
  ...makeImages("rodina", "rodinne", "rodinne", 29, "Rodinné fotenie"),
  ...makeImages("tehotenske", "tehotenske", "tehotenske", 24, "Tehotenské fotenie"),
  ...makeImages("svadobne", "svadobne", "svadobne", 60, "Svadobné fotenie"),
  ...makeImages("exterier", "exterier", "exterier", 13, "Exteriér"),
  ...makeImages("atelier", "atelier", "atelier", 18, "Ateliér"),
];

export const portfolioCategories = [
  { key: "all", label: "Všetko" },
  { key: "novorodenci", label: "Novorodenci" },
  { key: "deti", label: "Deti" },
  { key: "rodina", label: "Rodina" },
  { key: "tehotenske", label: "Tehotenské" },
  { key: "svadobne", label: "Svadobné" },
  { key: "exterier", label: "Exteriér" },
  { key: "atelier", label: "Ateliér" },
];
