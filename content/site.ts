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

export const site = {
  /** Set to false once the draft note at the top of every page should go. */
  showDraftBanner: true,
  draftBanner:
    "Draft website. Anything tagged [PLACEHOLDER] is waiting for the client: the About story, team, product details, pack sizes, seasons, photos, phone, WhatsApp, email, address and social links.",
} as const;

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
  /** Shown on the card. Rendered as a placeholder. */
  summary: string;
  /** Shown when the card is opened. Rendered as a placeholder. */
  details: string;
  /** Season for crops, availability for everything else. Placeholder. */
  availability: string;
  /** Pack size or how a sale is grouped. Placeholder. */
  pack: string;
};

export const products: Product[] = [
  {
    id: "guinea-fowl",
    name: "Guinea fowl",
    line: "livestock",
    photo: photos.guineaFowl,
    summary: "Breed, age at sale, and whether birds are sold live have not been confirmed yet.",
    details: "A description of the guinea fowl has not been supplied yet. It will cover how the birds are reared and what a buyer should expect.",
    availability: "Availability has not been confirmed yet.",
    pack: "How birds are grouped for sale has not been confirmed yet.",
  },
  {
    id: "duck",
    name: "Duck",
    line: "livestock",
    photo: photos.duck,
    summary: "Breed and whether ducks are sold live have not been confirmed yet.",
    details: "A description of the ducks has not been supplied yet. It will cover how they are kept and what a buyer should expect.",
    availability: "Availability has not been confirmed yet.",
    pack: "How ducks are grouped for sale has not been confirmed yet.",
  },
  {
    id: "rabbit",
    name: "Rabbit",
    line: "livestock",
    photo: photos.rabbit,
    summary: "Breed and whether rabbits are sold live have not been confirmed yet.",
    details: "A description of the rabbits has not been supplied yet. It will cover how they are kept and what a buyer should expect.",
    availability: "Availability has not been confirmed yet.",
    pack: "How rabbits are grouped for sale has not been confirmed yet.",
  },
  {
    id: "sheep",
    name: "Sheep",
    line: "livestock",
    photo: photos.sheep,
    summary: "Breed and whether sheep are sold live have not been confirmed yet.",
    details: "A description of the sheep has not been supplied yet. It will cover how they are kept and what a buyer should expect.",
    availability: "Availability has not been confirmed yet.",
    pack: "How sheep are grouped for sale has not been confirmed yet.",
  },
  {
    id: "cattle",
    name: "Cattle",
    line: "livestock",
    photo: photos.cattle,
    summary: "Breed and whether cattle are sold live have not been confirmed yet.",
    details: "A description of the cattle has not been supplied yet. It will cover how they are kept and what a buyer should expect.",
    availability: "Availability has not been confirmed yet.",
    pack: "How cattle are grouped for sale has not been confirmed yet.",
  },
  {
    id: "goat",
    name: "Goat",
    line: "livestock",
    photo: photos.goat,
    summary: "Breed and whether goats are sold live have not been confirmed yet.",
    details: "A description of the goats has not been supplied yet. It will cover how they are kept and what a buyer should expect. Goat meat is listed separately on the Meat page.",
    availability: "Availability has not been confirmed yet.",
    pack: "How goats are grouped for sale has not been confirmed yet.",
  },
  {
    id: "tortoise",
    name: "Tortoise",
    line: "livestock",
    photo: photos.tortoise,
    summary: "Species and how tortoises are offered have not been confirmed yet.",
    details: "A description of the tortoises has not been supplied yet. It will cover how they are kept and what a buyer should expect.",
    availability: "Availability has not been confirmed yet.",
    pack: "How tortoises are grouped for sale has not been confirmed yet.",
  },
  {
    id: "goat-meat",
    name: "Goat meat",
    line: "meat",
    photo: photos.goatMeat,
    summary: "Cuts and how goat meat is prepared for sale have not been confirmed yet.",
    details: "A description of the goat meat has not been supplied yet. It will cover which cuts are offered and how an order is handled.",
    availability: "Availability has not been confirmed yet.",
    pack: "Pack size has not been confirmed yet.",
  },
  {
    id: "beef",
    name: "Beef",
    line: "meat",
    photo: photos.beef,
    summary: "Cuts and how beef is prepared for sale have not been confirmed yet.",
    details: "A description of the beef has not been supplied yet. It will cover which cuts are offered and how an order is handled.",
    availability: "Availability has not been confirmed yet.",
    pack: "Pack size has not been confirmed yet.",
  },
  {
    id: "mutton",
    name: "Sheep meat (mutton)",
    line: "meat",
    photo: photos.mutton,
    summary: "Cuts and how mutton is prepared for sale have not been confirmed yet.",
    details: "A description of the sheep meat has not been supplied yet. It will cover which cuts are offered and how an order is handled.",
    availability: "Availability has not been confirmed yet.",
    pack: "Pack size has not been confirmed yet.",
  },
  {
    id: "cassava",
    name: "Cassava",
    line: "crops",
    photo: photos.cassava,
    summary: "Whether cassava is sold as fresh roots, and in what form, has not been confirmed yet.",
    details: "A description of the cassava crop has not been supplied yet. Cassava is also processed into gari and starch.",
    availability: "Season has not been confirmed yet.",
    pack: "Pack size has not been confirmed yet.",
  },
  {
    id: "maize",
    name: "Maize",
    line: "crops",
    photo: photos.maize,
    summary: "Whether maize is sold fresh or dried has not been confirmed yet.",
    details: "A description of the maize crop has not been supplied yet. It will cover the form it is sold in and what a buyer should expect.",
    availability: "Season has not been confirmed yet.",
    pack: "Pack size has not been confirmed yet.",
  },
  {
    id: "beans",
    name: "Beans",
    line: "crops",
    photo: photos.beans,
    summary: "The variety of beans, and whether they are sold dried, has not been confirmed yet.",
    details: "A description of the beans has not been supplied yet. It will cover the variety and what a buyer should expect.",
    availability: "Season has not been confirmed yet.",
    pack: "Pack size has not been confirmed yet.",
  },
  {
    id: "gari",
    name: "Gari",
    line: "processing",
    photo: photos.gari,
    summary: "Grade, colour and texture of the gari have not been confirmed yet.",
    details: "A description of the gari has not been supplied yet. It will cover how this farm's gari is made and what a buyer receives.",
    availability: "Availability has not been confirmed yet.",
    pack: "Pack size has not been confirmed yet.",
  },
  {
    id: "starch",
    name: "Starch",
    line: "processing",
    photo: photos.starch,
    summary: "How the cassava starch is finished and packed has not been confirmed yet.",
    details: "A description of the starch has not been supplied yet. It will cover how this farm's starch is made and what a buyer receives.",
    availability: "Availability has not been confirmed yet.",
    pack: "Pack size has not been confirmed yet.",
  },
];

