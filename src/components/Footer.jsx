import { Mail, Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">
        
        {/* Nama */}
        <h3 className="font-semibold text-slate-900">
          Dzulqarnain
        </h3>
        <p className="text-sm text-slate-500 mb-5">
          Frontend Developer · React & Tailwind CSS
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="mailto:ulqronmuhammad@gmail.com"
            className="text-slate-500 hover:text-slate-900 transition"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>

          <a
            href="https://wa.me/62805643022648"
            target="_blank"
            className="text-slate-500 hover:text-slate-900 transition"
            aria-label="WhatsApp"
          >
            <Phone size={22} />
          </a>

          <a
            href="https://instagram.com/Dzulqarnain_841K"
            target="_blank"
            className="text-slate-500 hover:text-slate-900 transition"
            aria-label="Instagram"
          >
            <Instagram size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Dzulqarnain. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
