export const company = {
  name: "Al Sanaya Technical Equipment L.L.C",
  shortName: "Al Sanaya",
  tagline: "Engineering Power. Delivering Trust.",
  blurb:
    "Trading and contracting partner for the supply, testing & commissioning of electrical and mechanical equipment to oil & gas, utilities and construction across the GCC.",
  yearsExperience: 16,
  branches: 5,
  personnel: 50,
  brands: ["Linkk", "Megaduct"],
  email: "info@sanayate.com",
  primaryPhone: "+971-2 674 1355",
};

export const offices = [
  {
    name: "Abu Dhabi — Main Office",
    poBox: "P.O. Box 46686",
    country: "United Arab Emirates",
    landmark: "Baynunah Tower, Office #77",
    tel: "+971-2 674 1355",
    fax: "+971-2 674 1388",
    email: "info@sanayate.com",
  },
  {
    name: "Dubai Branch",
    poBox: "P.O. Box 46686",
    country: "United Arab Emirates",
    landmark: "Al Garhoud Medical Fitness Center",
    tel: "+971-4 320 73 20",
    email: "info@sanayate.com",
  },
  {
    name: "Lebanon",
    poBox: "P.O. Box 14-5426",
    country: "Beirut, Lebanon",
    tel: "+961-1 366286",
    fax: "+961-1 366285",
    email: "bdm.leb@sanayate.com",
  },
  {
    name: "Jordan",
    country: "Amman, Jordan",
    landmark:
      "110, 1st Floor, Adil Al Qasim Center, Jabel Al Husein",
    tel: "+962 (06) 563 9233",
    fax: "+962 (06) 563 9234",
    email: "gm@sanayate.com",
  },
];

export type Product = {
  name: string;
  image: string;
};

export const products: Product[] = [
  { name: "End Feed Unit", image: "/images/pro-end-feed-pic.jpg" },
  { name: "Plug-in Unit", image: "/images/pro-plugin-unit-pic.jpg" },
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
  { name: "Marina 101", location: "Dubai, UAE", image: "/images/Marina-101.jpg" },
  { name: "Moda Mall", location: "Bahrain", image: "/images/Moda-Mall-Bahrain.jpg" },
  { name: "W Hotel Amman", location: "Jordan", image: "/images/W-Hotel-Amman-Jordan.jpg" },
  { name: "Rotana", location: "Yemen / Syria", image: "/images/Rotana-yemen-Syria.jpg" },
  { name: "Park Inn Hotel", location: "KSA", image: "/images/Park-inn-hotel-KSA.jpg" },
  { name: "Fujairah Tower", location: "UAE", image: "/images/Fujairah-Tower.jpg" },
  { name: "Escan Tower", location: "UAE", image: "/images/Escan-Tower.jpg" },
  { name: "Bay Central Tower", location: "Dubai, UAE", image: "/images/Bay-Central-Tower-Dubai.jpg" },
  { name: "Atria", location: "Dubai, UAE", image: "/images/Atria.jpg" },
  { name: "Al Thuraya", location: "Qatar", image: "/images/Al-Thuraya-Qatar.jpg" },
  { name: "Al Brooq Tower", location: "Qatar", image: "/images/Al-Brooq-Tower-Qatar.jpg" },
  { name: "Al Batha Tower", location: "UAE", image: "/images/Al-Batha-Tower.jpg" },
  { name: "Al Bateen Tower", location: "UAE", image: "/images/Al-Bateen-Tower.jpg" },
  { name: "Al Ain Ahlia", location: "Dubai, UAE", image: "/images/Al-Ain-Ahlia-Dubai.jpg" },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];