export const lines: {
  id: LineId;
  title: string;
  navLabel: string;
  href: string;
  photo: Photo;
  text: string;
}[] = [
  {
    id: "livestock",
    title: "Livestock",
    navLabel: "Livestock",
    href: "/livestock",
    photo: photos.heroLivestock,
    text: "Guinea fowl, duck, rabbit, sheep, cattle, goat and tortoise.",
  },
  {
    id: "meat",
    title: "Meat",
    navLabel: "Meat",
    href: "/meat",
    photo: photos.goatMeat,
    text: "Goat meat, beef and sheep meat (mutton). This line is expanding.",
  },
  {
    id: "crops",
    title: "Crops",
    navLabel: "Crops",
    href: "/crops",
    photo: photos.heroFields,
    text: "Cassava, maize and beans. Seasons will be confirmed by the farm.",
  },
  {
    id: "processing",
    title: "Processing (Gari & Starch)",
    navLabel: "Processing",
    href: "/processing",
    photo: photos.heroProcessing,
    text: "Cassava processed into gari and starch.",
  },
];

export function productsIn(line: LineId) {
  return products.filter((product) => product.line === line);
}

export function findProduct(id: string) {
  return products.find((product) => product.id === id);
}

export const home = {
  headline: "Livestock, meat, crops, gari and starch.",
  lead: `${COMPANY} rears guinea fowl, duck, rabbit, sheep, cattle, goat and tortoise, sells goat meat, beef and mutton, grows cassava, maize and beans, and processes cassava into gari and starch.`,
  intro: "A short introduction in the owner's words will go here: who the farm sells to, and what a buyer should know first.",
};

