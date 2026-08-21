import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ navigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (url) => {
    navigate(url);
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">

        {/* BRAND / LOGO */}
        <a
          href="/"
          className="brand"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation("/");
          }}
        >
          <div className="brand-mark">
            <img
              src="/src/assets/logo.jpg"
              alt="Ashram Logo"
            />
          </div>

          <div>
            <div className="brand-name">
              श्री. गाडगे महाराज माध्यमिक आश्रमशाळा, वरवंडी
            </div>
          </div>
        </a>

        {/* NAVIGATION */}
        <nav
          className={`nav-links ${menuOpen ? "nav-open" : ""}`}
        >

          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/");
            }}
          >
            Home
          </a>

          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/about");
            }}
          >
            शाळेची माहिती
          </a>

          <a
            href="/facilities"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/facilities");
            }}
          >
            सुविधा & Gallery
          </a>

          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/contact");
            }}
          >
            संपर्क
          </a>

        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>
    </header>
  );
}