import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="/" className="brand">
          <div className="brand-mark">
                 <img src="/src/assets/logo.jpg" alt="Ashram Logo" />
            </div>

          <div>
            <div className="brand-name">श्री. गाडगे महाराज माध्यमिक आश्रमशाळा, वरवंडी  </div>
            
          </div>
        </a>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="/" className="active">
            Home
          </a>
          <a href="/about"> शाळेची माहिती </a>
          <a href="/facilities"> सुविधा & Gallery</a>
          <a href="/contact"> संपर्क </a>
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}