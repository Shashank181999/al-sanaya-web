export const company = {
  name: "Al Sanaya Technical Equipment L.L.C",
  shortName: "Al Sanaya",
  tagline: "Engineering Power. Delivering Trust.",
  blurb:
    "Trading and contracting partner for the supply, testing & commissioning of electrical and mechanical equipment to oil & gas, utilities and construction across the GCC and the wider MENA region.",
  yearsExperience: 20,
  branches: 1,
  brands: ["Linkk", "Megaduct"],
  email: "info@sanayate.com",
  primaryPhone: "+971 4 835 2303",
  whatsapp: "XXXXXXXXXXXX",
};

export type Office = {
  name: string;
  poBox?: string;
  country: string;
  landmark?: string;
  tel?: string;
  email?: string;
};

export const offices: Office[] = [
  {
    name: "Dubai",
    poBox: "46686",
    country: "United Arab Emirates",
    landmark: "Al Garhoud Medical Fitness Center",
    tel: "+971 4 835 2303",
    email: "info@sanayate.com",
  },
];

export type Catalog = {
  name: string;
  tagline: string;
  overview: string;
  file: string;
  cover: string;
};

export const catalogs: Catalog[] = [
  {
    name: "LMC Series Bus Bar System",
    tagline: "Sandwich-type busduct · 2025 cross-section",
    overview:
      "The flagship Megaduct sandwich-type busduct platform — totally enclosed, naturally cooled, low-impedance design with copper or aluminium conductors. Engineered for high-rise commercial towers, hospitals and industrial distribution.",
    file: "/files/Megaduct-LMC-Series-Busbar-Catalog.pdf",
    cover: "/images/catalogs/Megaduct-LMC-Series-Busbar-Catalog.jpg",
  },
  {
    name: "P1 Series Bus Bar System",
    tagline: "Copper sandwich busduct trunking",
    overview:
      "Copper-conductor (100% IACS) sandwich busduct, KEMA / ASTA / UL tested to IEC 61439-1 & 61439-6. Fire-retardant per IEC 60331, IP40–IP66 indoor and IP66 outdoor, with verified temperature rise at 50°C ambient.",
    file: "/files/Megaduct-P1-Series-Busbar-Catalog.pdf",
    cover: "/images/catalogs/Megaduct-P1-Series-Busbar-Catalog.jpg",
  },
  {
    name: "Sentinel Data Center Bus Bar System",
    tagline: "Mission-critical power distribution",
    overview:
      "Dedicated busduct platform for data centre white space and back-of-house — high-density tap-offs, dual-redundant feeds and modular plug-in units engineered for 24/7 uptime, hot-swap maintenance and tightly managed cable rooms.",
    file: "/files/Megaduct-Sentinel-Data-Center-Busbar-Catalog.pdf",
    cover: "/images/catalogs/Megaduct-Sentinel-Data-Center-Busbar-Catalog.jpg",
  },
  {
    name: "Cast Resin Bus Bar System",
    tagline: "Encapsulated, fire-rated, IP68",
    overview:
      "Cast resin–insulated busbar for the most demanding environments — fire integrity per IEC 60331-21, IP68 ingress protection, IK10 mechanical impact and full EMC compliance. Ideal for transformer rooms, generator runs and outdoor main feeders.",
    file: "/files/Megaduct-Cast-Resin-Busbar-Catalog.pdf",
    cover: "/images/catalogs/Megaduct-Cast-Resin-Busbar-Catalog.jpg",
  },
];

export type Product = {
  name: string;
  image: string;
};

export const products: Product[] = [
  { name: "Edgewise Elbow", image: "/images/proL-Edgewise-Elbow.jpg" },
  { name: "End Feed Cable Box", image: "/images/proL-End-Feed-Cable-Box.jpg" },
  { name: "Feeder Plug-in", image: "/images/proL-Feeder-Plug-in.jpg" },
  { name: "Flange End", image: "/images/proL-Flange-End.jpg" },
  { name: "Flange End with Elbow", image: "/images/proL-Flange-End-with-Elbow.jpg" },
  { name: "Flange End with Elbow II", image: "/images/proL-Flange-End-with-Elbow2.jpg" },
  { name: "Flatwise Elbow", image: "/images/proL-Flatwise-Elbow.jpg" },
  { name: "Horizontal Clip", image: "/images/proL-Horizontal-Clip.jpg" },
  { name: "Joint Sets", image: "/images/proL-Joint-Sets.jpg" },
  { name: "Offset Elbow", image: "/images/proL-Offset-Elbow.jpg" },
  { name: "Offset Elbow with Degree", image: "/images/proL-Offset-Elbow-with-Degree.jpg" },
  { name: "Tap-Off Unit", image: "/images/proL-Tap-Off-Unit.jpg" },
  { name: "Tee Elbow", image: "/images/proL-Tee-Elbow.jpg" },
  { name: "Transposition Unit", image: "/images/proL-Transposition-Unit.jpg" },
  { name: "Vertical Hanger", image: "/images/proL-Vertical-Hanger.jpg" },
];

