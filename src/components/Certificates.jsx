import { useEffect, useRef, useState } from "react";

import frontendImg from "../assets/certificates/dicoding-frontend.png";
import jsImg from "../assets/certificates/dicoding-js.png";
import reactImg from "../assets/certificates/react.png";
import karateIMG from "../assets/certificates/piagam.png";

const certificates = [
 
  { title: "Frontend Web Development", issuer: "Dicoding Indonesia", year: "2025", image: frontendImg },
  { title: "JavaScript Functional Programming", issuer: "Dicoding Indonesia", year: "2025", image: jsImg },
  { title: "React Fundamentals", issuer: "Dicoding Indonesia", year: "2025", image: reactImg },
  { title: "Karate champions", issuer: "Karate Indonesia", year: "2025", image: karateIMG },
];

export default function Certificates() {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play (AMAN)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === certificates.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // Scroll horizontal TANPA ganggu scroll vertikal
  useEffect(() => {
    const container = containerRef.current;
    const item = itemRefs.current[currentIndex];

    if (!container || !item) return;

    container.scrollTo({
      left: item.offsetLeft,
      behavior: "smooth",
    });
  }, [currentIndex]);

  const next = () =>
    setCurrentIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1
    );

  const prev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );

  return (
    <section className="relative py-6 bg-white overflow-hidden">
      <h2 className="text-xl font-semibold text-slate-900 mb-4 px-6 md:px-12">
        Certificates & Achievements
      </h2>

      {/* Buttons */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white border rounded-full w-9 h-9 shadow"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white border rounded-full w-9 h-9 shadow"
      >
        ›
      </button>

      {/* Fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Carousel */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-hidden px-6 md:px-12 scroll-smooth"
      >
        {certificates.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className="min-w-[280px] bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <div className="h-36 bg-slate-100 flex items-center justify-center">
              <img src={item.image} alt={item.title} className="h-20 object-contain" />
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.issuer}</p>
              <p className="text-xs text-slate-400 mt-1">{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
