// src/components/Contact.jsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import {
  SERVICES,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP,
  EMAIL,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "../data";

export default function Contact() {
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus("sending");
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setFormStatus("success");
        formRef.current.reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      })
      .catch(() => {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      });
  };

  return (
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
                    Kopano, Freedom Park, Rustenburg, 0299, South Africa
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
            <form ref={formRef} onSubmit={sendEmail} className="mt-6 space-y-4">
              <input
                name="from_name"
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
              <input
                name="reply_to"
                type="email"
                required
                placeholder="Your Email"
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
                disabled={formStatus === "sending"}
                className="flex items-center justify-center w-full rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 font-bold text-black shadow-lg shadow-amber-500/30 transition hover:scale-[1.02] hover:shadow-amber-500/50 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {formStatus === "sending" ? "Sending..." : "Send via Email"}{" "}
                <Send className="w-5 h-5 ml-2" />
              </button>

              {formStatus === "success" && (
                <p className="text-center text-sm font-semibold text-green-400">
                  ✅ Message sent! We'll get back to you soon.
                </p>
              )}
              {formStatus === "error" && (
                <p className="text-center text-sm font-semibold text-red-400">
                  ❌ Something went wrong. Please try again or call us.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
