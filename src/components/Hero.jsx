
import {
  Phone,
  MessageCircle,
  Zap,
  CheckCircle,
  Lightbulb,
  Mail,
  MapPin,
} from "lucide-react";

import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP, EMAIL } from "../data";

// Video file path
const HERO_VIDEO = `${import.meta.env.BASE_URL}videos/bg-img.mp4`;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* Dark overlay so the text is easy to read */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

      {/* Background glow effects */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-amber-500/20 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div>
          <span className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            <Zap className="mr-1.5 h-4 w-4" />
            For All Your Electrical Needs
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Professional{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Electrical Services
            </span>{" "}
            Across{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              South Africa
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-400">
            KAYTEES TOP ELECTRICIAN (PTY) LTD delivers quality electrical
            solutions for domestic, commercial and industrial customers across
            South Africa — from house wiring and COCs to generators, cable
            tapping and energy saving systems.{" "}
            <span className="font-semibold text-amber-400">
              Based in Rustenburg
            </span>
            , proudly serving the whole country.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={PHONE_TEL}
              className="flex items-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-3 font-bold text-black shadow-lg shadow-amber-500/30 transition hover:scale-105 hover:shadow-amber-500/50"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </a>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="flex items-center rounded-full border-2 border-cyan-400 px-8 py-3 font-bold text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </a>
          </div>

          {/* Trust Points */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">
            <span className="flex items-center">
              <CheckCircle className="mr-1.5 h-4 w-4 text-cyan-400" />
              Based in Rustenburg
            </span>

            <span className="flex items-center">
              <CheckCircle className="mr-1.5 h-4 w-4 text-cyan-400" />
              10+ Years Experience
            </span>

            <span className="flex items-center">
              <CheckCircle className="mr-1.5 h-4 w-4 text-cyan-400" />
              Same-Day Service
            </span>
          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-zinc-900/95 to-black/95 p-8 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm">
            <div className="mb-4 flex justify-center">
              <Lightbulb className="h-16 w-16 text-amber-400" />
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

            {/* Contact Information */}
            <div className="mt-6 space-y-3 border-t border-zinc-800 pt-6 text-sm text-gray-300">
              {/* Phone */}
              <p className="flex items-center justify-between">
                <span className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Phone
                </span>

                <a
                  href={PHONE_TEL}
                  className="font-semibold text-amber-400 hover:underline"
                >
                  {PHONE_DISPLAY}
                </a>
              </p>

              {/* Email */}
              <p className="flex items-center justify-between">
                <span className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </span>

                <a
                  href={`mailto:${EMAIL}`}
                  className="max-w-[180px] truncate font-semibold text-cyan-400 hover:underline"
                >
                  {EMAIL}
                </a>
              </p>

              {/* Location */}
              <p className="flex items-center justify-between">
                <span className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  Based in
                </span>

                <span className="font-semibold">Rustenburg, SA</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
