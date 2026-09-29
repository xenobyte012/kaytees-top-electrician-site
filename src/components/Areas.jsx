// src/components/Areas.jsx
import { MapPin } from "lucide-react";
import { AREAS } from "../data";

export default function Areas() {
  return (
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
            <span className="font-semibold text-amber-400">
              Based in Rustenburg
            </span>
            , we proudly serve clients in cities and towns across South Africa.
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
  );
}
