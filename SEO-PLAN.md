# SEO Plán pre Zuzu Photo – Čadca / Kysuce / Žilina
> Vypracoval: SEO analytik (10+ rokov praxe) | Dátum: február 2026

---

## Obsah

1. [Audit súčasného stavu](#1-audit-súčasného-stavu)
2. [Cieľové kľúčové slová](#2-cieľové-kľúčové-slová)
3. [Technické SEO](#3-technické-seo)
4. [On-Page SEO – úpravy po stránkach](#4-on-page-seo--úpravy-po-stránkach)
5. [Content Gap – Blog / FAQ](#5-content-gap--blog--faq)
6. [Lokálne SEO & Google Business](#6-lokálne-seo--google-business)
7. [Prioritizovaný akčný plán](#7-prioritizovaný-akčný-plán)

---

## 1. Audit súčasného stavu

### Silné stránky

- Stránka je v slovenčine – správny jazyk pre cieľový trh
- Každá kategória portfólia má vlastnú URL (`/portfolio/novorodenci`, `/portfolio/svadobne` atď.)
- Portfólio stránky obsahujú dlhé, autentické texty – dobrý základ pre on-page SEO
- Site je postavená na Vite + React – rýchla, moderná technológia

### Slabé stránky / Príležitosti

| Problém | Kde | Dopad |
|---|---|---|
| `<title>` je príliš generický | `index.html` | VYSOKÝ |
| Meta description neobsahuje lokálne kľúčové slová | `index.html` | VYSOKÝ |
| Žiadne per-page `<title>` a `<meta description>` – SPA nemení head pre každú podstránku | celá aplikácia | VYSOKÝ |
| H1 na homepage je poetické heslo, nie kľúčové slovo | `Home.tsx` | STREDNÝ |
| Cenník: názvy balíčkov sú generické ("MINI", "MAXI") | `Cennik.tsx` | STREDNÝ |
| Chýba Blog / FAQ sekcia | – | VYSOKÝ (Content Gap) |
| Chýba `sitemap.xml` a `robots.txt` | `public/` | STREDNÝ |
| Obrázky pravdepodobne nemajú optimalizované `alt` texty s kľúčovými slovami | `images.ts` | STREDNÝ |

---

## 2. Cieľové kľúčové slová

### 2.1 Hlavné lokálne kľúčové slová (vysoký zámer – rezervácia)

| Kľúčové slovo | Cieľová stránka |
|---|---|
| fotograf Čadca | Domovská stránka |
| profesionálny fotograf Čadca | Domovská stránka |
| fotoateliér Čadca | Domovská stránka / Ateliér |
| fotostúdio Čadca | Domovská stránka / Ateliér |
| profesionálne fotografovanie Čadca | Domovská stránka |
| fotograf Kysuce | Domovská stránka |
| fotograf Žilina okolie | Domovská stránka |
| fotenie v ateliéri Čadca | Ateliér |

### 2.2 Kľúčové slová podľa služieb

#### Novorodenci
- fotenie novorodencov Čadca
- newborn fotograf Kysuce
- novorodenecký fotograf Čadca
- fotenie bábätiek Žilina okolie
- newborn fotenie Čadca

#### Deti & Rodina
- detský fotograf Čadca
- rodinný fotograf Čadca
- rodinné fotenie v exteriéri Kysuce
- fotenie detí Čadca
- detský fotograf ateliér Čadca

#### Tehotenské (Maternity)
- tehotenské fotenie Čadca
- tehotenský fotograf Kysuce
- fotenie tehotienok Žilina a okolie
- tehotenské fotenie v ateliéri

#### Svadobné
- svadobný fotograf Čadca
- svadobné fotenie Kysuce
- fotograf na svadbu Žilinský kraj
- predsvadobné fotenie Čadca

#### Sezónne & ďalšie
- vianočné fotenie Čadca
- jesenné fotenie v prírode Kysuce
- ateliér so záhradou Čadca
- exteriérové fotenie Čadca

### 2.3 Long-Tail kľúčové slová (informačný zámer – Blog/FAQ)

| Fráza | Typ obsahu |
|---|---|
| kde sa fotiť v Čadci a okolí | Blog článok |
| kedy je najlepší čas na fotenie novorodenca | Blog článok / FAQ |
| ako sa obliecť na rodinné fotenie | Blog článok / FAQ |
| tipy na miesta na svadobné fotenie Kysuce | Blog článok |
| koľko stojí fotenie u profesionála v Čadci | FAQ / Cenník |
| nápady na tehotenské fotky v prírode | Blog článok |
| kedy rezervovať vianočné fotenie | FAQ |
| čo si priniesť na novorodenecké fotenie | FAQ |

---

## 3. Technické SEO

### 3.1 Per-page `<title>` a `<meta description>` [PRIORITA 1]

**Problém:** Aplikácia je SPA (Single Page Application). `index.html` obsahuje iba jeden statický `<title>`. Google indexuje SPA, ale per-page meta tagy sú nevyhnutné pre lepší ranking.

**Riešenie:** Použiť knižnicu `react-helmet-async` alebo natívny `document.title` v `useEffect` v každej page komponente.

**Navrhované title tagy a meta descriptions:**

| Stránka | `<title>` (max 60 znakov) | `<meta description>` (max 155 znakov) |
|---|---|---|
| Domov | Profesionálny fotograf Čadca – Zuzu Photo | Profesionálny fotograf a fotoateliér v Čadci. Novorodenci, deti, svadby, tehotenstvo, rodinné fotenie. Útulný ateliér, záhrada, parkovanie. |
| Novorodenci | Fotenie novorodencov Čadca – Zuzu Photo | Novorodenecké fotenie v Čadci s 15-ročnou praxou. Bezpečný ateliér, rekvizity, deky. Ideálne do 14–21 dní od narodenia. |
| Deti | Detský fotograf Čadca – Zuzu Photo | Detské fotenie v Čadci – v ateliéri aj záhrade. Spontánne, úprimné záberky plné smiechu a emócií. |
| Rodina | Rodinný fotograf Čadca – Zuzu Photo | Rodinné fotenie Čadca a Kysuce. Ateliér, záhrada aj terasa. Prirodzená atmosféra, profesionálny výsledok. |
| Tehotenské | Tehotenské fotenie Čadca – Zuzu Photo | Tehotenský fotograf Čadca. Umelecké portréty budúcich mamičiek v útulnom ateliéri. Tehotenské šaty k dispozícii. |
| Svadobné | Svadobný fotograf Čadca – Zuzu Photo | Svadobné fotenie Kysuce a Žilina. 15 rokov praxe, fotíme dvaja. Nadčasové svadobné fotografie. |
| Ateliér | Fotoateliér Čadca – Zuzu Photo | Fotoateliér priamo v centre Čadce. Záhrada, terasa, parkovanie, stovky rekvizít. Fotenie v útulnom rodinnom dome. |
| Vianočné | Vianočné fotenie Čadca – Zuzu Photo | Vianočné fotenie Čadca od októbra. Sviatočná atmosféra, rekvizity, detský klavír. Rezervujte termín vopred! |
| Exterier | Exteriérové fotenie Čadca – Zuzu Photo | Fotenie v exteriéri – záhrada a terasa priamo v Čadci. Prírodné svetlo, zeleň, uvoľnená atmosféra. |
| Cenník | Cenník fotenia Čadca – Zuzu Photo | Cenník profesionálneho fotografovania v Čadci. Novorodenci od 130 €, tehotenské od 80 €, svadby od 500 €. |
| O mne | Zuzka – fotografka Čadca – Zuzu Photo | Spoznajte Zuzku – profesionálnu fotografku z Čadce s 15-ročnou praxou. Fotografie plné emócií a lásky. |
| Kontakt | Kontakt – Fotograf Čadca – Zuzu Photo | Rezervujte termín fotenia v Čadci. Telefón, správa, adresa ateliéru. Fotíme 7 dní v týždni. |

### 3.2 Implementácia dynamic meta tagov

**Súbor:** `src/app/App.tsx` alebo jednotlivé page komponenty

```tsx
// Príklad – inštalácia: npm install react-helmet-async
// V App.tsx wrappnúť aplikáciu: <HelmetProvider>

// V Home.tsx pridať:
import { Helmet } from 'react-helmet-async';

<Helmet>
  <title>Profesionálny fotograf Čadca – Zuzu Photo</title>
  <meta name="description" content="Profesionálny fotograf a fotoateliér v Čadci. Novorodenci, deti, svadby, tehotenstvo, rodinné fotenie. Útulný ateliér, záhrada, parkovanie." />
  <link rel="canonical" href="https://zuzu-photo.sk/" />
</Helmet>
```

### 3.3 Sitemap a robots.txt [PRIORITA 2]

Vytvoriť `public/sitemap.xml` so všetkými URL adresami:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://zuzu-photo.sk/</loc><priority>1.0</priority></url>
  <url><loc>https://zuzu-photo.sk/portfolio</loc><priority>0.9</priority></url>
  <url><loc>https://zuzu-photo.sk/portfolio/novorodenci</loc><priority>0.9</priority></url>
  <url><loc>https://zuzu-photo.sk/portfolio/deti</loc><priority>0.8</priority></url>
  <url><loc>https://zuzu-photo.sk/portfolio/rodinne</loc><priority>0.8</priority></url>
  <url><loc>https://zuzu-photo.sk/portfolio/tehotenske</loc><priority>0.8</priority></url>
  <url><loc>https://zuzu-photo.sk/portfolio/svadobne</loc><priority>0.8</priority></url>
  <url><loc>https://zuzu-photo.sk/portfolio/atelier</loc><priority>0.8</priority></url>
  <url><loc>https://zuzu-photo.sk/portfolio/exterier</loc><priority>0.7</priority></url>
  <url><loc>https://zuzu-photo.sk/portfolio/vianocne</loc><priority>0.7</priority></url>
  <url><loc>https://zuzu-photo.sk/cennik</loc><priority>0.9</priority></url>
  <url><loc>https://zuzu-photo.sk/o-mne</loc><priority>0.6</priority></url>
  <url><loc>https://zuzu-photo.sk/kontakt</loc><priority>0.7</priority></url>
</urlset>
```

Vytvoriť `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://zuzu-photo.sk/sitemap.xml
```

### 3.4 Structured Data – Schema.org [PRIORITA 2]

Pridať do `index.html` JSON-LD markup pre lokálny biznis:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://zuzu-photo.sk",
  "name": "Zuzu Photo",
  "description": "Profesionálny fotograf a fotoateliér v Čadci. Novorodenci, deti, svadby, tehotenstvo, rodinné fotenie.",
  "image": "https://zuzu-photo.sk/og-image.jpg",
  "telephone": "+421907533373",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Čadca",
    "addressRegion": "Žilinský kraj",
    "addressCountry": "SK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "49.4369",
    "longitude": "18.7888"
  },
  "url": "https://zuzu-photo.sk",
  "priceRange": "€€",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/zuzu-photo",
    "https://www.instagram.com/zuzu-photo"
  ]
}
```

### 3.5 Open Graph a Social Sharing

Pridať do `index.html`:

```html
<meta property="og:title" content="Profesionálny fotograf Čadca – Zuzu Photo" />
<meta property="og:description" content="Profesionálny fotograf a fotoateliér v Čadci. Novorodenci, deti, svadby, tehotenstvo, rodinné fotenie." />
<meta property="og:image" content="https://zuzu-photo.sk/og-image.jpg" />
<meta property="og:url" content="https://zuzu-photo.sk" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="sk_SK" />
```

### 3.6 Canonical URL tagy

Každá page komponenta by mala obsahovať canonical link, aby sa predišlo duplicate content problémom.

---

## 4. On-Page SEO – úpravy po stránkach

### 4.1 Domovská stránka (`Home.tsx`) [PRIORITA 1]

**Aktuálny stav H1:**
> "Okamih trvá sekundu / Spomienka celý život"

**Problém:** Poetické, ale Google nevie, čo stránka ponúka.

**Odporúčanie:** Zachovať H1 ako poetické heslo (je súčasťou brandu), ale **pridať skrytý/vizuálne-nenápadný SEO podnadpis** alebo optimalizovať ďalší viditeľný text, príp. použiť `aria-label` na H1 s kľúčovým slovom.

**Alternatíva:** Zmeniť subtitle section H2 na:
> "Profesionálny fotograf a fotoateliér v Čadci – Zuzu Photo"

**Odsek pod heroem** (`Intro Strip`): Súčasný text je dobrý, ale optimalizovať ho:
- Pridať frázy: "fotograf Čadca", "región Kysuce", "Žilina a okolie"

**Services section H2:** "Čo fotografujem" → **"Fotografické služby – Čadca a Kysuce"**

**Bottom CTA:** Text je dobrý, zachovať. Pridať kľúčové slová do alt textu obrázka:
- `alt="Profesionálne fotografovanie v Čadci – Zuzu Photo ateliér"`

---

### 4.2 Portfólio: Novorodenci (`/portfolio/novorodenci`) [PRIORITA 1]

**Aktuálny stav:** Dobrý dlhý text (cca 800 slov), ale neobsahuje SEO kľúčové slová.

**Odporúčania:**
- V prvom odseku použiť: **"fotenie novorodencov Čadca"**, **"newborn fotografka Kysuce"**
- Pridať H2 sekciu "Ako prebieha novorodenecké fotenie v Čadci?"
- Pridať H2 sekciu "Kedy rezervovať newborn fotenie?"
- Text v 4. odseku obsahuje "15 rokov" – zvýrazniť ako USP

**Príklad upravenia 1. odseku:**
> "Fotenie novorodencov v Čadci – prvé dni života sú tie najkrehkejšie..."

---

### 4.3 Portfólio: Svadobné (`/portfolio/svadobne`) [PRIORITA 1]

**Odporúčania:**
- V 1. odseku použiť: **"svadobný fotograf Čadca"**, **"svadobné fotenie Kysuce"**
- Pridať informáciu o konkrétnych lokalitách na Kysuciach, kde fotia
- Pridať H2: "Svadobné balíčky – Čadca a okolie"
- Zmeniť CTA "Pozrieť svadobné balíčky" na odkaz s kľúčovým slovom

---

### 4.4 Portfólio: Rodina & Deti (`/portfolio/rodinne`, `/portfolio/deti`) [PRIORITA 2]

**Odporúčania:**
- Pridať zmienku o výhodách fotenia v ateliéri vs. záhrade – prirodzená SEO príležitosť
- Keywords: "rodinný fotograf Čadca", "detský fotograf ateliér Čadca"
- Pridať H2: "Rodinné fotenie v Čadci – ateliér alebo exteriér?"

---

### 4.5 Cenník (`/cennik`) [PRIORITA 2]

**Aktuálny stav:** H1 je len "Cenník" – príliš generické.

**Odporúčania:**
- H1 zmeniť na: **"Cenník fotografovania – Čadca a Kysuce"**
- Prepísať názvy generických balíčkov:
  - "MINI balíček" → **"MINI balíček – Rodinné fotenie"**
  - "MAXI balíček" → **"MAXI balíček – Rodinné fotenie"**
- Pridať krátky úvodný text s kľúčovými slovami (cena fotenia Čadca, cenník fotografa)
- Pod cenníkom pridať FAQ sekciu (pozri sekciu 5)

---

### 4.6 Ateliér (`/portfolio/atelier`) [PRIORITA 2]

**Odporúčania:**
- Zvýrazniť: "priamo v centre mesta Čadca" – lokálne SEO
- Pridať keywords: "fotostúdio Čadca", "ateliér s parkovaním Čadca"
- Text "fotoateliér sa nachádza priamo v centre mesta Čadca" – zachovať a rozšíriť
- Pridať H2: "Výhody fotenia v našom ateliéri v Čadci"

---

### 4.7 Alt texty obrázkov [PRIORITA 2]

Všetky obrázky v galérii by mali mať popisné alt texty s kľúčovými slovami:

| Kategória | Príklad alt textu |
|---|---|
| Novorodenci | "novorodenecké fotenie Čadca – Zuzu Photo" |
| Deti | "detský fotograf Čadca – fotenie v záhrade" |
| Rodina | "rodinné fotenie Čadca – ateliér Zuzu Photo" |
| Svadba | "svadobný fotograf Kysuce – Zuzu Photo" |
| Tehotenstvo | "tehotenské fotenie Čadca – umelecký portrét" |
| Ateliér | "fotoateliér Čadca – záhrada a terasa Zuzu Photo" |

---

## 5. Content Gap – Blog / FAQ

Toto je **najväčšia nevyužitá príležitosť** na zachytenie informačnej návštevnosti. Odporúčam vytvoriť novú stránku `/blog` alebo `/faq`.

### 5.1 Odporúčané FAQ položky (rýchle na implementáciu)

Tieto FAQ items môžu byť pridané priamo na existujúce podstránky alebo na stránku Cenník:

**Pre Cenník:**
- Koľko stojí fotenie novorodenca v Čadci? → "Novorodenecké fotenie u nás stojí 130 €..."
- Ako dlho trvá fotenie? → "Novorodenecké fotenie trvá 2–4 hodiny..."
- Kedy dostaneme fotografie? → "Fotografie doručíme do 6 týždňov..."

**Pre Novorodenci:**
- Kedy je najlepší čas na fotenie novorodenca? → "Ideálne do 14–21 dní od narodenia..."
- Čo si priniesť na novorodenecké fotenie? → "Mliečko, plienku, deku..."

**Pre Svadobné:**
- Ako prebieha predsvadobné fotenie? → popis
- Kde fotíte svadby na Kysuciach? → zoznam lokalít

### 5.2 Odporúčané Blog články (strednodobý cieľ)

| Článok | Cieľové kľúčové slovo | Cieľová URL |
|---|---|---|
| Kde sa fotiť na Kysuciach – 5 najkrajších miest | kde sa fotiť na Kysuciach | `/blog/kde-sa-fotit-kysuce` |
| Ako sa obliecť na rodinné fotenie? Kompletný sprievodca | ako sa obliecť na rodinné fotenie | `/blog/ako-sa-obliec-na-rodinne-fotenie` |
| Kedy fotiť novorodenca? Všetko, čo potrebujete vedieť | kedy fotiť novorodenca | `/blog/kedy-fotit-novorodenca` |
| Svadobné fotenie na Kysuciach – tipy a lokácie | svadobné fotenie Kysuce tipy | `/blog/svadobne-fotenie-kysuce` |
| Vianočné fotenie – kedy rezervovať a čo očakávať | vianočné fotenie Čadca | `/blog/vianocne-fotenie-cadca` |
| Tehotenské fotenie – kedy a ako sa pripraviť | tehotenské fotenie príprava | `/blog/tehotenske-fotenie-priprava` |

---

## 6. Lokálne SEO & Google Business

### 6.1 Google Business Profile [PRIORITA 1]

- Skontrolovať a optimalizovať profil na **Google Business Profile** (Google Mapy)
- Kategória: "Fotograf", "Fotoateliér"
- Popis: použiť kľúčové slová z bodu 2.1
- Pridať všetky typy služieb
- Nahrať fotografie ateliéru, záhrady, terasy
- Zbierať Google recenzie od klientov (odporúčať po každom fotení)

### 6.2 NAP konzistencia (Name, Address, Phone)

Ubezpečiť sa, že na všetkých miestach je rovnaká adresa a telefón:
- Web: `zuzup-hoto.sk`
- Google Business Profile
- Facebook, Instagram
- Akékoľvek online adresáre (Zoznam.sk, Najdi.sk)

### 6.3 Lokálne citácie

Zaregistrovať sa v lokálnych adresároch:
- **Zoznam.sk** – bezplatný zápis
- **Firmy.sk** – bezplatný zápis
- **Najdi.sk**
- **Zlaté stránky** (zlatestranky.sk)
- **Heureka.sk** (nie priamo relevantné, ale buduje citácie)

---

## 7. Prioritizovaný akčný plán

### Fáza 1 – Rýchle výhry (1–2 týždne)

| # | Úloha | Dopad | Náročnosť |
|---|---|---|---|
| 1 | Optimalizovať `<title>` v `index.html` | VYSOKÝ | NÍZKA |
| 2 | Optimalizovať `<meta description>` v `index.html` | VYSOKÝ | NÍZKA |
| 3 | Nainštalovať `react-helmet-async` a pridať per-page title + meta | VYSOKÝ | STREDNÁ |
| 4 | Optimalizovať H1 / H2 na `Cennik.tsx` (pridať lokálne kľúčové slová) | STREDNÝ | NÍZKA |
| 5 | Premenovať balíčky MINI/MAXI na "MINI balíček – Rodinné fotenie" | STREDNÝ | NÍZKA |
| 6 | Vytvoriť `public/robots.txt` | STREDNÝ | NÍZKA |
| 7 | Vytvoriť `public/sitemap.xml` | STREDNÝ | NÍZKA |

### Fáza 2 – On-Page optimalizácia (2–4 týždne)

| # | Úloha | Dopad | Náročnosť |
|---|---|---|---|
| 8 | Optimalizovať úvodné odseky na všetkých portfólio stránkach | VYSOKÝ | STREDNÁ |
| 9 | Pridať kľúčové slová do alt textov obrázkov | STREDNÝ | STREDNÁ |
| 10 | Pridať Structured Data (JSON-LD LocalBusiness) do `index.html` | STREDNÝ | NÍZKA |
| 11 | Pridať Open Graph meta tagy | STREDNÝ | NÍZKA |
| 12 | Canonical URL tagy na všetkých stránkach | STREDNÝ | STREDNÁ |

### Fáza 3 – Content Marketing (1–3 mesiace)

| # | Úloha | Dopad | Náročnosť |
|---|---|---|---|
| 13 | Vytvoriť FAQ sekciu na stránke Cenník | VYSOKÝ | STREDNÁ |
| 14 | Vytvoriť FAQ sekciu na stránke Novorodenci | STREDNÝ | STREDNÁ |
| 15 | Napísať 1. blog článok: "Kde sa fotiť na Kysuciach" | VYSOKÝ | VYSOKÁ |
| 16 | Napísať 2. blog článok: "Ako sa obliecť na rodinné fotenie" | STREDNÝ | STREDNÁ |
| 17 | Napísať 3. blog článok: "Kedy fotiť novorodenca" | STREDNÝ | STREDNÁ |

### Fáza 4 – Lokálne SEO & monitorovanie (priebežne)

| # | Úloha | Dopad | Náročnosť |
|---|---|---|---|
| 18 | Optimalizovať Google Business Profile | VYSOKÝ | NÍZKA |
| 19 | Zaregistrovať sa v lokálnych adresároch (Zoznam.sk, Firmy.sk) | STREDNÝ | NÍZKA |
| 20 | Zbierať Google recenzie od klientov | VYSOKÝ | NÍZKA |
| 21 | Nastaviť Google Search Console | VYSOKÝ | NÍZKA |
| 22 | Nastaviť Google Analytics 4 | STREDNÝ | NÍZKA |
| 23 | Mesačný monitoring pozícií pre cieľové kľúčové slová | VYSOKÝ | PRIEBEŽNÁ |

---

## Záver

Zuzu Photo má **solídny základ** – autentické texty, jasná štruktúra URL, rýchla technológia a skutočná lokálna prítomnosť. Hlavné medzery sú v **technickom SEO** (per-page meta tagy) a **chýbajúcom informačnom obsahu** (Blog/FAQ).

Implementáciou Fázy 1 a 2 by mala byť stránka viditeľne lepšie hodnotená pre lokálne vyhľadávania do **60–90 dní**. Fáza 3 (Blog/FAQ) prinesie organickú návštevnosť z informačných vyhľadávaní a vybuduje dôveryhodnosť v dlhodobom horizonte.

**Najdôležitejší krok hneď teraz:** Nainštalovať `react-helmet-async` a nastaviť správne `<title>` a `<meta description>` pre každú stránku – toto jediné môže priniesť najrýchlejšie merateľné výsledky.
