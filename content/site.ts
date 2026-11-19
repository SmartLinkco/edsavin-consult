/**
 * All public copy for the EDSAVIN CONSULT AND TRADING website.
 *
 * Edit this file to replace draft text. Anything rendered with a
 * [PLACEHOLDER] tag is waiting for Mr Saaka. Photographs live in
 * public/images — swap the files, then update the alt text here.
 * Every current photograph is an AI-generated stand-in for a Ghanaian
 * farm. Do not paste pictures from other websites.
 *
 * The only company name to use is EDSAVIN CONSULT AND TRADING.
 */

export const COMPANY = "EDSAVIN CONSULT AND TRADING";

export function siteUrl() {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com")
    .trim()
    .replace(/\/$/, "");
  if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;
  return `https://${raw}`;
}

export type Photo = {
  src: string;
  alt: string;
  wide?: boolean;
};

const placeholderPhoto = " AI-generated placeholder photo to be replaced with the farm's own picture.";

export const photos = {
  heroFields: {
    src: "/images/hero-fields.jpg",
    alt: "Rows of cassava and young maize in red soil, with trees and small farm shelters beyond." + placeholderPhoto,
    wide: true,
  },
  heroLivestock: {
    src: "/images/hero-livestock.jpg",
    alt: "Goats and cattle in a wide earthen farmyard with trees and a simple shelter." + placeholderPhoto,
    wide: true,
  },
  heroProcessing: {
    src: "/images/hero-processing.jpg",
    alt: "Gari being roasted in a wide metal pan over a wood fire and stirred with a wooden paddle." + placeholderPhoto,
    wide: true,
  },
  galleryFields: {
    src: "/images/gallery-fields.jpg",
    alt: "A wide view of maize and cassava fields beside a dirt track under a bright sky." + placeholderPhoto,
    wide: true,
  },
  galleryWork: {
    src: "/images/gallery-work.jpg",
    alt: "A farm worker seen from behind, feeding goats in a brushwood pen at sunset. Not a portrait of a named member of the team." + placeholderPhoto,
  },
  guineaFowl: {
    src: "/images/guinea-fowl.jpg",
    alt: "A small flock of helmeted guinea fowl foraging on red earth." + placeholderPhoto,
  },
  duck: {
    src: "/images/ducks.jpg",
    alt: "Muscovy ducks beside a water trough on a farm." + placeholderPhoto,
  },
  rabbit: {
    src: "/images/rabbits.jpg",
    alt: "Farm rabbits in a wooden hutch with straw bedding." + placeholderPhoto,
  },
  sheep: {
    src: "/images/sheep.jpg",
    alt: "Sheep standing in a paddock of grass and red soil." + placeholderPhoto,
  },
  cattle: {
    src: "/images/cattle.jpg",
    alt: "Cattle grazing in an open savanna paddock." + placeholderPhoto,
  },
  goat: {
    src: "/images/goats.jpg",
    alt: "Goats in a simple earthen pen under tree shade." + placeholderPhoto,
  },
  tortoise: {
    src: "/images/tortoise.jpg",
    alt: "A tortoise walking on red soil among low green plants." + placeholderPhoto,
  },
  goatMeat: {
    src: "/images/goat-meat.jpg",
    alt: "Cuts of raw goat meat on a wooden board, with no animal head shown." + placeholderPhoto,
  },
  beef: {
    src: "/images/beef.jpg",
    alt: "A raw beef steak and stew cubes on a wooden board." + placeholderPhoto,
  },
  mutton: {
    src: "/images/mutton.jpg",
    alt: "Cuts of raw mutton on a wooden board, with no animal head shown." + placeholderPhoto,
  },
  cassava: {
    src: "/images/cassava.jpg",
    alt: "Freshly harvested cassava roots on a woven mat, with leaves nearby." + placeholderPhoto,
  },
  maize: {
    src: "/images/maize.jpg",
    alt: "Ripe maize cobs in a woven basket." + placeholderPhoto,
  },
  beans: {
    src: "/images/beans.jpg",
    alt: "Dried cowpeas in a calabash bowl." + placeholderPhoto,
  },
  gari: {
    src: "/images/gari.jpg",
    alt: "A bowl of golden gari on a wooden table." + placeholderPhoto,
  },
  starch: {
    src: "/images/starch.jpg",
    alt: "Fine white cassava starch in a plain metal bowl." + placeholderPhoto,
  },
  journeyField: {
    src: "/images/journey-field.jpg",
    alt: "A field of tall cassava plants in red soil." + placeholderPhoto,
  },
  journeyHarvest: {
    src: "/images/journey-harvest.jpg",
    alt: "Freshly pulled cassava roots piled at the edge of a field." + placeholderPhoto,
  },
  journeyProcess: {
    src: "/images/journey-process.jpg",
    alt: "Grated cassava, a wooden press and a roasting pan inside a simple processing shed." + placeholderPhoto,
  },
  journeyPack: {
    src: "/images/journey-pack.jpg",
    alt: "Plain unlabelled bags beside bowls of gari and white cassava starch." + placeholderPhoto,
  },
} as const satisfies Record<string, Photo>;

