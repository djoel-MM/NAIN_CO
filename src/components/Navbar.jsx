import { useState } from "react";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Certificates", id: "certificates" },
  { label: "Experience", id: "experience" },
  { label: "About", id: "about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const email = "ulqronmuhammad@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 👉 INI KUNCI "SEMUT"
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setOpen(false); // tutup menu mobile
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <div className="flex items-center justify-between px-6 py-3 bg-white/80 backdrop-blur-md rounded-full shadow-md">

        {/* Logo */}
        <span className="font-semibold text-slate-700">
          Portfolio
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className="relative group overflow-hidden">
              <span className="absolute -top-full left-0 w-full h-full bg-slate-900 rounded-md transition-all duration-300 ease-out group-hover:top-0" />
              
              <button
                onClick={() => handleScroll(item.id)}
                className="relative px-3 py-1 text-slate-700 group-hover:text-white transition"
              >
                {item.label}
              </button>
            </li>
          ))}

          {/* Copy Email */}
          <button
            onClick={copyEmail}
            className="relative group flex items-center gap-2 px-3 py-1 text-slate-700"
          >
            <span className="text-lg font-bold">
              {copied ? "✓" : "@"}
            </span>

            <span
              className={`absolute top-full text-xs px-2 py-1 rounded transition-all duration-300
                ${
                  copied
                    ? "opacity-100 top-8 bg-slate-600 text-white"
                    : "opacity-0 group-hover:opacity-100 group-hover:top-8 bg-slate-900 text-white"
                }`}
            >
              {copied ? "Copied" : "Copy Email"}
            </span>
          </button>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
          aria-label="Toggle Menu"
        >
          <span className="w-6 h-0.5 bg-slate-700" />
          <span className="w-6 h-0.5 bg-slate-700" />
          <span className="w-6 h-0.5 bg-slate-700" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mt-3 bg-white rounded-2xl shadow-md p-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className="w-full text-left px-4 py-2 rounded-md text-slate-700 hover:bg-slate-900 hover:text-white transition"
                >
                  {item.label}
                </button>
              </li>
            ))}

            <button
              onClick={copyEmail}
              className="mt-2 px-4 py-2 rounded-md bg-slate-900 text-white"
            >
              {copied ? "Email Copied" : "Copy Email"}
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
