import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll handler
  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setHideNavbar(true); // scrolling down → hide
      } else {
        setHideNavbar(false); // scrolling up → show
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`text-white fixed w-full p-6 z-50 shadow-md transition-transform duration-300 ${
        hideNavbar ? '-translate-y-full' : 'translate-y-0'
      } `}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Desktop and Mobile → Name only */}
        <a href="#home">
          <h1 className="text-2xl font-bold">
            <span className="text-purple-600">K</span>alani{" "}
            <span className="text-purple-600">J</span>ayasundara
          </h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {['About', 'Skills', 'Projects', 'Education', 'Beyond Works', 'Contact','Sampels'].map((item) => (
            <li key={item} className="hover:text-purple-800 hover:font-bold">
              <a href={`#${item.toLowerCase().replace(' ', '')}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 bg-black p-4 rounded-md">
          {['About', 'Skills', 'Projects', 'Education', 'Beyond Works', 'Contact','Sampels'].map((item) => (
            <li
              key={item}
              className="relative pb-1 border-b-2 border-transparent hover:border-purple-800 transition-all duration-300 hover:font-bold"
            >
              <a
                href={`#${item.toLowerCase().replace(' ', '')}`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