export type LineId = "livestock" | "meat" | "crops" | "processing";

export type Product = {
  id: string;
  name: string;
  line: LineId;
  photo: Photo;
  /** Buyer-facing. Not a placeholder. */
  summary: string;
  /** Buyer-facing. Not a placeholder. */
  details: string;
  /** Unknown fact. Render with a [PLACEHOLDER] tag. */
  availability: string;
  /** Unknown fact. Render with a [PLACEHOLDER] tag. */
  pack: string;
};

export const products: Product[] = [
  {
    id: "guinea-fowl",
    name: "Guinea fowl",
    line: "livestock",
    photo: photos.guineaFowl,
    summary: "A bird the Ghanaian pot already knows. Ask for live birds and say how many.",
    details: "Useful for the house, a chop bar or a caterer who wants birds from the farm, not from a seller who cannot name the source. Tell us the number and the day. We reply with what we can supply.",
    availability: "When guinea fowl are ready",
    pack: "How the birds are grouped for sale",
  },
  {
    id: "duck",
    name: "Duck",
    line: "livestock",
    photo: photos.duck,
    summary: "For a special pot or a kitchen that wants duck from the farm.",
    details: "Say whether you want live birds, how many, and when you need them. We confirm the supply before you commit.",
    availability: "When ducks are ready",
    pack: "How ducks are grouped for sale",
  },
  {
    id: "rabbit",
    name: "Rabbit",
    line: "livestock",
    photo: photos.rabbit,
    summary: "A smaller order for the house or a kitchen trying a different meat.",
    details: "Tell us the number and the day. We will say if live rabbits are available then. We do not list a standing stock.",
    availability: "When rabbits are ready",
    pack: "How rabbits are grouped for sale",
  },
  {
    id: "sheep",
    name: "Sheep",
    line: "livestock",
    photo: photos.sheep,
    summary: "Live sheep for a family gathering, a caterer or a trader.",
    details: "Say how many and when. We confirm what we can let go. Sheep meat is a separate order on the Meat page.",
    availability: "When sheep are ready",
    pack: "How sheep are grouped for sale",
  },
  {
    id: "cattle",
    name: "Cattle",
    line: "livestock",
    photo: photos.cattle,
    summary: "For a buyer who needs cattle from the farm, not from an open market pen.",
    details: "Households rarely need a whole animal. Traders, caterers and partners often do. Say the number and the timing. We reply with what is available.",
    availability: "When cattle are ready",
    pack: "How cattle are grouped for sale",
  },
  {
    id: "goat",
    name: "Goat",
    line: "livestock",
    photo: photos.goat,
    summary: "Live goats for the house, a ceremony or a trader who wants the animal itself.",
    details: "Say how many and the day you need them. If you want meat, not the live animal, order goat meat instead. We keep the two requests separate so the reply is clear.",
    availability: "When goats are ready",
    pack: "How goats are grouped for sale",
  },
  {
    id: "tortoise",
    name: "Tortoise",
    line: "livestock",
    photo: photos.tortoise,
    summary: "Ask if tortoise is what your buyer or your own table wants.",
    details: "Tell us the number and when you need them. We confirm what we can supply. Species and age are not published here yet.",
    availability: "When tortoises are ready",
    pack: "How tortoises are grouped for sale",
  },
  {
    id: "goat-meat",
    name: "Goat meat",
    line: "meat",
    photo: photos.goatMeat,
    summary: "For light soup, stew and the chop bar pot. Ask which cuts are ready.",
    details: "Order for the house, a restaurant, a hotel or a caterer. Tell us the cut if you know it, the weight you need, and the day. We confirm what we can prepare. We do not take payment on this website.",
    availability: "When goat meat is ready",
    pack: "Cuts and pack size for goat meat",
  },
  {
    id: "beef",
    name: "Beef",
    line: "meat",
    photo: photos.beef,
    summary: "Stew beef and kitchen cuts, confirmed for the day you need them.",
    details: "Say the cut, the weight and who it is for. A household bag and a hotel order both start here. We tell you what is ready and how it will be handed over before you agree.",
    availability: "When beef is ready",
    pack: "Cuts and pack size for beef",
  },
  {
    id: "mutton",
    name: "Sheep meat (mutton)",
    line: "meat",
    photo: photos.mutton,
    summary: "Mutton for the pot, ordered from the same farm that keeps the sheep.",
    details: "Say the weight, the day and whether it is for the house or a kitchen. We confirm the cut we can supply. Live sheep are listed separately under Livestock.",
    availability: "When mutton is ready",
    pack: "Cuts and pack size for mutton",
  },
  {
    id: "cassava",
    name: "Cassava",
    line: "crops",
    photo: photos.cassava,
    summary: "Roots from the same farm that makes the gari and the starch.",
    details: "Order fresh roots if that is what you cook or trade. If you want them already processed, ask for gari or starch instead. Tell us the quantity and the week.",
    availability: "Cassava season",
    pack: "How cassava roots are packed",
  },
  {
    id: "maize",
    name: "Maize",
    line: "crops",
    photo: photos.maize,
    summary: "Maize for the house, a mill or a trader who wants it from the farm.",
    details: "Say whether you want it fresh or dry, and how much. We confirm what that harvest can give you. We do not publish a price list here.",
    availability: "Maize season",
    pack: "How maize is packed",
  },
  {
    id: "beans",
    name: "Beans",
    line: "crops",
    photo: photos.beans,
    summary: "Beans for the pot or the shop, ordered without a middle trader.",
    details: "Tell us the quantity and when you need them. Variety and whether they are sold dried are confirmed in the reply, not guessed on this page.",
    availability: "Beans season",
    pack: "How beans are packed",
  },
  {
    id: "gari",
    name: "Gari",
    line: "processing",
    photo: photos.gari,
    summary: "Gari for the soaking bowl, the shop shelf or the hotel store.",
    details: "Made from cassava grown by EDSAVIN CONSULT AND TRADING. Say how many bags you need and who they are for. We confirm grade, colour and bag size before you pay anyone.",
    availability: "When gari is ready",
    pack: "Bag sizes for gari",
  },
  {
    id: "starch",
    name: "Starch",
    line: "processing",
    photo: photos.starch,
    summary: "Cassava starch for a kitchen or a buyer who needs it in bulk.",
    details: "From the same cassava as the gari. Tell us the quantity and the day. We confirm how it is finished and packed. Nothing is charged on this website.",
    availability: "When starch is ready",
    pack: "Pack sizes for starch",
  },
];

