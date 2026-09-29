// src/components/Footer.jsx
import { Lightbulb, Phone, Mail, MapPin } from "lucide-react";
import { NAV_LINKS, PHONE_DISPLAY, EMAIL } from "../data";

export default function Footer() {
  return (
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
              For all your electrical needs across South Africa — based in
              Rustenburg.
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
                <MapPin className="w-4 h-4" /> Rustenburg, South Africa
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
  );
}
