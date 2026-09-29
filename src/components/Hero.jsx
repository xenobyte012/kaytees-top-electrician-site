
import {
  Phone,
  MessageCircle,
  Zap,
  CheckCircle,
  Mail,
  MapPin,
} from "lucide-react";

import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP, EMAIL } from "../data";

// Background video
const HERO_VIDEO = `${import.meta.env.BASE_URL}videos/bg-img.mp4`;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* ================================
          BACKGROUND VIDEO
      ================================= */}
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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-amber-500/20 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* ================================
          MAIN CONTENT
      ================================= */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">

        {/* Hero Text */}
        <div className="max-w-4xl">

          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            <Zap className="mr-1.5 h-4 w-4" />
            For All Your Electrical Needs
          </span>

          {/* Heading */}
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

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            KAYTEES TOP ELECTRICIAN (PTY) LTD delivers quality electrical
            solutions for domestic, commercial and industrial customers across
            South Africa — from house wiring and COCs to generators, cable
            tapping and energy saving systems.{" "}
            <span className="font-semibold text-amber-400">
              Based in Rustenburg
            </span>
            , proudly serving the whole country.
          </p>

          {/* =================================
              BUTTONS + CONTACT INFO
          ================================= */}
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Call */}
              <a
                href={PHONE_TEL}
                className="flex items-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-7 py-3.5 font-bold text-black shadow-lg shadow-amber-500/30 transition hover:scale-105 hover:shadow-amber-500/50"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>

              {/* WhatsApp */}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="flex items-center rounded-full border-2 border-cyan-400 px-7 py-3.5 font-bold text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </div>

           

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400">

              
            </div>
          </div>

          {/* =================================
              TRUST POINTS
          ================================= */}
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-gray-400">

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

            <span className="flex items-center">
              <MapPin className="mr-1.5 h-4 w-4 text-amber-400" />
              South Africa
            </span>

          </div>
        </div>
      </div>
    </section>
  );
}
