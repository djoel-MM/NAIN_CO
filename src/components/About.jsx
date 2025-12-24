import profile from "../assets/profile.jpg";
import schoolLogo from "../assets/school-logo.png";
import { Github, Instagram, Linkedin } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className=" px-4 sm:px-8 lg:px-16 py-16"
    >
      <div className="max-w-6xl mx-auto space-y-10">

        {/* FOTO + RIWAYAT */}
        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 items-center">

          {/* FOTO */}
          <div className="flex justify-center md:justify-start">
            <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIWAYAT */}
          <div className="relative bg-white rounded-2xl p-6 shadow-md overflow-hidden">
            <img
              src={schoolLogo}
              alt="School Logo"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-32 sm:w-40 opacity-10 pointer-events-none"
            />

            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-indigo-600">
                Riwayat Pendidikan
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                <strong>SMK RPL</strong><br />
                Fokus Web Development<br />
                Sedang mendalami React JS & UI/UX
              </p>
            </div>
          </div>
        </div>

        {/* DESKRIPSI */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Saya adalah seorang <strong>Frontend Developer</strong> yang
            berfokus pada pembuatan antarmuka modern, responsif, dan mudah
            digunakan menggunakan React dan Tailwind CSS.
          </p>
        </div>

        {/* MOTTO */}
        <div className="rounded-2xl p-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md">
          <p className="italic text-center text-base sm:text-lg">
            “Belajar konsisten hari ini untuk masa depan yang lebih baik.”
          </p>
        </div>

        {/* SKILL */}
        <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
          {["HTML", "CSS", "JavaScript", "React", "Tailwind"].map(skill => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm sm:text-base"
            >
              {skill}
            </span>
          ))}
        </div>

       
      </div>
    </section>
  );
}

function SocialDot({ icon }) {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition"
    >
      {icon}
    </a>
  );
}