export const productLabels = {
  season: "Season",
  ready: "When it is ready",
  pack: "Pack size",
  grouped: "How it is sold",
};

export const lineLabel: Record<LineId, string> = {
  livestock: "Live animals",
  meat: "For the kitchen",
  crops: "From the field",
  processing: "Ready to use",
};

export const lines: {
  id: LineId;
  title: string;
  navLabel: string;
  href: string;
  photo: Photo;
  text: string;
  more: string;
}[] = [
  {
    id: "livestock",
    title: "Livestock",
    navLabel: "Livestock",
    href: "/livestock",
    photo: photos.heroLivestock,
    text: "Birds and animals for the house, a ceremony or a trader. You ask. We say what is ready.",
    more: "See all live animals",
  },
  {
    id: "meat",
    title: "Meat",
    navLabel: "Meat",
    href: "/meat",
    photo: photos.goatMeat,
    text: "Goat meat, beef and mutton for the pot. Confirm the cut before you pay.",
    more: "See goat meat, beef and mutton",
  },
  {
    id: "crops",
    title: "Crops",
    navLabel: "Crops",
    href: "/crops",
    photo: photos.heroFields,
    text: "Cassava, maize and beans from the farm. Ask the season and the bag.",
    more: "See the crops",
  },
  {
    id: "processing",
    title: "Processing (Gari & Starch)",
    navLabel: "Processing",
    href: "/processing",
    photo: photos.heroProcessing,
    text: "Gari and starch from cassava grown here. Order the bag, not a guess.",
    more: "See gari and starch",
  },
];

export function productsIn(line: LineId) {
  return products.filter((product) => product.line === line);
}

export function findProduct(id: string) {
  return products.find((product) => product.id === id);
}

export const cta = {
  enquire: "Send an enquiry",
  whatsapp: "Order on WhatsApp",
  enquireAbout: (name: string) => `Ask for ${name}`,
  whatsappAbout: (name: string) => `WhatsApp ${name}`,
  send: "Send my enquiry",
  sending: "Sending…",
  pause: "Pause photos",
  play: "Play photos",
  show: "How to order",
  hide: "Hide",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  close: "Close",
  home: "Back to the home page",
};

export const whatsappCopy = {
  withProduct: (product: string) =>
    `Hello ${COMPANY}, I want to order ${product}. Please tell me what is ready, how it is packed, and how I can collect or pay.`,
  general: `Hello ${COMPANY}, I want to place an order. Please tell me what is ready, and how I can collect or pay.`,
};