export const about = {
  story: [
    "The story of how the farm began will go here, in the owner's words, including where it sits in Ghana.",
    "This is where the livestock, meat, crops and cassava processing can be tied together.",
    "This is where buyers, distributors and partners will read what the business wants to be known for. No dates, awards or addresses have been supplied yet.",
  ],
  mission: "A one-sentence mission has not been supplied yet.",
  values: [
    { title: "Care", text: "A value about how the animals and the land are looked after. Suggested only." },
    { title: "Honest trade", text: "A value about clear orders and keeping one's word. Suggested only." },
    { title: "Useful food", text: "A value about meat, crops, gari and starch that buyers can trace to the farm. Suggested only." },
    { title: "A welcome", text: "A value about how buyers and partners are received. Suggested only." },
  ],
  team: [
    {
      name: "Mr Saaka",
      role: "Owner",
      bio: "A short biography has not been supplied yet. A photograph has not been supplied yet either.",
    },
    {
      name: "",
      role: "",
      bio: "Name, role and biography of a team member have not been supplied yet.",
    },
    {
      name: "",
      role: "",
      bio: "Name, role and biography of a team member have not been supplied yet.",
    },
  ],
};

export const ordering = {
  steps: [
    "Choose a product and say what you need.",
    "Send the enquiry form, or open WhatsApp. The product name is already written in the WhatsApp message.",
    "The farm confirms what is available and how the order will be arranged. This website does not take payment.",
  ],
  payment: "How buyers pay has not been confirmed yet.",
  delivery: "Delivery and collection areas have not been confirmed yet.",
};

export const meatPage = {
  expansion:
    "Meat production — goat meat, beef and sheep meat (mutton) — is a part of the business that is now expanding. What that expansion includes has not been confirmed yet.",
};

export const processingPage = {
  intro:
    "Cassava from the farm is processed into two products: gari and starch. The steps below are the usual path. This farm's own timings, equipment and method have not been confirmed yet.",
  gariSteps: ["Peel and wash the roots", "Grate", "Ferment and press", "Sift and roast into gari"],
  starchSteps: ["Peel and wash the roots", "Grate", "Wash the pulp and let the starch settle", "Dry the starch"],
  methodNote: "The farm's own method, timings and equipment have not been confirmed yet.",
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
    title: "In the field",
    text: "Cassava is grown on the farm, alongside maize and beans.",
    note: "Where the fields are, and the length of a season, have not been confirmed yet.",
    photo: photos.journeyField,
  },
  {
    id: "harvest",
    kicker: "02",
    title: "Harvest",
    text: "Roots are lifted when the crop is ready, and come out of the ground to be processed or sold.",
    note: "Harvest months have not been confirmed yet.",
    photo: photos.journeyHarvest,
  },
  {
    id: "process",
    kicker: "03",
    title: "Gari and starch",
    text: "Some of the cassava is roasted into gari. Some is washed and settled into starch.",
    note: "This farm's own method and equipment have not been confirmed yet.",
    photo: photos.journeyProcess,
  },
  {
    id: "pack",
    kicker: "04",
    title: "Packed",
    text: "Gari and starch are packed for buyers. Labels can carry the same logo as this website.",
    note: "Pack sizes and label wording have not been confirmed yet.",
    photo: photos.journeyPack,
  },
  {
    id: "buyer",
    kicker: "05",
    title: "To the buyer",
    text: "You send an enquiry or a WhatsApp message. The farm confirms the order. There is no shop and no payment on this website.",
    note: "Delivery, collection and payment have not been confirmed yet.",
    photo: photos.gari,
  },
];

export type GalleryCategory = "Livestock" | "Fields" | "Processing" | "Farm work";

export const galleryCategories: GalleryCategory[] = ["Livestock", "Fields", "Processing", "Farm work"];

