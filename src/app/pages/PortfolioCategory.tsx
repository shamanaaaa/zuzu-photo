import { useParams, Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState, useCallback, useRef } from "react";
import { ArrowLeft, X } from "lucide-react";
import { galleryImages } from "../data/images";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

type CategoryData = {
  title: string;
  intro: string | string[];
  filterKey: string;
  cta?: string;
  ctaLink?: string;
};

const categoryMap: Record<string, CategoryData> = {
  novorodenci: {
    title: "Novorodenecké fotografovanie",
    intro: [
      "Prvé dni života sú tie najkrehkejšie a najzázračnejšie. Maličké pršteky, sladké zívanie a vôňa bábätka, na ktorú sa nedá zabudnúť. Novorodeniatka sa fotografujú ideálne do 14 až 21 dní od narodenia, kedy ešte väčšinu času spokojne spinkajú a nechajú sa nežne uložiť do tých najrozkošnejších póz.",
      "Fotenie prebieha v útulnom rodinnom dome, kde je k dispozícii pohodlné parkovanie priamo na mieste. Čaká vás pokoj, teplé svetlo, mäkučké kožušinky, deky, veľa trpezlivosti a vôňa dobrej kávy, ktorú si môžete vychutnať bez stresu. 🤍",
      "Pre mamičky s detičkami je pripravený prebaľovací pult a všetko potrebné pre pohodlie vášho pokladu. Nemusíte si robiť starosti s balením pol domácnosti – máme pre vás kopec krásneho oblečenia, čeleniek, čiapočiek, dečiek a rekvizít, ktoré spolu vyberieme tak, aby vaše bábätko vyniklo v celej svojej dokonalosti. Oteckovia si zatiaľ môžu oddýchnuť na terase pri kávičke a vychutnať si túto výnimočnú chvíľu. A čo je najdôležitejšie – vaše bábätko je u nás v bezpečí.",
      "Fotením novorodeniatok sa venujem už viac ako 15 rokov a počas tohto času som nazbierala množstvo skúseností, trpezlivosti a citu pre prácu s tými najmenšími. Sama som mamou dvoch dievčatiek, takže veľmi dobre viem, aké vzácne a citlivé je toto obdobie. Ku každému bábätku pristupujem s rešpektom, jemnosťou a maximálnou starostlivosťou.",
      "Budem sa tešiť, ak sa ku nám budete s radosťou vracať aj postupne, ako bude vaše bábätko rásť – na prvé úsmevy, prvé sedenie, prvé krôčiky či rodinné fotenia. Je pre mňa krásne sledovať, ako sa z malých uzlíčkov stávajú veľké osobnosti, a byť súčasťou vašich rodinných príbehov. ✨🤍 Chcem, aby ste od nás odchádzali nielen s nádhernými fotografiami, ale aj s pocitom, že ste našli miesto, kam budete radi znovu prichádzať.",
      "📞 Objednávky: +421 907 533 373.",
      "Príďte a poďme spolu tvoriť vaše neopakovateľné spomienky!",
      "Tešíme sa na Vás :)",
    ],
    filterKey: "novorodenci",
    cta: "Pozrieť cenník",
    ctaLink: "/cennik",
  },
  deti: {
    title: "Detské fotografovanie",
    intro: [
      "Detstvo je najkrajšie a zároveň najrýchlejšie obdobie života. Každý úsmev, každý pohľad a každý malý pokrok si zaslúži zostať navždy zachovaný.",
      'Fotíme detičky už od novorodeniatka – tejto nežnej etape sa venujeme samostatne v osobitnej kapitole na našej stránke. Bábätká, ktoré ešte nevedia samostatne sedieť, jemne a bezpečne ukladáme do pripravených rekvizít – do kyblíka, košíka alebo ich môže „postrážiť" veľký plyšový macko. Všetko prebieha s citom, trpezlivosťou a maximálnym dôrazom na pohodlie a bezpečnosť dieťatka.',
      "Väčšie detičky od jedného roka si už fotenie naplno užívajú. Môžu sa hrať, objavovať a smiať – či už v ateliéri alebo vonku v našej krásnej záhrade. Prírodné svetlo, zeleň a priestor na pohyb vytvárajú nádhernú a prirodzenú atmosféru, kde vznikajú tie najkrajšie spontánne úsmevy.",
      "Za 15 rokov fotenia sa u nás nazbieralo množstvo rekvizít a hračiek. Máme odrážadlá v podobe autíčok a lietadielka, stoličky, lavičky, dekorácie a tematické doplnky. Detičky si fotenie naplno užívajú a práve v tejto prirodzenej hre vznikajú tie najkrajšie a najúprimnejšie zábery.",
      "Fotenie prebieha v pokojnej a priateľskej atmosfére, bez stresu a tlaku. Kým sa maminky venujú prípravám a detičky si užívajú svoje malé dobrodružstvo, nedočkaví oteckovia si môžu pohodlne posedieť na terase pri dobrej kávičke a na chvíľu si oddýchnuť.",
      "Naším cieľom je, aby sa deti cítili prirodzene, rodičia uvoľnene a aby ste si domov odniesli nielen krásne fotografie, ale aj príjemný spoločný zážitok. Fotografie tlačíme na kvalitný profesionálny papier, aby vám tieto vzácne momenty zostali ako nadčasová spomienka na dlhé roky.",
      "Tešíme sa na všetky malé úsmevy, veľké očká a nové dobrodružstvá, ktoré spolu zachytíme 🤍",
      "📞 Objednávky: +421 907 533 373",
    ],
    filterKey: "deti",
    cta: "Pozrieť cenník",
    ctaLink: "/cennik",
  },
  tehotenske: {
    title: "Tehotenské fotografovanie",
    intro: [
      "Tehotenstvo je jedinečné, magické a neopakovateľné obdobie v živote ženy. Čas, keď pod srdcom nosíte celý svoj svet.",
      "Fotenie prebieha v útulnom rodinnom dome, kde je k dispozícii parkovanie priamo na mieste. Verím, že sa u nás budete cítiť pohodlne a uvoľnene. Čaká vás pokoj, jemné svetlo, teplá atmosféra a vôňa dobrej kávy, ktorú si môžete vychutnať počas fotenia – alebo, ak vám v tomto nádhernom období vôňa kávy nerobí dobre, tatino si ju môže pokojne vychutnať na terase. :)",
      "Dovoľte mi zachytiť vás v umeleckých portrétoch, ktoré zvýraznia vašu eleganciu, nežnosť a jedinečnú krásu očakávania. K dispozícii sú aj tehotenské šaty, ktoré môžete využiť – alebo si pokojne obliecť svoje obľúbené, v ktorých sa cítite krásna a sebavedomá. Nemusíte vedieť pózovať – všetkým vás jemne prevediem.",
      "Fotografie môžu byť farebné aj čiernobiele – každá verzia zachytí okamihy tak, aby boli nadčasové a plné emócií. Vaše pohodlie a bezpečie sú pre mňa prioritou, aby sa každá budúca maminka mohla cítiť uvoľnene a tešiť sa z každého okamihu.",
      "Doprajte si tento zážitok pre seba a pre spomienky, ktoré budete milovať navždy.",
      "📞 Objednávky: +421 907 533 373.",
      'Teším sa, keď spolu zachytíme toto čarovné obdobie skôr, než sa z bruška ozve prvé „ahoj, mami". ✨👶',
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
      "K dispozícii máte pohodlný ateliér s parkovaním priamo na mieste, krásnu terasu aj záhradu, kde sa dá fotografovať vonku. Môžete si vybrať atmosféru, ktorá vám najviac vyhovuje, alebo kombinovať interiér s exteriérom – a to všetko pokojne a pohodlne, s úžasnou kávou alebo čajom v ruke. ☕🫖",
      "Fotenie vediem s citom a trpezlivosťou, aby sa všetci cítili uvoľnene a prirodzene. Spoločne zachytíme vaše rodinné puto, smiech, drobné radosti a všetky neopakovateľné okamihy, ktoré tvoria jedinečnú históriu vašej rodiny. Každý pohľad na fotografie vám pripomenie lásku, blízkosť a teplo, ktoré ste spolu prežili – a tieto momenty zostanú živé navždy.",
      'Za 15 rokov práce u nás nevznikli len fotografie, ale aj krásne vzťahy. Mnohých z vás som prvýkrát stretla ako nevestu a ženícha, neskôr ako budúcich rodičov, a dnes sledujem, ako z vašich novorodeniatok vyrastajú školáci či mladí dospelí. Je nádherné vidieť, ako sa „naše" detičky menia a rastú.',
      "Veľmi si vážime vašu dôveru a teší nás, že sa k nám rodinky radi vracajú zachytiť ďalšie kapitoly svojho príbehu. Verím, že tak bude aj naďalej – a že náš ateliér zostane miestom, kam budete radi prichádzať nielen kvôli fotografiám, ale aj kvôli pocitu, ktorý si odtiaľ odnesiete.",
      "📞 Objednávky: +421 907 533 373",
      "Tešíme sa na vás 🙂",
    ],
    filterKey: "rodina",
    cta: "Pozrieť cenník",
    ctaLink: "/cennik",
  },
  svadobne: {
    title: "Svadobné fotografovanie",
    intro: [
      "Svadba patrí medzi najkrajšie a najvýznamnejšie dni v živote. Každý pohľad, úsmev, dotyk a slza šťastia si zaslúžia zostať navždy zachované. Naším cieľom je vytvoriť fotografie, ktoré budú nielen krásne, ale aj nadčasové – spomienky, ktoré si budete s radosťou pozerať aj o mnoho rokov.",
      'Fotíme s citom a trpezlivosťou, aby ste sa cítili prirodzene a uvoľnene. „Svadbu fotografujeme dvaja – ja a môj partner a priateľ – aby sme zachytili všetky momenty z rôznych uhlov a nič dôležité vám neuniklo."',
      "Zachytávame všetky dôležité okamihy vášho dňa – prípravy nevesty a ženícha, portrétové fotky pred alebo po obrade, samotný obrad v kostole či na úrade, gratulácie po obrade, spoločné fotografie s rodinou, prvý tanec a ďalšie okamihy oslavy. Nezabúdame ani na drobné detaily, ktoré robia váš deň jedinečným – šperky, kytice, dekorácie, úsmevy hostí, pohľady plné lásky.",
      "Fotenie prebieha podľa vašich predstáv – romantické portréty v prírode, uvoľnené fotky pri oslave, kombinácia interiéru a exteriéru. Snažíme sa zachytiť atmosféru a emócie tak, aby každá fotografia rozprávala svoj príbeh.",
      'Za 15 rokov práce u nás nevznikli len fotografie, ale aj krásne vzťahy. Mnohých z vás som prvýkrát stretla ako nevestu a ženícha, neskôr ako budúcich rodičov, a dnes sledujem, ako z vašich novorodeniatok vyrastajú školáci či mladí dospelí. Je nádherné vidieť, ako sa „naše" detičky menia a rastú.',
      "Veľmi si vážime vašu dôveru a teší nás, že sa k nám rodinky radi vracajú zachytiť ďalšie kapitoly svojho príbehu – od svadby, cez novorodenecké fotenie, až po každodenné rodinné chvíle. Veríme, že náš ateliér zostane miestom, kam budete radi prichádzať nielen kvôli krásnym fotografiám, ale aj kvôli pocitu, ktorý si odtiaľ odnesiete.",
      "📞 Objednávky: +421 907 533 373",
      "Tešíme sa, že spolu zachytíme váš výnimočný deň. 🤍",
    ],
    filterKey: "svadobne",
    cta: "Pozrieť svadobné balíčky",
    ctaLink: "/cennik",
  },
  vianocne: {
    title: "Vianočné fotografovanie",
    intro: [
      "Vianoce sú časom kúziel, smiechu a spoločných spomienok, ktoré zostávajú navždy. 🎄",
      'V našom útulnom rodinnom ateliéri s pohodlným parkovaním priamo pred domom si rodinky užijú čarovnú sviatočnú atmosféru skôr, než prídu sviatky – detičky „pečú" perníčky, píšu listy Ježiškovi, hrajú na malý detský klavír a objavujú kopec ďalších zábavných aktivít. Za 15 rokov fotenia máme množstvo rekvizít, aby boli fotografie vždy iné a zaujímavé, a aby každý rok vznikali nové, jedinečné spomienky.',
      "Fotenie prebieha v dostatočnom predstihu, aby ste mali fotografie pod stromčekom – prvé termíny sú už v októbri, najvhodnejšie sú novembrové a december len prvé dva týždne, ak chcete mať fotky do Vianoc. Rezervujte si svoj termín včas a pripravte sa na nezabudnuteľné Vianoce plné smiechu a radosti.",
      "Každý pohľad, úsmev a moment radosti sa premení na nadčasové fotografie, ktoré vám budú pripomínať túto jedinečnú chvíľu. ✨",
      "📞 Objednávky: +421 907 533 373",
      "Tešíme sa na vás 🙂",
    ],
    filterKey: "vianocne",
    cta: "Pozrieť cenník",
    ctaLink: "/cennik",
  },
  exterier: {
    title: "Fotografovanie v exteriéri",
    intro: [
      "Exteriérové fotografovanie priamo u nás v ateliéri v útulnom rodinnom dome s terasou a záhradou. Rodinné chvíle sú tie najcennejšie a fotografie sú spomienky, ktoré vydržia celé roky. Najkrajšie momenty často vznikajú prirodzene – vonku, v pohybe, v smiechu, na čerstvom vzduchu.",
      "Ponúkame vám fotografovanie v exteriéri – v našej krásnej záhrade a na priestrannej terase pri rodinnom dome. Prírodné svetlo, zeleň a pokojné prostredie vytvárajú dokonalú kulisu pre nadčasové a prirodzené fotografie plné emócií.",
      "Deti sa môžu voľne hrať, behať a objavovať, zatiaľ čo vy si užívate spoločné chvíle. Práve v tejto uvoľnenej atmosfére vznikajú tie najúprimnejšie zábery – plné lásky, radosti a rodinného puta.",
      "Samozrejmosťou je pohodlné parkovanie priamo na mieste a možnosť využiť aj interiér útulného ateliéru, ak si želáte kombináciu exteriéru s jemnou ateliérovou atmosférou. Všetko na jednom mieste, bez stresu a presúvania. A pokojne si môžete vychutnať aj šálku výbornej kávy alebo čaju.",
      "Fotografie tlačíme na kvalitný profesionálny papier, aby zostali vašej rodine ako trvalá spomienka na dlhé roky. Každý pohľad na ne vám pripomenie blízkosť, teplo a lásku, ktorú spolu prežívate dnes.",
      'Za tie roky u nás nevznikli len fotografie, ale aj krásne vzťahy. Mnohých z vás som prvýkrát stretla ako nevestu a ženícha, neskôr ako budúcich rodičov a dnes sledujem, ako z vašich novorodeniatok vyrastajú školáci či mladí dospelí. Je nádherné vidieť, ako sa „naše" detičky menia a rastú.',
      "Veľmi si vážime vašu dôveru a teší nás, že sa k nám opakovane vraciate zachytiť ďalšie kapitoly svojho príbehu. Verím, že to tak bude aj naďalej – a že naša záhrada a ateliér zostanú miestom, kam budete radi chodiť nielen kvôli fotografiám, ale aj kvôli pocitu, ktorý si odtiaľ odnesiete.",
      "📞 Objednávky: +421 907 533 373",
      "Tešíme sa na Vás 🤍",
    ],
    filterKey: "exterier",
  },
  atelier: {
    title: "Ateliérové fotografovanie",
    intro: [
      "ZUZU photo-graphic – svetlo, emócia a prirodzenosť na jednom mieste.",
      "Fotenie v ateliéri, rozkvitnutej záhrade aj na slnečnej terase pre vaše výnimočné fotografie.",
      'Náš fotoateliér sa nachádza priamo v centre mesta Čadca, v rodinnom dome s pohodlnou možnosťou parkovania. Nečaká vás klasický „studený" ateliér, ale príjemné domáce prostredie, kde sa môžete uvoľniť a cítiť prirodzene.',
      "K dispozícii je krásny, plne vybavený ateliér s množstvom rekvizít, pozadí a doplnkov, ktoré sme počas 15 rokov starostlivo vyberali a dopĺňali. Pre novorodeniatka máme pripravené oblečenie, deky, čelenky, košíčky, prebaľovací pult aj všetko potrebné pre ich maximálne pohodlie a bezpečie. Nemusíte si nosiť takmer nič — o všetko je postarané.",
      "Veľkou výhodou nášho priestoru je aj možnosť kombinovať interiérové a exteriérové fotenie. Súčasťou domu je krásna záhrada s prirodzeným svetlom a zeleňou, ktorá ponúka nádherné možnosti najmä pri rodinných a detských foteniach. K dispozícii je aj terasa, kde si môžete počas fotenia oddýchnuť v príjemnej atmosfére. Mamičky si vychutnajú kvalitnú kávičku alebo čaj, detičky sa zabavia a aj nedočkaví tatinkovia si nájdu svoju chvíľu pohody. Naším cieľom je, aby ste sa u nás cítili komfortne, bez stresu a zhonu. Aby fotenie nebolo povinnosťou, ale príjemným rodinným zážitkom.",
      'Za tie roky u nás nevznikli len fotografie, ale aj krásne vzťahy. Mnohých z vás som prvýkrát stretla ako nevestu a ženícha, neskôr ako budúcich rodičov a dnes sledujem, ako z vašich novorodeniatok vyrastajú školáci či mladí dospelí. Je nádherné vidieť, ako sa „naše" detičky menia a rastú. Veľmi si vážime vašu dôveru a teší nás, že sa ku nám opakovane vraciate zachytiť ďalšie kapitoly svojho príbehu.',
      "Verím, že to tak bude aj naďalej – a že náš ateliér zostane miestom, kam budete radi chodiť nielen kvôli fotografiám, ale aj kvôli pocitu, ktorý si odtiaľ odnesiete.",
      "📞 Objednávky: +421 907 533 373.",
      "Tešíme sa na Vás :)",
    ],
    filterKey: "atelier",
    cta: "Viac o ateliéri",
    ctaLink: "/atelier",
  },
  portret: {
    title: "Portrétové fotografovanie",
    intro: [
      "Každý z nás má v sebe jedinečnú iskru. Portrét nie je len fotografia tváre – je to zachytenie osobnosti, nálady, pohľadu a emócie, ktorá vás robí výnimočnými.",
      "Fotografovanie prebieha v exteriéri aj interiéri – v našej záhrade a na terase pri rodinnom dome, kde prirodzené svetlo vytvára mäkkú a lichotivú atmosféru. Vonkajšie prostredie dodáva portrétom ľahkosť, sviežosť a prirodzený charakter, zatiaľ čo útulný ateliér umožňuje kontrolované svetlo a štýlové pozadie pre rôzne typy portrétov.",
      "Ponúkame široké spektrum portrétnych služieb – vždy s individuálnym prístupom:",
      "• Rodinné a detské portréty – prirodzené, hravé a plné emócií",
      "• Glamour a sexy portréty – ženské, sebavedomé, štýlové a odvážne",
      "• Študentské tablo – moderné, kreatívne a osobné",
      "• Profesionálne portréty – pre firmy, reklamu a marketing",
      "• Billboardy a promo fotografie – dynamické, výrazné a vizuálne pôsobivé",
      "• Oznámenia a oznamká – svadobné, promočné či iné výnimočné udalosti",
      "• Osobné portréty – darčeky, umelecké fotografie, spomienky",
      "Počas fotenia vás jemne navediem a poradím s pózovaním aj výrazom, aby ste sa cítili prirodzene, sebavedomo a uvoľnene. V pokojnej atmosfére, bez stresu, vznikajú tie najkrajšie a najautentickejšie zábery.",
      "Za 15 rokov praxe sme nazbierali množstvo skúseností aj rekvizít – stoličky, látky, kvety, doplnky a drobné detaily – aby každý portrét bol originálny a dokonale prispôsobený vašej osobnosti či štýlu.",
      "Fotografie tlačíme na kvalitný profesionálny papier alebo pripravíme digitálne verzie – nadčasové spomienky, ktoré vydržia roky, či vizuály pripravené na billboardy, tablo alebo tlačené materiály.",
      "Teším sa na stretnutie a na to, že spolu vytvoríme portrét, v ktorom sa budete cítiť krásne, sebavedomo, odvážne a sami sebou 🤍",
      "📞 Objednávky: +421 907 533 373",
      "Tešíme sa na Vás :)",
    ],
    filterKey: "portret",
    cta: "Pozrieť cenník",
    ctaLink: "/cennik",
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

  const allImages = galleryImages.filter(
    (img) => img.category === data.filterKey
  );

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
          <div className="text-muted-foreground leading-relaxed space-y-3">
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