export const home = {
  headline: "Food from the farm, for the house and the trade.",
  lead: "Households, restaurants, chop bars, hotels, caterers, retailers and distributors can ask EDSAVIN CONSULT AND TRADING what is ready today. Enquire now. We confirm the supply before you commit.",
  buyersKicker: "Who it is for",
  buyersHeading: "If you cook it, sell it or serve it, start here.",
  buyersBody: "The same farm answers a family order and a bulk order. Say who you are in the message so the reply fits.",
  buyers: [
    "Households",
    "Restaurants",
    "Chop bars",
    "Hotels",
    "Caterers",
    "Retailers",
    "Distributors",
    "Partners and investors",
  ],
  linesKicker: "What you can order",
  linesHeading: "One farm. Four ways to fill an order.",
  linesBody: "Pick live animals, meat for the pot, crops from the field, or gari and starch already processed. You can ask for more than one in the same message.",
  aboutLink: "Meet the farm",
  whyKicker: "Why buy from EDSAVIN",
  whyHeading: "You talk to the farm, and you agree before you pay.",
  why: [
    {
      title: "You deal with the farm",
      text: "Your message goes to EDSAVIN CONSULT AND TRADING. You are not left guessing which trader handled the goods.",
    },
    {
      title: "You hear what is ready",
      text: "We do not take payment here. We tell you what we can supply for your date, then you decide.",
    },
    {
      title: "Mixed goods, one conversation",
      text: "Birds, meat, cassava, maize, beans, gari and starch can sit in the same enquiry.",
    },
    {
      title: "House quantity or bulk",
      text: "Say if it is for the table, a chop bar, a hotel or a distributor. Say the quantity in your own words.",
    },
    {
      title: "The product is already named",
      text: "WhatsApp opens with the product written in, so the reply can start with availability.",
    },
    {
      title: "Partners can use the same door",
      text: "If you want to distribute, supply or invest, say that in the message. We reply to that too.",
    },
  ],
  explorerKicker: "Choose a product",
  explorerHeading: "Find what you need, then send the order.",
  explorerLead: "Open a line. The enquiry and the WhatsApp message already name the product, so you do not start from a blank page.",
  journeyKicker: "From field to kitchen",
  journeyHeading: "See the cassava become gari and starch, then order.",
  journeyLead: "You can follow the path and send the order at the end. Nothing is paid on this page.",
  orderKicker: "How ordering works",
  orderHeading: "Four steps. No basket. No surprise charge.",
  faqKicker: "Questions buyers ask",
  faqHeading: "Straight answers before you write.",
  ctaKicker: "Ready when you are",
  ctaHeading: "Tell us what you need today.",
  ctaBody: "A family bag or a bulk order uses the same path. Name the product and the quantity. We reply with what is actually ready.",
  metaTitle: "Order food from the farm",
  metaDescription:
    "Households, kitchens and traders in Ghana can enquire with EDSAVIN CONSULT AND TRADING for livestock, meat, crops, gari and starch. We confirm what is ready. No payment on the site.",
};

export const whyBuy = home.why;

export const ordering = {
  kicker: "How ordering works",
  heading: "Four steps. You agree before you pay.",
  intro: "Households and bulk buyers follow the same path. The only difference is the quantity you write.",
  steps: [
    {
      title: "Say what you need",
      text: "Pick the product. Add the quantity, the day, and whether it is for the house, a kitchen or resale.",
    },
    {
      title: "Send it",
      text: "Use the enquiry form, or open WhatsApp. The product name is already written in the WhatsApp message.",
    },
    {
      title: "We confirm the practical details",
      text: "EDSAVIN CONSULT AND TRADING replies with what is ready, how it is packed, where you can collect or how delivery can work, and how to pay.",
    },
    {
      title: "You decide",
      text: "If the reply suits you, the order goes ahead. This website never takes the money.",
    },
  ],
  paymentLabel: "How you pay",
  payment: "The ways a buyer can pay",
  deliveryLabel: "Collection or delivery",
  delivery: "The areas where orders are collected or delivered",
};

export const faq = [
  {
    q: "Can I pay on this website?",
    a: "No. There is no basket and no checkout. You agree the order with the farm first. Payment happens the way EDSAVIN CONSULT AND TRADING confirms in the reply.",
  },
  {
    q: "Will it be in stock when I need it?",
    a: "Ask for a date. We tell you what is ready for that date. We do not promise a standing stock on this website.",
  },
  {
    q: "Can you supply me every week?",
    a: "Tell us the rhythm and the quantity. We will say whether we can keep it up. A fixed supply calendar is not published yet.",
  },
  {
    q: "How is the meat handled?",
    a: "Ask in the same message. We describe how that order is prepared and handed over before you agree. A handling certificate is not published here.",
  },
  {
    q: "Do you deliver, or do I collect?",
    a: "We agree that when we reply. Tell us where you are and whether you can collect.",
  },
  {
    q: "Is there a minimum order?",
    a: "No minimum is published. Write the quantity you need, including a bulk figure, and we will say if we can meet it.",
  },
  {
    q: "I am a distributor or an investor. Is this form for me?",
    a: "Yes. Choose a general enquiry and say what you have in mind. The farm reads that message too.",
  },
];