export type Project = {
  name: string;
  location: string;
  image: string;
};

export const projects: Project[] = [
  { name: "Al Ain Ahlia", location: "UAE", image: "/images/projects/al-ain-ahlia.webp" },
  { name: "Al Bateen Tower", location: "UAE", image: "/images/projects/al-bateen-tower.webp" },
  { name: "Al Batha Tower", location: "UAE", image: "/images/projects/al-batha-tower.webp" },
  { name: "Al Brooq", location: "Qatar", image: "/images/projects/al-brooq.webp" },
  { name: "Al Ezzel Power Plant", location: "Bahrain", image: "/images/projects/al-ezzel-power-plant.webp" },
  { name: "Al Thuraya", location: "Qatar", image: "/images/projects/al-thuraya.webp" },
  { name: "Anti Doping Lab", location: "Qatar", image: "/images/projects/anti-doping-lab.webp" },
  { name: "Atria", location: "UAE", image: "/images/projects/atria.webp" },
  { name: "Avanti Tower", location: "UAE", image: "/images/projects/avanti-tower.webp" },
  { name: "Bay Central Towers", location: "UAE", image: "/images/projects/bay-central-towers.webp" },
  { name: "Elbrus Tower", location: "UAE", image: "/images/projects/elbrus-tower.webp" },
  { name: "Elitz", location: "UAE", image: "/images/projects/elitz.webp" },
  { name: "Escan Tower", location: "UAE", image: "/images/projects/escan-tower.webp" },
  { name: "Fancy Rose", location: "UAE", image: "/images/projects/fancy-rose.webp" },
  { name: "Fujairah Tower", location: "UAE", image: "/images/projects/fujairah-tower.webp" },
  { name: "J-One Tower", location: "UAE", image: "/images/projects/j-one-tower.webp" },
  { name: "Levanto", location: "UAE", image: "/images/projects/levanto.webp" },
  { name: "Luminar Tower", location: "UAE", image: "/images/projects/luminar-tower.webp" },
  { name: "Marina 101", location: "UAE", image: "/images/projects/marina-101.webp" },
  { name: "MBL Signature", location: "UAE", image: "/images/projects/mbl-signature.webp" },
  { name: "Millennium Hotel Expansion", location: "UAE", image: "/images/projects/millennium-hotel-expansion.webp" },
  { name: "Moda Mall", location: "Bahrain", image: "/images/projects/moda-mall.webp" },
  { name: "Moda Mall Renovation", location: "Bahrain", image: "/images/projects/moda-mall-renovation.webp" },
  { name: "Mohammad Bin Rashed Library", location: "UAE", image: "/images/projects/mohammad-bin-rashed-library.webp" },
  { name: "My Tower", location: "UAE", image: "/images/projects/my-tower.webp" },
  { name: "National Hospital", location: "KSA", image: "/images/projects/national-hospital.webp" },
  { name: "New Deira Fish Market", location: "UAE", image: "/images/projects/new-deira-fish-market.webp" },
  { name: "OZone Residence", location: "UAE", image: "/images/projects/ozone-residence.webp" },
  { name: "Rotana Yasmeen", location: "Syria", image: "/images/projects/rotana-yasmeen.webp" },
  { name: "Safeer Tower", location: "UAE", image: "/images/projects/safeer-tower.webp" },
  { name: "Siraj Tower", location: "UAE", image: "/images/projects/siraj-tower.webp" },
  { name: "Sky Hills Residences", location: "UAE", image: "/images/projects/sky-hills-residences.webp" },
  { name: "SKYZ", location: "UAE", image: "/images/projects/skyz.webp" },
  { name: "The Address Hotel", location: "UAE", image: "/images/projects/the-address-hotel.webp" },
  { name: "The Society House", location: "UAE", image: "/images/projects/the-society-house.webp" },
  { name: "Town Square", location: "UAE", image: "/images/projects/town-square.webp" },
  { name: "Tuscan Residence", location: "UAE", image: "/images/projects/tuscan-residence.webp" },
  { name: "Verde", location: "UAE", image: "/images/projects/verde.webp" },
  { name: "W Hotel", location: "Jordan", image: "/images/projects/w-hotel.webp" },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];
