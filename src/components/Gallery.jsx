// src/components/Gallery.jsx
// import { GALLERY_IMAGES } from "../data";

import img_1 from "../img/img-1.jpg";
import img_2 from "../img/img-2.jpg";
import img_3 from "../img/img-3.jpg";
import img_4 from "../img/img-4.jpg";
import img_5 from "../img/img-5.jpg";
import img_6 from "../img/img-6.jpg";
import img_7 from "../img/img-7.jpg";
import img_8 from "../img/img-8.jpg";
import img_9 from "../img/img-9.jpg";
import img_10 from "../img/img-10.jpg";
import img_11 from "../img/img-11.jpg";
import img_12 from "../img/img-13.jpg";
import img_13 from "../img/img-13.jpg";

const GALLERY_IMAGES = [
  img_1, img_6 ,img_3,img_4,img_5,img_2,img_7,img_8,img_9,img_10,img_11,img_12,img_13,];




export default function Gallery() {
  return (
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
          A glimpse into our quality workmanship across South Africa.
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
  );
}