export const gallery: { category: GalleryCategory; photo: Photo; caption: string }[] = [
  { category: "Livestock", photo: photos.guineaFowl, caption: "Guinea fowl. Placeholder photograph." },
  { category: "Livestock", photo: photos.duck, caption: "Ducks. Placeholder photograph." },
  { category: "Livestock", photo: photos.rabbit, caption: "Rabbits. Placeholder photograph." },
  { category: "Livestock", photo: photos.sheep, caption: "Sheep. Placeholder photograph." },
  { category: "Livestock", photo: photos.cattle, caption: "Cattle. Placeholder photograph." },
  { category: "Livestock", photo: photos.goat, caption: "Goats. Placeholder photograph." },
  { category: "Livestock", photo: photos.tortoise, caption: "Tortoise. Placeholder photograph." },
  { category: "Fields", photo: photos.galleryFields, caption: "Fields of maize and cassava. Placeholder photograph." },
  { category: "Fields", photo: photos.heroFields, caption: "Cassava and maize in red soil. Placeholder photograph." },
  { category: "Fields", photo: photos.cassava, caption: "Harvested cassava roots. Placeholder photograph." },
  { category: "Fields", photo: photos.maize, caption: "Maize. Placeholder photograph." },
  { category: "Fields", photo: photos.beans, caption: "Beans. Placeholder photograph." },
  { category: "Processing", photo: photos.heroProcessing, caption: "Roasting gari. Placeholder photograph." },
  { category: "Processing", photo: photos.journeyProcess, caption: "A processing shed. Placeholder photograph." },
  { category: "Processing", photo: photos.gari, caption: "Gari. Placeholder photograph." },
  { category: "Processing", photo: photos.starch, caption: "Cassava starch. Placeholder photograph." },
  { category: "Processing", photo: photos.journeyPack, caption: "Gari and starch packed in plain bags. Placeholder photograph." },
  {
    category: "Farm work",
    photo: photos.galleryWork,
    caption: "Feeding goats. Placeholder photograph of farm work. It is not a portrait of a named person. Team portraits have not been supplied yet.",
  },
];

export const contact = {
  phoneDisplay: "Phone number not supplied yet",
  /** Digits only, with country code, once known. Empty keeps the phone as text, not a tel: link. */
  phoneTel: "",
  whatsappDisplay: "WhatsApp number not supplied yet",
  /**
   * Digits only, country code included, no plus sign.
   * 0000000000 is an obvious stand-in. Replace it, then set whatsappIsPlaceholder to false.
   */
  whatsappDigits: "0000000000",
  whatsappIsPlaceholder: true,
  /** Shown on the contact page. placeholder@example.com is not a real inbox. */
  email: "placeholder@example.com",
  emailIsPlaceholder: true,
  addressLines: ["Street or landmark not supplied yet", "Town and region not supplied yet", "Ghana"],
  mapNote: "The map pin will be added when the farm location is confirmed.",
  socials: [
    { name: "Facebook", href: "https://example.com" },
    { name: "Instagram", href: "https://example.com" },
    { name: "TikTok", href: "https://example.com" },
    { name: "YouTube", href: "https://example.com" },
  ],
};

export const privacy = {
  retention: "How long enquiry messages are kept has not been confirmed yet. Keep them only as long as needed to answer the enquiry and any order that follows.",
  analytics:
    "Google Analytics is wired but switched off until a measurement ID is added in the site settings. Confirm whether it should be turned on.",
  legal: "Registered address, and any registration number, have not been supplied yet.",
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
  {
    href: "/",
    label: "Home",
    description:
      "EDSAVIN CONSULT AND TRADING is a Ghanaian farm. Livestock, goat meat, beef, mutton, cassava, maize, beans, gari and starch. Send an enquiry or a WhatsApp message. No online shop.",
  },
  {
    href: "/about",
    label: "About & Team",
    description: "The story, mission, values and team of EDSAVIN CONSULT AND TRADING. Story and team details are waiting for the farm.",
  },
  {
    href: "/livestock",
    label: "Livestock",
    description: "Guinea fowl, duck, rabbit, sheep, cattle, goat and tortoise reared by EDSAVIN CONSULT AND TRADING. Open a card and send an enquiry.",
  },
  {
    href: "/meat",
    label: "Meat",
    description: "Goat meat, beef and sheep meat (mutton) from EDSAVIN CONSULT AND TRADING, including a note on the expansion. Enquire to order. No checkout.",
  },
  {
    href: "/crops",
    label: "Crops",
    description: "Cassava, maize and beans from EDSAVIN CONSULT AND TRADING. Seasons and pack sizes are shown as placeholders until the farm confirms them.",
  },
  {
    href: "/processing",
    label: "Processing (Gari & Starch)",
    description: "How cassava becomes gari and starch at EDSAVIN CONSULT AND TRADING, with pack sizes to confirm and a way to enquire.",
  },
  {
    href: "/gallery",
    label: "Gallery",
    description: "Placeholder photographs of livestock, fields, cassava processing and farm work for EDSAVIN CONSULT AND TRADING.",
  },
  {
    href: "/enquiry",
    label: "Enquiry / Order",
    description: "Send an enquiry or order request to EDSAVIN CONSULT AND TRADING, or open WhatsApp with the product already named. No payment.",
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Phone, WhatsApp, email, address, map and social links for EDSAVIN CONSULT AND TRADING. Contact details are still placeholders.",
  },
  {
    href: "/privacy",
    label: "Privacy",
    description: "How EDSAVIN CONSULT AND TRADING uses details sent through the enquiry form, and how WhatsApp messages are handled.",
  },
] as const;