export const about = {
  metaTitle: "The farm behind the order",
  metaDescription:
    "Mr Saaka owns EDSAVIN CONSULT AND TRADING, a Ghanaian farm selling livestock, meat, crops, gari and starch. Read what it does, then send an enquiry.",
  title: "The farm you are ordering from.",
  lede: "EDSAVIN CONSULT AND TRADING is Mr Saaka's farm business in Ghana. It rears animals, sells meat, grows crops, and turns cassava into gari and starch.",
  storyKicker: "What it does",
  storyHeading: "Animals, meat, crops, gari and starch.",
  story: [
    "Mr Saaka owns the business. Buyers deal with EDSAVIN CONSULT AND TRADING, not with an unnamed middle seller.",
    "The livestock are guinea fowl, duck, rabbit, sheep, cattle, goat and tortoise.",
    "The meat on offer is goat meat, beef and sheep meat, also called mutton. That meat line is growing.",
    "The crops are cassava, maize and beans. Cassava is also processed into gari and starch.",
  ],
  storyGap: "How the farm started, in Mr Saaka's own words.",
  promiseHeading: "What you can count on",
  promise: "A reply from the farm, a clear yes or no on what is ready, and an order agreed before any money changes hands.",
  valuesHeading: "How an order is treated",
  values: [
    { title: "A straight answer", text: "We say what we can supply for your date. If we cannot, we say that too." },
    { title: "No charge on the site", text: "You read the reply, then you decide. The website does not take payment." },
    { title: "Mixed orders are welcome", text: "Meat and gari, or birds and maize, can travel in one message." },
    { title: "A door for partners", text: "Distributors and investors use the same enquiry. Say what you want to discuss." },
  ],
  teamHeading: "Who replies",
  teamLead: "Mr Saaka owns the business. Other names and photographs have not been added yet.",
  photoGap: "Photo",
  team: [
    {
      name: "Mr Saaka",
      role: "Owner",
      bio: "A short note from Mr Saaka, in his own words.",
      nameIsPlaceholder: false,
      roleIsPlaceholder: false,
    },
    {
      name: "Name",
      role: "Role on the farm",
      bio: "Not sent yet.",
      nameIsPlaceholder: true,
      roleIsPlaceholder: true,
    },
  ],
  ctaHeading: "Ask the farm a direct question.",
  ctaBody: "If you want to know who you are buying from, send the enquiry. Name the product, or say you want to talk about a partnership.",
};

export const livestockPage = {
  metaTitle: "Live animals from the farm",
  metaDescription:
    "Order guinea fowl, duck, rabbit, sheep, cattle, goat or tortoise from EDSAVIN CONSULT AND TRADING. Say how many. We confirm what is ready.",
  title: "Live animals, asked for by the number you need.",
  lede: "Guinea fowl, duck, rabbit, sheep, cattle, goat and tortoise. Open a card, say how many and which day, then send the enquiry or the WhatsApp order.",
  note: "We confirm what is ready. We do not list a price or a promise of stock on this page.",
  ctaHeading: "Tell us the animal and the number.",
  ctaBody: "A household and a trader use the same form. Write the quantity in your own words.",
};

export const meatPage = {
  metaTitle: "Goat meat, beef and mutton",
  metaDescription:
    "Order goat meat, beef or mutton from EDSAVIN CONSULT AND TRADING. We confirm the cut and the day before you pay. No checkout.",
  title: "Meat for the pot, confirmed before you pay.",
  lede: "Goat meat, beef and mutton for the house, the restaurant, the chop bar, the hotel and the caterer. Ask what is ready. You are not charged on this page.",
  concerns: [
    {
      title: "You choose the day",
      text: "Tell us when you need it. We say what we can prepare for that day, instead of asking you to trust a standing shelf.",
    },
    {
      title: "You can ask how it is handled",
      text: "Put that question in the same message. We answer before you agree. A certificate is not published here.",
    },
    {
      title: "Bulk is the same path",
      text: "Write the weight a hotel or a distributor needs. We say if we can meet it.",
    },
  ],
  expansionHeading: "This part of the farm is growing",
  expansion: "Goat meat, beef and mutton sit beside the live animals, and this meat line is expanding.",
  expansionGap: "The extra cuts and volumes in that expansion",
  ctaHeading: "Name the meat, the weight and the day.",
  ctaBody: "We reply with the cut we can supply and how you collect or pay. Live goats and sheep are on the Livestock page if you want the animal, not the meat.",
};

export const cropsPage = {
  metaTitle: "Cassava, maize and beans",
  metaDescription:
    "Order cassava, maize or beans from EDSAVIN CONSULT AND TRADING. Ask the season and the bag size. We confirm before you commit.",
  title: "Crops from the farm, not from a trader's store.",
  lede: "Cassava, maize and beans for the pot, the mill or resale. Ask the season and the bag. Cassava can also be ordered as gari or starch.",
  note: "Seasons and pack sizes are confirmed in the reply. They are not listed as fixed figures here.",
  ctaHeading: "Say the crop, the form and the quantity.",
  ctaBody: "Fresh or dry, one bag or many. Write it in your own words and we will say what that harvest can give you.",
};

