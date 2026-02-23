import { useParams, Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState, useCallback, useRef } from "react";
import { ArrowLeft, X } from "lucide-react";
import { galleryImages, images } from "../data/images";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

type CategoryData = {
  title: string;
  intro: string | string[];
  filterKey: string;
  extraImages?: string[];
  cta?: string;
  ctaLink?: string;
};

const categoryMap: Record<string, CategoryData> = {
  novorodenci: {
    title: "Novorodenecké fotografovanie",
    intro: [
      "Prvé dni života sú tie najkrehkejšie a najzázračnejšie. Maličké pršteky, sladké zívanie a vôňa bábätka, na ktorú sa nedá zabudnúť. Novorodeniatka sa fotografujú ideálne do 14 až 21 dní od narodenia, kedy ešte väčšinu času spokojne spinkajú a nechajú sa nežne uložiť do tých najrozkošnejších póz.",
      "Fotenie prebieha v útulnom rodinnom dome, kde je k dispozícii pohodlné parkovanie priamo na mieste. Čaká vás pokoj, teplé svetlo, mäkučké deky, veľa trpezlivosti a vôňa dobrej kávy, ktorú si môžete vychutnať bez stresu. Pre mamičky s detičkami je pripravený prebaľovací pult a všetko potrebné pre pohodlie vášho pokladu. Nemusíte si robiť starosti s balením pol domácnosti – máme pre vás kopec krásneho oblečenia, čeleniek, čiapočiek, dečiek a rekvizít, ktoré spolu vyberieme tak, aby vaše bábätko vyniklo v celej svojej dokonalosti. Oteckovia si zatiaľ môžu oddýchnuť na terase pri kávičke a vychutnať si túto výnimočnú chvíľu. A čo je najdôležitejšie – vaše bábätko je u nás v bezpečí.",
      "Fotením novorodeniatok sa venujem už viac ako 15 rokov a počas tohto času som nazbierala množstvo skúseností, trpezlivosti a citu pre prácu s tými najmenšími. Sama som mamou dvoch dievčatiek, takže veľmi dobre viem, aké vzácne a citlivé je toto obdobie. Ku každému bábätku pristupujem s rešpektom, jemnosťou a maximálnou starostlivosťou.",
      "Budem sa tešiť, ak sa ku nám budete s radosťou vracať aj postupne, ako bude vaše bábätko rásť – na prvé úsmevy, prvé sedenie, prvé krôčiky či rodinné fotenia. Je pre mňa krásne sledovať, ako sa z malých uzlíčkov stávajú veľké osobnosti, a byť súčasťou vašich rodinných príbehov. Chcem, aby ste od nás odchádzali nielen s nádhernými fotografiami, ale aj s pocitom, že ste našli miesto, kam budete radi znovu prichádzať.",
      "Objednávky: +421 907 533 373. Príďte a poďme spolu tvoriť vaše neopakovateľné spomienky! Tešíme sa na Vás :)",
    ],
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
    intro: [
      "Tehotenstvo je jedinečné, magické a neopakovateľné obdobie v živote ženy. Čas, keď pod srdcom nosíte celý svoj svet.",
      "Fotenie prebieha v útulnom rodinnom dome, kde je k dispozícii parkovanie priamo na mieste. Verím, že sa u nás budete cítiť pohodlne a uvoľnene. Čaká vás pokoj, jemné svetlo, teplá atmosféra a vôňa dobrej kávy, ktorú si môžete vychutnať počas fotenia – alebo, ak vám v tomto nádhernom období vôňa kávy nerobí dobre, tatino si ju môže pokojne vychutnať na terase. :)",
      "Dovoľte mi zachytiť vás v umeleckých portrétoch, ktoré zvýraznia vašu eleganciu, nežnosť a jedinečnú krásu očakávania. K dispozícii sú aj tehotenské šaty, ktoré môžete využiť – alebo si pokojne obliecť svoje obľúbené, v ktorých sa cítite krásna a sebavedomá. Nemusíte vedieť pózovať – všetkým vás jemne prevediem.",
      "Fotografie môžu byť farebné aj čiernobiele – každá verzia zachytí okamihy tak, aby boli nadčasové a plné emócií. Vaše pohodlie a bezpečie sú pre mňa prioritou, aby sa každá budúca maminka mohla cítiť uvoľnene a tešiť sa z každého okamihu.",
      "Doprajte si tento zážitok pre seba a pre spomienky, ktoré budete milovať navždy.",
      "Objednávky: +421 907 533 373. Teším sa, keď spolu zachytíme toto čarovné obdobie skôr, než sa z bruška ozve prvé „ahoj, mami\".",
    ],
    filterKey: "tehotenske",
    cta: "Pozrieť cenník",
    ctaLink: "/cennik",
  },
  rodinne: {
    title: "Rodinné fotografovanie",
    intro: [
      "Rodinné chvíle sú tie najcennejšie a fotografie sú spomienky, ktoré vydržia celé roky.",
      "V našom útulnom ateliéri v rodinnom dome vytvoríme fotografie, ktoré sú nielen krásne, ale aj nadčasové – tlačíme ich na kvalitný papier, takže nikdy nevyblednú a zostanú vašej rodine na spomínanie ešte veľmi dlhé roky.",
      "K dispozícii máte pohodlný ateliér s parkovaním priamo na mieste, krásnu terasu aj záhradu, kde sa dá fotografovať vonku. Môžete si vybrať atmosféru, ktorá vám najviac vyhovuje, alebo kombinovať interiér s exteriérom – a to všetko pokojne a pohodlne, s úžasnou kávou alebo čajom v ruke.",
      "Fotenie vediem s citom a trpezlivosťou, aby sa všetci cítili uvoľnene a prirodzene. Spoločne zachytíme vaše rodinné puto, smiech, drobné radosti a všetky neopakovateľné okamihy, ktoré tvoria jedinečnú históriu vašej rodiny. Každý pohľad na fotografie vám pripomenie lásku, blízkosť a teplo, ktoré ste spolu prežili – a tieto momenty zostanú živé navždy.",
      'Za 15 rokov práce u nás nevznikli len fotografie, ale aj krásne vzťahy. Mnohých z vás som prvýkrát stretla ako nevestu a ženícha, neskôr ako budúcich rodičov, a dnes sledujem, ako z vašich novorodeniatok vyrastajú školáci či mladí dospelí. Je nádherné vidieť, ako sa „naše" detičky menia a rastú.',
      "Veľmi si vážime vašu dôveru a teší nás, že sa k nám rodinky radi vracajú zachytiť ďalšie kapitoly svojho príbehu. Verím, že tak bude aj naďalej – a že náš ateliér zostane miestom, kam budete radi prichádzať nielen kvôli fotografiám, ale aj kvôli pocitu, ktorý si odtiaľ odnesiete.",
      "Objednávky: +421 907 533 373  Tešíme sa na vás",
    ],
    filterKey: "rodina",
    cta: "Pozrieť cenník",
    ctaLink: "/cennik",
  },
  svadobne: {
    title: "Svadobné fotografovanie",
    intro: "Váš svadobný deň je plný emócií, krasy a lásky. Je mojou úlohou, aby ste tieto okamihmi mohli prežívať znova a znova — prostredníctvom fotografií, ktoré rozprávajú váš príbeh. Pracujem nenápadne, s citom a vždy v uvoľnenej, priateľskej atmosfére.",
    filterKey: "svadobne",
    cta: "Pozrieť svadobné balíčky",
    ctaLink: "/cennik",
  },
  vianocne: {
    title: "Vianočné fotografovanie",
    intro: [
      "Vianoce sú časom kúziel, smiechu a spoločných spomienok, ktoré zostávajú navždy.",
      'V našom útulnom rodinnom ateliéri s pohodlným parkovaním priamo pred domom si rodinky užijú čarovnú sviatočnú atmosféru skôr, než prídu sviatky – detičky „pečú" perníčky, píšu listy Ježiškovi, hrajú na malý detský klavír a objavujú kopec ďalších zábavných aktivít. Za 15 rokov fotenia máme množstvo rekvizít, aby boli fotografie vždy iné a zaujímavé, a aby každý rok vznikali nové, jedinečné spomienky.',
      "Fotenie prebieha v dostatočnom predstihu, aby ste mali fotografie pod stromčekom – prvé termíny sú už v októbri, najvhodnejšie sú novembrové a december len prvé dva týždne, ak chcete mať fotky do Vianoc. Rezervujte si svoj termín včas a pripravte sa na nezabudnuteľné Vianoce plné smiechu a radosti.",
      "Každý pohľad, úsmev a moment radosti sa premení na nadčasové fotografie, ktoré budú pripomínať túto jedinečnú chvíľu.",
      "Objednávky: +421 907 533 373. Tešíme sa na vás",
    ],
    filterKey: "vianocne",
    cta: "Pozrieť cenník",
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="text-muted-foreground leading-relaxed max-w-3xl space-y-3">
            {Array.isArray(data.intro)
              ? data.intro.map((p, i) => <p key={i}>{p}</p>)
              : <p>{data.intro}</p>}
          </div>
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
