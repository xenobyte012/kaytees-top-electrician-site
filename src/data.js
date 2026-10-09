// src/data.js
import {
  Home,
  FileCheck,
  Wrench,
  Zap,
  Cable,
  Package,
  Settings,
  Lightbulb,
  RefreshCw,
  Award,
  Banknote,
  ShieldCheck,
  MapPin,
  Sun
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Partners", href: "#partners" },
  { label: "Gallery", href: "#gallery" },
  { label: "Areas", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  {
    title: "House Wiring",
    desc: "Complete wiring solutions for new builds, renovations and extensions — domestic, commercial and industrial. Every installation is done to standard, tested and certified for your safety.",
    Icon: Home,
  },
  {
    title: "Electrical COC",
    desc: "Test, correct and issue Electrical Certificates of Compliance (COC) for property sales and insurance. We make sure your property meets all legal electrical requirements.",
    Icon: FileCheck,
  },
  {
    title: "Fault Finding & Repairs",
    desc: "Fast, accurate fault finding and lasting repairs for tripping boards, dead circuits and power issues. We diagnose the root cause and fix it right the first time.",
    Icon: Wrench,
  },
  {
    title: "LV & MV Apparatus",
    desc: "Professional services for Low Voltage and Medium Voltage electrical apparatus and equipment. Installation, testing and maintenance for industrial and commercial clients.",
    Icon: Zap,
  },
  {
    title: "Cable Thumping",
    desc: "Safe and professional cable tapping and jointing for LV and MV networks, ensuring reliable power distribution with zero downtime for your home or business.",
    Icon: Cable,
  },
  {
    title: "Equipment Supply & Install",
    desc: "We supply, deliver and install quality electrical equipment — DB boards, geysers, stoves, plugs, switches and more. Quality products with professional installation.",
    Icon: Package,
  },
  {
    title: "Generator Installation",
    desc: "Installation and maintenance of backup generators so your home or business never goes dark. From small home units to large commercial standby systems.",
    Icon: Settings,
  },
  {
    title: "Energy Saving Systems",
    desc: "Installation of energy saving systems that cut your electricity bill and reduce your carbon footprint. Smart solutions for a greener, cheaper future.",
    Icon: Lightbulb,
  },
  {
    title: "Maintenance Contracts",
    desc: "Planned preventative maintenance for commercial and industrial clients across South Africa. Keep your electrical systems safe, compliant and running smoothly all year round.",
    Icon: RefreshCw,
  },
  {
    title: "Solar Panel Cleaning",
    desc: "Professional solar panel cleaning to remove dust, dirt and debris that reduce energy production. Keep your solar panels clean, improve sunlight absorption and help your system perform at its best.",
    Icon: Sun,
  },

];

export const WHY_US = [
  {
    Icon: Award,
    title: "10+ Years Experience",
    desc: "With over 10 years of hands-on experience in the electrical industry, our team has seen and solved it all — from complex industrial installations to everyday household repairs. You can trust our deep expertise on every job, no matter the size.",
    color: "text-amber-400 bg-amber-400/10 group-hover:bg-amber-400/20",
  },
  {
    Icon: Zap,
    title: "Fast Response",
    desc: "We respond quickly to callouts and emergencies across South Africa, minimizing your downtime. When you have a power problem, we treat it as a priority and get to you as fast as possible.",
    color: "text-amber-400 bg-amber-400/10 group-hover:bg-amber-400/20",
  },
  {
    Icon: Banknote,
    title: "Affordable Rates",
    desc: "Quality workmanship at prices everyone can afford — it's our mission. We believe every home and business deserves a safe, reliable electrical system without breaking the bank.",
    color: "text-amber-400 bg-amber-400/10 group-hover:bg-amber-400/20",
  },
  {
    Icon: ShieldCheck,
    title: "Guaranteed Work",
    desc: "All work is tested, compliant and backed by our commitment to quality. If something isn't right, we come back and make it right — that's our promise to every customer.",
    color: "text-amber-400 bg-amber-400/10 group-hover:bg-amber-400/20",
  },
  {
    Icon: MapPin,
    title: "Local Experts",
    desc: "Based in Rustenburg, we proudly serve homes and businesses across South Africa with fast, reliable service. Local knowledge, national reach — we bring expert electrical work to your doorstep.",
    color: "text-amber-400 bg-amber-400/10 group-hover:bg-amber-400/20",
  },
];

import hospital from "./img/hospital.jpeg";
import departmentImage from "./img/department.jpeg";
import rlm from "./img/Rustenburg-Local-Municipality.png";
export const PARTNERS = [
  {
    name: "Job Shimankana Tabane Hospital",
    image: hospital,
  },
  {
    name: "Mining Partner",
    image: departmentImage,
  },
  {
    name: "Rustenburg Local Municipality",
    image: rlm,
  },
];
export const AREAS = [
  "Rustenburg (HQ)",
  "Johannesburg",
  "Pretoria",
  "Durban",
  "Cape Town",
  "Gqeberha (PE)",
  "Bloemfontein",
  "Sandton",
  "Soweto",
  "Midrand",
  "Centurion",
  "Brits",
  "Swartruggens",
];



export const PHONE_DISPLAY = "073 939 5732";
export const PHONE_TEL = "tel:+27739395732";
export const WHATSAPP = "https://wa.me/27739395732";
export const EMAIL = "Thabo@kayteestopelect.co.za";

// ─── EmailJS config (replace with your own IDs from dashboard.emailjs.com) ─ ──
export const EMAILJS_SERVICE_ID = "service_nqmw07v";
export const EMAILJS_TEMPLATE_ID = "template_jczadyr";
export const EMAILJS_PUBLIC_KEY = "79TGjqBEdjmngEC_O";