export const processingPage = {
  metaTitle: "Gari and starch from the farm",
  metaDescription:
    "Order gari and cassava starch from EDSAVIN CONSULT AND TRADING. The roots are grown on the farm. Bag sizes are confirmed when you enquire.",
  title: "Gari and starch from cassava grown here.",
  lede: "You can order the finished product and know the roots came from the same farm. Say the bags you need. We confirm size and what is ready.",
  gariHeading: "How gari is usually made",
  gariLead: "This is the ordinary path from root to gari. Ask us to confirm how this farm does it.",
  gariSteps: ["Peel and wash the roots", "Grate them", "Ferment and press", "Sift and roast into gari"],
  starchHeading: "How starch is usually made",
  starchLead: "This is the ordinary path from root to starch. Ask us to confirm how this farm does it.",
  starchSteps: ["Peel and wash the roots", "Grate them", "Wash the pulp and let the starch settle", "Dry the starch"],
  methodGap: "This farm's own timings and equipment",
  journeyLink: "Follow cassava from the field to the buyer",
  ctaHeading: "Order the bag you actually need.",
  ctaBody: "A shop shelf and a hotel store can ask in the same form. Name gari, starch, or both.",
};

export type JourneyStep = {
  id: string;
  kicker: string;
  title: string;
  text: string;
  note: string;
  photo: Photo;
};

export const journey: JourneyStep[] = [
  {
    id: "field",
    kicker: "01",
    title: "Grown on the farm",
    text: "The cassava starts in EDSAVIN CONSULT AND TRADING's fields, with maize and beans on the same farm.",
    note: "Where the fields are, and how long a season runs",
    photo: photos.journeyField,
  },
  {
    id: "harvest",
    kicker: "02",
    title: "Lifted when it is ready",
    text: "Roots come out of the ground to be sold fresh, or to be turned into gari and starch.",
    note: "Harvest months",
    photo: photos.journeyHarvest,
  },
  {
    id: "process",
    kicker: "03",
    title: "Turned into food you can store",
    text: "Some roots are roasted into gari. Some are washed and settled into starch. You can order either.",
    note: "This farm's own method and tools",
    photo: photos.journeyProcess,
  },
  {
    id: "pack",
    kicker: "04",
    title: "Packed for the order you asked for",
    text: "You tell us the bags you need. We confirm the size before you agree.",
    note: "Bag sizes and what the label says",
    photo: photos.journeyPack,
  },
  {
    id: "buyer",
    kicker: "05",
    title: "In your kitchen or your shop",
    text: "Send the enquiry or the WhatsApp order. The farm confirms, then the goods move. You do not pay on this website.",
    note: "Collection points, delivery areas and how to pay",
    photo: photos.gari,
  },
];

export type GalleryCategory = "Livestock" | "Fields" | "Processing" | "Farm work";

export const galleryCategories: GalleryCategory[] = ["Livestock", "Fields", "Processing", "Farm work"];

export const galleryPage = {
  metaTitle: "See the farm, then order",
  metaDescription:
    "Look through the animals, fields and gari processing, then send an order to EDSAVIN CONSULT AND TRADING. The farm's own photos are still to come.",
  title: "Look first. Then send the order.",
  lede: "Animals, fields and gari in the pan. When you see what you need, enquire or open WhatsApp with that product named.",
  photoGap: "The farm's own photographs are still to be added. These pictures show the kind of animals, fields and work you are ordering. The person feeding goats is not a named member of the team.",
  ctaHeading: "Seen enough to ask?",
  ctaBody: "Name the product in the enquiry. If you are still choosing, send a general message and we will tell you what is ready.",
};

export const gallery: { category: GalleryCategory; photo: Photo; caption: string }[] = [
  { category: "Livestock", photo: photos.guineaFowl, caption: "Guinea fowl for a buyer who wants birds from the farm." },
  { category: "Livestock", photo: photos.duck, caption: "Ducks. Ask how many are ready." },
  { category: "Livestock", photo: photos.rabbit, caption: "Rabbits kept for smaller orders." },
  { category: "Livestock", photo: photos.sheep, caption: "Sheep. Order live, or ask for mutton." },
  { category: "Livestock", photo: photos.cattle, caption: "Cattle for a buyer who needs the animal from the farm." },
  { category: "Livestock", photo: photos.goat, caption: "Goats. Live animals and goat meat are separate orders." },
  { category: "Livestock", photo: photos.tortoise, caption: "Tortoise. Ask what is available." },
  { category: "Fields", photo: photos.galleryFields, caption: "Fields that feed both the crop order and the gari." },
  { category: "Fields", photo: photos.heroFields, caption: "Cassava and maize in the same ground." },
  { category: "Fields", photo: photos.cassava, caption: "Cassava roots, ready to sell or to process." },
  { category: "Fields", photo: photos.maize, caption: "Maize for the house, a mill or a trader." },
  { category: "Fields", photo: photos.beans, caption: "Beans for the pot or the shop." },
  { category: "Processing", photo: photos.heroProcessing, caption: "Gari in the pan. Ask for the bag size you need." },
  { category: "Processing", photo: photos.journeyProcess, caption: "Where the roots are turned into food you can store." },
  { category: "Processing", photo: photos.gari, caption: "Gari, ready for the bowl or the shelf." },
  { category: "Processing", photo: photos.starch, caption: "Cassava starch for a kitchen or a bulk buyer." },
  { category: "Processing", photo: photos.journeyPack, caption: "Gari and starch, packed for the order you agree." },
  {
    category: "Farm work",
    photo: photos.galleryWork,
    caption: "Feeding goats. A picture of the work, not a portrait of a named person.",
  },
];

