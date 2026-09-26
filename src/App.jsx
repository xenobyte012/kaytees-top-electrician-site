import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Send,
  ArrowRight,
  Lightbulb,
  Zap,
  CheckCircle,
  FileCheck,
  Wrench,
  Package,
  Settings,
  Banknote,
  ShieldCheck,
  Target,
  Rocket,
  Gem,
  Star,
  Home,
  RefreshCw,
  Building2,
  Users,
} from "lucide-react";

/* ============================================================
   KAYTEES TOP ELECTRICIAN — One-Page Site
   Stack: React + Tailwind CSS
   Brand colours: black bg, amber/orange, cyan
   ============================================================ */

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Partners", href: "#partners" },
  { label: "Gallery", href: "#gallery" },
  { label: "Areas", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    title: "House Wiring",
    desc: "Complete wiring solutions for new builds, renovations and extensions — domestic, commercial and industrial.",
    icon: <Home className="w-7 h-7" />,
  },
  {
    title: "Electrical COC",
    desc: "Test, correct and issue Electrical Certificates of Compliance (COC) for property sales and insurance.",
    icon: <FileCheck className="w-7 h-7" />,
  },
  {
    title: "Fault Finding & Repairs",
    desc: "Fast, accurate fault finding and lasting repairs for tripping boards, dead circuits and power issues.",
    icon: <Wrench className="w-7 h-7" />,
  },
  {
    title: "LV & MV Apparatus",
    desc: "Professional services for Low Voltage and Medium Voltage electrical apparatus and equipment.",
    icon: <Zap className="w-7 h-7" />,
  },
  {
    title: "Equipment Supply & Install",
    desc: "We supply, deliver and install quality electrical equipment — DB boards, geysers, stoves and more.",
    icon: <Package className="w-7 h-7" />,
  },
  {
    title: "Generator Installation",
    desc: "Installation and maintenance of backup generators so your home or business never goes dark.",
    icon: <Settings className="w-7 h-7" />,
  },
  {
    title: "Energy Saving Systems",
    desc: "Installation of energy saving systems that cut your electricity bill and reduce your carbon footprint.",
    icon: <Lightbulb className="w-7 h-7" />,
  },
  {
    title: "Maintenance Contracts",
    desc: "Planned preventative maintenance for commercial and industrial clients across Rustenburg and surrounds.",
    icon: <RefreshCw className="w-7 h-7" />,
  },
];

const WHY_US = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Fast Response",
    desc: "We respond quickly to callouts and emergencies in Rustenburg, minimizing your downtime.",
    color: "text-amber-400 bg-amber-400/10 group-hover:bg-amber-400/20",
  },
  {
    icon: <Banknote className="w-8 h-8" />,
    title: "Affordable Rates",
    desc: "Quality workmanship at prices everyone can afford — it's our mission.",
    color: "text-amber-400 bg-amber-400/10 group-hover:bg-amber-400/20",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Guaranteed Work",
    desc: "All work is tested, compliant and backed by our commitment to quality.",
    color: "text-amber-400 bg-amber-400/10 group-hover:bg-amber-400/20",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Local Experts",
    desc: "Proudly based in Rustenburg, we know the area and provide fast, reliable local service.",
    color: "text-amber-400 bg-amber-400/10 group-hover:bg-amber-400/20",
  },
];

const PARTNERS = [
  {
    name: "Sibanye Stillwater",
    logo: "SS",
    color: "from-gray-700 to-gray-900",
  },
  {
    name: "Valterra Platinum",
    logo: "VP",
    color: "from-cyan-600 to-blue-700",
  },
  {
    name: "Rustenburg Local Municipality",
    logo: "RLM",
    color: "from-green-600 to-orange-600",
  },
];

const AREAS = [
  "Rustenburg Central",
  "Tlhabane",
  "Geelhoutpark",
  "Safari Gardens",
  "Boitekong",
  "Cashan",
  "Protea Park",
  "Waterfall East",
  "Swartruggens",
  "Brits",
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1558402529-d2638a7023e9?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=400&q=80",
];

