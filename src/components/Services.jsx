// src/components/Services.jsx
import { SERVICES } from "../data";

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background video — replace the src with your own video file/URL */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      >
        <source src="/videos/services-electrical.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
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
            A wide range of quality electrical services for domestic, commercial
            and industrial customers across South Africa.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-500/10"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400/20 transition-colors">
                {/* FIX: was {s.icon} — must be <s.Icon /> since data stores a component reference */}
                <s.Icon className="w-7 h-7" />
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
  );
}
