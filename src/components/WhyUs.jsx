import { WHY_US } from "../data";

export default function WhyUs() {
  return (
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-8 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div
                className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl mx-auto transition-colors ${item.color}`}
              >
                {/* FIX: was {item.icon} — must be <item.Icon /> since data stores a component reference */}
                <item.Icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-amber-400">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

