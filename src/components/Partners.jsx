
import { Building2, Users } from "lucide-react";
import { PARTNERS } from "../data";




export default function Partners() {
  return (
    <section
      id="partners"
      className="relative bg-gradient-to-b from-zinc-950 to-black py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
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
            in delivering reliable engineering solutions across South Africa.
          </p>
        </div>

        {/* Partner Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-5" />

              <div className="relative flex min-h-[160px] flex-col items-center justify-center">
                {/* Partner Image */}
                <div
                  className={`mb-4 flex h-30 ${partner.img === "Rustenburg Local Municipality"? "w-full bg-slate-800": ""} items-center justify-center overflow-hidden rounded-xl bg-gray-100 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Partner Name */}
                <h3 className="text-center text-lg font-bold text-gray-800">
                  {partner.name}
                </h3>

                {/* Partner Type */}
                <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                  <Building2 className="h-4 w-4" />
                  <span>Trusted Partner</span>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute right-0 top-0 h-20 w-20 rounded-tr-2xl bg-gradient-to-bl from-cyan-400/10 to-transparent" />
            </div>
          ))}
        </div>

        {/* Bottom Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-3">
            <Users className="h-5 w-5 text-cyan-400" />

            <span className="text-sm font-medium text-cyan-300">
              Building Strong Partnerships Across South Africa
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
