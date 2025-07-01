import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "PROJECTS", href: "#projects" },
    { name: "ACHIEVEMENTS", href: "#achievements" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-green-400/30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around gap-90 h-16">
          <div className="text-green-400 font-bold text-xl glitch-text">{"> NANDAN_KUMAR.EXE"}</div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex justify-between gap-12 items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-green-400 hover:text-green-300 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-green-400/10 rounded border border-transparent hover:border-green-400/30"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-green-400 hover:text-green-300 p-2">
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-green-400 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
                ></span>
                <span
                  className={`bg-green-400 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}
                ></span>
                <span
                  className={`bg-green-400 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-green-400/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-green-400 hover:text-green-300 block px-3 py-2 text-base font-medium hover:bg-green-400/10 rounded border border-transparent hover:border-green-400/30"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
