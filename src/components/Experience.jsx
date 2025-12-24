import { useState } from "react";
import DocModal from "./DocModal";

import frontendImg from "../assets/certificates/dicoding-frontend.png";
import jsImg from "../assets/certificates/dicoding-js.png";
import reactImg from "../assets/certificates/react.png";
import profileIMG from "../assets/profile.jpg";

const experiences = [
  {
    title: "Frontend Web Development",
    org: "Dicoding Indonesia",
    year: "2024",
    image: frontendImg,
  },
  {
    title: "JavaScript Functional Programming",
    org: "Dicoding Indonesia",
    year: "2024",
    image: jsImg,
  },
  {
    title: "React Fundamentals",
    org: "Dicoding Indonesia",
    year: "2024",
    image: reactImg,
  },
  {
    title: "React Fundamentals",
    org: "Dicoding Indonesia",
    year: "2024",
    image: profileIMG,
  },
];

function Experience() {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleData = showAll ? experiences : experiences.slice(0, 2);

  return (
    <section className="max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-bold text-slate-800 mb-10">
        Experience & Certificates
      </h2>

      <div className="relative border-l border-slate-300 ml-4">
        {visibleData.map((item, index) => (
          <div key={index} className="relative pl-10 pb-10">
            <span className="absolute -left-[7px] top-1 w-3 h-3 bg-slate-800 rounded-full"></span>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.org}</p>
              <p className="text-sm text-slate-400">{item.year}</p>

              <button
                onClick={() => setSelectedDoc(item)}
                className="mt-4 text-sm font-medium text-slate-800 hover:underline"
              >
                View Documentation →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 rounded-full border"
        >
          {showAll ? "Show Less" : "See More"}
        </button>
      </div>

      {/* MODAL */}
      <DocModal
        data={selectedDoc}
        onClose={() => setSelectedDoc(null)}
      />
    </section>
  );
}

export default Experience;
