// src/components/About.jsx
import { Target, Rocket, Gem, Star } from "lucide-react";

export default function About() {
  return (
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
              South Africa.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-zinc-900 to-black p-8 text-center">
            <div className="flex justify-center mb-4">
              <Rocket className="w-12 h-12 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-amber-400">Our Mission</h3>
            <p className="mt-3 text-gray-400">
              Our main goal is to create a world where everyone in our community
              has access to an affordable, reliable electrician.
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
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> {v}
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
            is a proudly South African electrical company{" "}
            <span className="font-semibold text-cyan-400">
              based in Rustenburg
            </span>
            , North West Province, established by{" "}
            <span className="font-semibold text-cyan-400">Thabo Phono</span>.
            With over 10 years of experience in the electrical industry, we
            offer a wide range of quality electrical services for domestic,
            commercial and industrial customers, operating across{" "}
            <span className="font-semibold text-amber-400">South Africa</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
