import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutAdmissions from "./pages/AboutAdmissions";
import FacilitiesGallery from "./pages/FacilitiesGallery";
import Contact from "./pages/Contact";

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleNavigation = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleNavigation);

    return () => {
      window.removeEventListener("popstate", handleNavigation);
    };
  }, []);

  const navigate = (url) => {
    window.history.pushState({}, "", url);
    setPath(url);
    window.scrollTo(0, 0);
  };

  let page;

  switch (path) {
    case "/about":
      page = <AboutAdmissions navigate={navigate} />;
      break;

    case "/facilities":
      page = <FacilitiesGallery navigate={navigate} />;
      break;

    case "/contact":
      page = <Contact navigate={navigate} />;
      break;

    default:
      page = <Home navigate={navigate} />;
  }

  return (
    <div className="app">
      <Navbar navigate={navigate} />

      <main>{page}</main>

      <Footer />
    </div>
  );
}

export default App;