export const enquiryPage = {
  metaTitle: "Send an order enquiry",
  metaDescription:
    "Tell EDSAVIN CONSULT AND TRADING the product and the quantity. We confirm what is ready. Or open WhatsApp with the product already named. No payment here.",
  title: "Send the order. We confirm what is ready.",
  lede: "Name the product and the quantity. EDSAVIN CONSULT AND TRADING replies with availability, packing, and how to collect or pay. You can also open WhatsApp with the product already written.",
  privacyLink: "How we use what you send",
  sent: "Received. EDSAVIN CONSULT AND TRADING will reply on the phone or email you gave.",
  asideHeading: "Prefer a chat?",
  aside: "WhatsApp opens a message that already names the product. Use it if that is faster than the form. You still agree the order in the chat. Nothing is paid here.",
};

export const formCopy = {
  name: "Your name",
  email: "Email for the reply",
  phone: "Phone",
  phoneOptional: "if we should call",
  organisation: "Household or business",
  organisationOptional: "optional",
  product: "What you want",
  general: "General enquiry",
  quantity: "How much you need",
  quantityOptional: "optional",
  quantityHint: "Write the number, weight or bags in your own words. Fixed pack sizes are not published yet.",
  message: "Anything we should know",
  messageHint: "The day you need it, who it is for, and any question about handling, collection or a regular supply.",
  consent: "I have read how my details are used, and I agree they can be used to answer this order enquiry.",
  hint: "You do not pay on this form. The farm confirms what is ready, then you decide.",
  fax: "Fax",
  errors: {
    invalid: "Add your name, a real email, the product, and a message of at least a short sentence. Tick the consent box.",
    fast: "Please wait a moment, then send it again.",
    rate: "Too many messages just went from this connection. Wait a few minutes, or use WhatsApp.",
    config: "The enquiry inbox is not connected yet. Use WhatsApp, or try the form again after the farm connects the email.",
    send: "The message did not go through. Please try again, or use WhatsApp.",
  },
};

export const contact = {
  phoneDisplay: "Phone number",
  phoneTel: "",
  whatsappDisplay: "WhatsApp number",
  whatsappDigits: "0000000000",
  whatsappIsPlaceholder: true,
  email: "placeholder@example.com",
  emailIsPlaceholder: true,
  addressLines: ["Street or landmark", "Town and region", "Ghana"],
  mapNote: "Farm location, so buyers can find the pin",
  socials: [
    { name: "Facebook", href: "https://example.com" },
    { name: "Instagram", href: "https://example.com" },
    { name: "TikTok", href: "https://example.com" },
    { name: "YouTube", href: "https://example.com" },
  ],
};

export const contactPage = {
  metaTitle: "Call, WhatsApp or write",
  metaDescription:
    "Reach EDSAVIN CONSULT AND TRADING by phone, WhatsApp, email or a visit. Send an order enquiry if that is faster. Contact details are still being added.",
  title: "Talk to the farm.",
  lede: "Call, send a WhatsApp order, or use the enquiry form. The number, email and address are still being added. The form is ready now.",
  phoneHeading: "Phone",
  phoneBody: "For a buyer who would rather speak.",
  whatsappHeading: "WhatsApp",
  whatsappBody: "The button opens a message to the farm. The number itself is still being added, so check it before you rely on the chat.",
  emailHeading: "Email",
  emailBody: "This address is a stand-in. Order messages from the form go to the inbox the farm connects, which may not be this address yet.",
  addressHeading: "Where the farm is",
  socialHeading: "Social pages",
  socialBody: "The links are not real profiles yet.",
  socialNewTab: "placeholder, opens in a new tab",
  mapHeading: "Map",
  ctaHeading: "If you already know the product, send the enquiry.",
  ctaBody: "You do not need the phone number to start. Name what you want and the quantity.",
};

export const privacy = {
  metaTitle: "How your enquiry is used",
  metaDescription:
    "What EDSAVIN CONSULT AND TRADING does with the name, contact details and order message you send, and what happens if you use WhatsApp instead.",
  title: "Your details are for the reply, not for a list.",
  lede: "This notice says what happens to the name, phone, email and order message you send to EDSAVIN CONSULT AND TRADING. Please have it checked before the public launch.",
  sections: [
    {
      heading: "What you send",
      body: "The form takes your name, email, any phone number, any household or business name, the product, any note on quantity, and your message.",
    },
    {
      heading: "Why it is used",
      body: "Those details are used to answer your order enquiry and to keep a record of that conversation. They are not sold and they are not put on a public list.",
    },
    {
      heading: "Where the message goes",
      body: "The form emails the inbox the business has connected. If that inbox is not connected yet, the form says so. It does not pretend the message was delivered.",
    },
    {
      heading: "WhatsApp",
      body: "A WhatsApp button opens a chat with the product already named. This website does not keep a copy of that chat. WhatsApp handles it under its own terms.",
    },
  ],
  retentionHeading: "How long it is kept",
  retention: "How long enquiry messages are kept. They should stay only as long as needed to answer the order.",
  analyticsHeading: "Analytics",
  analytics: "Whether visit counting will be switched on. It stays off until a measurement ID is added.",
  cookiesHeading: "Cookies",
  cookies: "These pages do not set advertising cookies. If visit counting is switched on later, Google may set cookies to count visits.",
  rightsHeading: "Ask about your details",
  rightsBefore: "To ask what was received, or to ask for it to be deleted, use the",
  rightsLink: "contact page",
  rightsAfter: "The phone, email and address there are still being added.",
  legalHeading: "Still to add",
  legal: "Registered address, and any registration number.",
  dated: "Notice written in November 2026 for this website.",
};