const PHONE_DISPLAY = "073 939 5732";
const PHONE_TEL = "tel:+27739395732";
const WHATSAPP = "https://wa.me/27739395732";
const EMAIL = "thabo@kayteestopelect.co.za";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md shadow-lg shadow-cyan-500/10 border-b border-cyan-500/20"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="flex items-center gap-2">
            <Lightbulb className="w-8 h-8 text-amber-400" />
            <span className="bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-lg font-extrabold uppercase tracking-wide text-transparent sm:text-xl">
              Kaytees Top Electrician
            </span>
          </a>

          <ul className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-gray-300 transition hover:text-amber-400"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={PHONE_TEL}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-2 text-sm font-bold text-black shadow-lg shadow-amber-500/30 transition hover:scale-105 hover:shadow-amber-500/50"
              >
                <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
              </a>
            </li>
          </ul>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-amber-400 lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </nav>

        {menuOpen && (
          <ul className="space-y-1 border-t border-cyan-500/20 bg-black/95 px-4 py-4 backdrop-blur-md lg:hidden">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 font-medium text-gray-300 transition hover:bg-cyan-500/10 hover:text-amber-400"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={PHONE_TEL}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-3 text-center font-bold text-black"
              >
                <Phone className="w-4 h-4" /> Call {PHONE_DISPLAY}
              </a>
            </li>
          </ul>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden pt-20"
      >
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-amber-500/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
              <Zap className="w-4 h-4 mr-1.5" /> For All Your Electrical Needs
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Professional{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Electrical Services
              </span>{" "}
              Across{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                Rustenburg & North West
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-gray-400">
              KAYTEES TOP ELECTRICIAN (PTY) LTD delivers quality electrical
              solutions for domestic, commercial and industrial customers in
              Rustenburg and surrounding areas — from house wiring and COCs to
              generators and energy saving systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={PHONE_TEL}
                className="flex items-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-3 font-bold text-black shadow-lg shadow-amber-500/30 transition hover:scale-105 hover:shadow-amber-500/50"
              >
                <Phone className="w-5 h-5 mr-2" /> Call Us Now
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="flex items-center rounded-full border-2 border-cyan-400 px-8 py-3 font-bold text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
              >
                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Us
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1.5 text-cyan-400" />{" "}
                Rustenburg Based
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1.5 text-cyan-400" /> Fully
                Insured
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1.5 text-cyan-400" />{" "}
                Same-Day Service
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-zinc-900 to-black p-8 shadow-2xl shadow-cyan-500/20">
              <div className="flex justify-center mb-4">
                <Lightbulb className="w-16 h-16 text-amber-400" />
              </div>
              <h3 className="mt-4 text-center text-xl font-bold text-amber-400">
                Need an Electrician?
              </h3>
              <p className="mt-2 text-center text-sm text-gray-400">
                Fast response, affordable rates, guaranteed workmanship.
              </p>
              <a
                href="#contact"
                className="mt-6 block rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 px-6 py-3 text-center font-bold text-black transition hover:opacity-90"
              >
                Get a Free Quote
              </a>
              <div className="mt-6 space-y-3 border-t border-zinc-800 pt-6 text-sm text-gray-300">
                <p className="flex justify-between items-center">
                  <span className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" /> Phone
                  </span>
                  <a
                    href={PHONE_TEL}
                    className="font-semibold text-amber-400 hover:underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </p>
                <p className="flex justify-between items-center">
                  <span className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" /> Email
                  </span>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="font-semibold text-cyan-400 hover:underline truncate max-w-[180px]"
                  >
                    {EMAIL}
                  </a>
                </p>
                <p className="flex justify-between items-center">
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" /> Based in
                  </span>
                  <span className="font-semibold">Rustenburg, NW</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              What We Do
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Our{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              A wide range of quality electrical services for domestic,
              commercial and industrial customers.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-500/10"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400/20 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-white transition group-hover:text-amber-400">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="relative py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-500/10 blur-[100px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Who We Are
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              About{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Kaytees Top Electrician
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-zinc-900 to-black p-8 text-center">
              <div className="flex justify-center mb-4">
                <Target className="w-12 h-12 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-cyan-400">Our Vision</h3>
              <p className="mt-3 text-gray-400">
                To be recognized as the leading electrical service provider in
                the North West Province.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-zinc-900 to-black p-8 text-center">
              <div className="flex justify-center mb-4">
                <Rocket className="w-12 h-12 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-amber-400">Our Mission</h3>
              <p className="mt-3 text-gray-400">
                Our main goal is to create a world where everyone in our
                community has access to an affordable, reliable electrician.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8">
              <div className="flex justify-center mb-4">
                <Gem className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white text-center">
                Core Values
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Excellence",
                  "Quality",
                  "Ownership",
                  "Innovative",
                  "Integrity",
                ].map((v) => (
                  <li key={v} className="flex items-center gap-2 text-gray-300">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />{" "}
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-950 p-8 text-center">
            <p className="mx-auto max-w-3xl text-gray-300">
              <span className="font-bold text-amber-400">
                KAYTEES TOP ELECTRICIAN (PTY) LTD
              </span>{" "}
              is a proudly local electrical company based in Rustenburg, North
              West Province, established by{" "}
              <span className="font-semibold text-cyan-400">Thabo Phono</span>.
              We offer a wide range of quality electrical services for domestic,
              commercial and industrial customers, operating primarily in{" "}
              <span className="font-semibold text-amber-400">
                Rustenburg and surrounding towns
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section id="why-us" className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              The Difference
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Us?
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-8 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div
                  className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl mx-auto transition-colors ${item.color}`}
                >
                  {item.icon}
                </div>
                <h3 className="font-bold text-amber-400">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PARTNERS SECTION ================= */}
      <section
        id="partners"
        className="relative py-24 bg-gradient-to-b from-zinc-950 to-black"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Our Valued Partners
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Trusted By{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
              We proudly partner with leading mining companies and organizations
              in delivering reliable engineering solutions across Rustenburg and
              the North West Province.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative flex flex-col items-center justify-center min-h-[160px]">
                  {/* Logo Placeholder - Replace with actual images */}
                  <div
                    className={`w-24 h-24 rounded-xl bg-gradient-to-br ${partner.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-white text-2xl font-bold">
                      {partner.logo}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 text-center group-hover:text-gray-900">
                    {partner.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                    <Building2 className="w-4 h-4" />
                    <span>Trusted Partner</span>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-tr-2xl" />
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-3">
              <Users className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300">
                Building Strong Partnerships Across South Africa
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ANIMATED GALLERY ================= */}
      <section
        id="gallery"
        className="relative py-24 bg-zinc-950 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Our Work
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Recent{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            A glimpse into our quality workmanship across Rustenburg and the
            North West.
          </p>
        </div>

        <div className="relative flex overflow-hidden">
          <div className="flex min-w-full animate-marquee gap-6 py-4">
            {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-80 h-64 rounded-2xl overflow-hidden border border-zinc-800 shadow-lg group"
              >
                <img
                  src={img}
                  alt={`Project ${i + 1}`}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* ================= AREAS ================= */}
      <section id="areas" className="relative py-24">
        <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Where We Work
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Service{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Areas
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Headquartered in Rustenburg, we proudly serve clients in our local
              community and surrounding towns.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {AREAS.map((area, i) => (
              <span
                key={area}
                className={`flex items-center rounded-full border px-5 py-2 text-sm font-medium transition hover:scale-105 ${
                  i === 0
                    ? "border-amber-400 bg-amber-400/10 text-amber-400"
                    : "border-zinc-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
                }`}
              >
                <MapPin className="w-4 h-4 mr-1.5" /> {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Get In Touch
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Contact{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Us
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8 sm:p-10">
              <h3 className="text-xl font-bold text-amber-400">
                Let's Talk About Your Project
              </h3>
              <p className="mt-3 text-gray-400">
                Call, WhatsApp or email us for a free quote — or visit us at our
                Rustenburg office.
              </p>

              <div className="mt-8 space-y-5">
                <a href={PHONE_TEL} className="flex items-center gap-4 group">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 group-hover:bg-amber-400/20 transition-colors">
                    <Phone className="w-6 h-6 text-amber-400" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-gray-500">
                      Phone
                    </span>
                    <span className="font-semibold text-white group-hover:text-amber-400 transition-colors">
                      {PHONE_DISPLAY}
                    </span>
                  </span>
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-4 group"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 group-hover:bg-cyan-400/20 transition-colors">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-gray-500">
                      Email
                    </span>
                    <span className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {EMAIL}
                    </span>
                  </span>
                </a>

                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-gray-500">
                      Address
                    </span>
                    <span className="font-semibold text-white">
                      Kopano, Freedom Park, Rustenburg, 0299
                    </span>
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center rounded-full bg-[#25D366] px-6 py-3 font-bold text-black transition hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center rounded-full border-2 border-cyan-400 px-6 py-3 font-bold text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
                >
                  <Send className="w-5 h-5 mr-2" /> Send Email
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-zinc-900 to-black p-8 sm:p-10">
              <h3 className="text-xl font-bold text-cyan-400">
                Request a Free Quote
              </h3>
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const f = e.target;
                  const msg = `Hello Kaytees Top Electrician,%0A%0AName: ${encodeURIComponent(f.name.value)}%0APhone: ${encodeURIComponent(f.phone.value)}%0AService: ${encodeURIComponent(f.service.value)}%0AMessage: ${encodeURIComponent(f.message.value)}`;
                  window.open(`${WHATSAPP}?text=${msg}`, "_blank");
                }}
              >
                <input
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-amber-400"
                />
                <input
                  name="phone"
                  required
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-amber-400"
                />
                <select
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none transition focus:border-amber-400"
                >
                  <option value="" disabled>
                    Select a Service
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.title}>{s.title}</option>
                  ))}
                  <option>Other</option>
                </select>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your job..."
                  className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-amber-400 resize-none"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center w-full rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 font-bold text-black shadow-lg shadow-amber-500/30 transition hover:scale-[1.02] hover:shadow-amber-500/50"
                >
                  Send via WhatsApp <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-zinc-800 bg-zinc-950 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center gap-2 md:justify-start">
                <Lightbulb className="w-6 h-6 text-amber-400" />
                <span className="bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-lg font-extrabold uppercase tracking-wide text-transparent">
                  Kaytees Top Electrician
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                For all your electrical needs in Rustenburg.
              </p>
              <p className="mt-4 text-xs text-gray-600">
                Company Reg. No. 2024/333451/07 &nbsp;•&nbsp; CSD Reg. No.
                MAAA1535135
              </p>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
                Quick Links
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-400">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="transition hover:text-cyan-400">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                Contact
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-400">
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <Mail className="w-4 h-4" /> {EMAIL}
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-4 h-4" /> Rustenburg, 0299
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-xs text-gray-600">
            © {new Date().getFullYear()} KAYTEES TOP ELECTRICIAN (PTY) LTD. All
            rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/40 transition hover:scale-110"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
