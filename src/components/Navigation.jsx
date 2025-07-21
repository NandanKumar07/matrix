// Navigation.jsx
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "HOME", section: "hero" },
    { name: "ABOUT", section: "about" },
    { name: "SKILLS", section: "skills" },
    { name: "EXPERIENCE", section: "experience" },
    { name: "PROJECTS", section: "projects" },
    { name: "ACHIEVEMENTS", section: "achievements" },
    { name: "CONTACT", section: "contact" },
    { name: "SHELL", route: "/shell" }, // Add shell as a separate route
  ];

  const handleClick = (item) => {
    if (item.route) {
      // Navigate to a specific route
      navigate(item.route);
    } else if (item.section) {
      // Scroll to section (only works on home page)
      if (location.pathname !== "/") {
        navigate("/", { replace: false });
        setTimeout(() => scrollToSection(item.section), 100);
      } else {
        scrollToSection(item.section);
      }
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-green-400/30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around gap-90 h-16">
          <button 
            onClick={handleLogoClick}
            className="text-green-400 font-bold text-xl glitch-text hover:text-green-300 transition-colors"
          >
            {"> NANDAN_KUMAR.EXE"}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex justify-between gap-12 items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleClick(item)}
                  className="text-green-400 hover:text-green-300 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-green-400/10 rounded border border-transparent hover:border-green-400/30"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-green-400 hover:text-green-300 p-2">
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-green-400 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
                <span className={`bg-green-400 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                <span className={`bg-green-400 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
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
              <button
                key={item.name}
                onClick={() => handleClick(item)}
                className="text-green-400 hover:text-green-300 block px-3 py-2 text-base font-medium hover:bg-green-400/10 rounded border border-transparent hover:border-green-400/30 w-full text-left"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}