/**
 * Everything the client still needs to supply. The README points here.
 * Keep this list in step with the fields above.
 */
export const clientChecklist: { item: string; where: string }[] = [
  { item: "Home introduction in the owner's words", where: "home.intro" },
  { item: "About story (three short paragraphs)", where: "about.story" },
  { item: "Mission", where: "about.mission" },
  { item: "Values — the four cards are suggestions only", where: "about.values" },
  { item: "Mr Saaka's biography", where: "about.team[0].bio" },
  { item: "Mr Saaka's photograph (the card is an empty frame until then)", where: "about.team[0]" },
  { item: "Other team members: names, roles, biographies and photographs", where: "about.team" },
  { item: "Livestock details, availability and how each animal is sold: guinea fowl, duck, rabbit, sheep, cattle, goat, tortoise", where: "products where line is livestock" },
  { item: "Meat details, cuts, availability and pack sizes: goat meat, beef, sheep meat (mutton)", where: "products where line is meat" },
  { item: "What the meat expansion includes", where: "meatPage.expansion" },
  { item: "How buyers pay", where: "ordering.payment" },
  { item: "Delivery and collection areas", where: "ordering.delivery" },
  { item: "Crop descriptions, seasons and pack sizes: cassava, maize, beans", where: "products where line is crops" },
  { item: "Gari description, pack sizes and this farm's method", where: "products id gari, and processingPage.methodNote" },
  { item: "Starch description, pack sizes and this farm's method", where: "products id starch, and processingPage.methodNote" },
  { item: "Journey notes: field location, harvest months, method, pack sizes", where: "journey" },
  { item: "All photographs in public/images, and their alt text in photos", where: "public/images and photos" },
  { item: "Named team portraits for the gallery (farm-work photo is not a named person)", where: "gallery" },
  { item: "Phone number, and phoneTel once it should be tappable", where: "contact.phoneDisplay and contact.phoneTel" },
  { item: "WhatsApp number (digits, country code, no plus). Then set whatsappIsPlaceholder to false", where: "contact.whatsappDigits" },
  { item: "Public email address shown on the site. Then set emailIsPlaceholder to false", where: "contact.email" },
  { item: "Street, town and region", where: "contact.addressLines" },
  { item: "Map location", where: "contact.mapNote" },
  { item: "Real social profile URLs (Facebook, Instagram, TikTok, YouTube)", where: "contact.socials" },
  { item: "How long enquiry messages are kept", where: "privacy.retention" },
  { item: "Whether Google Analytics should be switched on", where: "privacy.analytics and NEXT_PUBLIC_GA_MEASUREMENT_ID" },
  { item: "Registered address and any registration number", where: "privacy.legal" },
  { item: "The live website address", where: "environment variable NEXT_PUBLIC_SITE_URL" },
  { item: "Inbox that receives enquiry forms", where: "environment variable ENQUIRY_TO_EMAIL" },
  { item: "From address, plus Resend or SMTP, so the form can actually send", where: "ENQUIRY_FROM_EMAIL and RESEND_API_KEY or SMTP_*" },
  { item: "Optional Google Search Console verification code", where: "NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION" },
  { item: "Hide the draft banner when the site should no longer say it is a draft", where: "site.showDraftBanner" },
];