export const footer = {
  note: "Order livestock, meat, crops, gari and starch from the farm. No payment on this website.",
  pages: "Pages",
  contact: "Contact",
  enquiry: "Enquiry / Order",
  privacy: "Privacy",
};

export const notFound = {
  title: "That page is not here.",
  body: "Use the home page to choose a product and send an order.",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About & Team" },
  { href: "/livestock", label: "Livestock" },
  { href: "/meat", label: "Meat" },
  { href: "/crops", label: "Crops" },
  { href: "/processing", label: "Processing (Gari & Starch)" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export const pages = [
  { href: "/", label: "Home", metaTitle: home.metaTitle, description: home.metaDescription },
  { href: "/about", label: "About & Team", metaTitle: about.metaTitle, description: about.metaDescription },
  { href: "/livestock", label: "Livestock", metaTitle: livestockPage.metaTitle, description: livestockPage.metaDescription },
  { href: "/meat", label: "Meat", metaTitle: meatPage.metaTitle, description: meatPage.metaDescription },
  { href: "/crops", label: "Crops", metaTitle: cropsPage.metaTitle, description: cropsPage.metaDescription },
  { href: "/processing", label: "Processing (Gari & Starch)", metaTitle: processingPage.metaTitle, description: processingPage.metaDescription },
  { href: "/gallery", label: "Gallery", metaTitle: galleryPage.metaTitle, description: galleryPage.metaDescription },
  { href: "/enquiry", label: "Enquiry / Order", metaTitle: enquiryPage.metaTitle, description: enquiryPage.metaDescription },
  { href: "/contact", label: "Contact", metaTitle: contactPage.metaTitle, description: contactPage.metaDescription },
  { href: "/privacy", label: "Privacy", metaTitle: privacy.metaTitle, description: privacy.metaDescription },
] as const;

export const clientChecklist: { item: string; where: string }[] = [
  { item: "How the farm started, in Mr Saaka's words", where: "about.storyGap" },
  { item: "Mr Saaka's short note and photograph", where: "about.team[0]" },
  { item: "Any other team name, role and photograph", where: "about.team[1]" },
  { item: "When each animal is ready, and how it is grouped for sale", where: "products livestock availability and pack" },
  { item: "Cuts, pack sizes and when meat is ready", where: "products meat availability and pack" },
  { item: "Extra cuts and volumes in the meat expansion", where: "meatPage.expansionGap" },
  { item: "Crop seasons and pack sizes", where: "products crops availability and pack" },
  { item: "Gari and starch bag sizes, and when they are ready", where: "products processing availability and pack" },
  { item: "This farm's own gari and starch timings and equipment", where: "processingPage.methodGap and journey notes" },
  { item: "Field location and harvest months", where: "journey notes" },
  { item: "How buyers pay", where: "ordering.payment" },
  { item: "Collection points and delivery areas", where: "ordering.delivery" },
  { item: "The farm's own photographs", where: "public/images and galleryPage.photoGap" },
  { item: "Phone number, then phoneTel if it should be tappable", where: "contact.phoneDisplay and contact.phoneTel" },
  { item: "WhatsApp digits, then set whatsappIsPlaceholder to false", where: "contact.whatsappDigits" },
  { item: "Public email, then set emailIsPlaceholder to false", where: "contact.email" },
  { item: "Street, town and region", where: "contact.addressLines" },
  { item: "Map pin", where: "contact.mapNote" },
  { item: "Real social profile URLs", where: "contact.socials" },
  { item: "How long enquiry messages are kept", where: "privacy.retention" },
  { item: "Whether visit counting should be on", where: "privacy.analytics and NEXT_PUBLIC_GA_MEASUREMENT_ID" },
  { item: "Registered address and any registration number", where: "privacy.legal" },
  { item: "Live website address", where: "NEXT_PUBLIC_SITE_URL" },
  { item: "Enquiry inbox", where: "ENQUIRY_TO_EMAIL" },
  { item: "From address plus Resend or SMTP", where: "ENQUIRY_FROM_EMAIL and RESEND_API_KEY or SMTP_*" },
];
