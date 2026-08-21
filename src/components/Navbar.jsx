import {
  ArrowRight,
  Building2,
  GraduationCap,
  MapPin,
  Users,
} from "lucide-react";

import schoolPremImage from "../assets/HomePage/Schoolprem.jpeg";
import facilitiesImage from "../assets/HomePage/Facilities.jpeg";
import hostelImage from "../assets/HomePage/Hostel.jpeg";
import girlsImage from "../assets/HomePage/Girls.jpeg";

const institution = {
  name: "श्री. गाडगे महाराज माध्यमिक आश्रमशाळा, वरवंडी",
  type: "श्री. गाडगे महाराज मिशन,मुंबई संचलित",
  department: "इतर मागास बहुजन कल्याण विभाग, महाराष्ट्र शासन",

  welcome:
    "आमच्या संस्थेत आपले स्वागत आहे. या पोर्टलद्वारे आमच्या शैक्षणिक सुविधा, विद्यार्थी, कर्मचारी, शाळेच्या पायाभूत सुविधा आणि संस्थेशी संबंधित इतर महत्त्वाची माहिती उपलब्ध करून देण्यात आली आहे.",

  address:
    "मु. वरवंडी पो. मुळानगर. ता. राहुरी जि. अहिल्यानगर. पीन नं. 413722.",
};

const highlights = [
  {
    title: "शाळेचा परिसर",
    description:
      "आमच्या शैक्षणिक परिसराची आणि पायाभूत सुविधांची माहिती पहा.",
    image: schoolPremImage,
  },
  {
    title: "शैक्षणिक सुविधा",
    description: "वर्गखोल्या आणि शैक्षणिक सुविधांबद्दल माहिती.",
    image: facilitiesImage,
  },
  {
    title: "निवासी सुविधा",
    description:
      "विद्यार्थ्यांसाठी उपलब्ध निवासी सुविधांबद्दल माहिती.",
    image: hostelImage,
  },
  {
    title: "मुलींसाठी स्वतंत्र परिसर",
    description: "परिसरातील उपलब्ध सुविधांची माहिती पहा.",
    image: girlsImage,
  },
];

const quickInfo = [
  {
    icon: Building2,
    title: "संस्थेचा प्रकार",
    value: "अनुदानित निवासी आश्रमशाळा",
  },
  {
    icon: GraduationCap,
    title: "शिक्षण",
    value: "शालेय शिक्षण",
  },
  {
    icon: Users,
    title: "विद्यार्थी माहिती",
    value: "प्रवेशाची माहिती पहा",
  },
  {
    icon: MapPin,
    title: "स्थान",
    value:
      "मु. वरवंडी पो. मुळानगर. ता. राहुरी जि. अहिल्यानगर. पीन नं. 413722.",
  },
];

export default function Home({ navigate }) {
  const handleNavigation = (event, url) => {
    event.preventDefault();

    if (navigate) {
      navigate(url);
    } else {
      window.location.href = url;
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay" />

        <div className="container hero-content">
          <div className="hero-text">
            <div className="department-badge">
              {institution.department}
            </div>

            <p className="institution-type">
              {institution.type}
            </p>

            <h1>{institution.name}</h1>

            <p className="hero-description">
              {institution.welcome}
            </p>

            <div className="hero-buttons">
              <a
                href="/about"
                className="button button-primary"
                onClick={(event) =>
                  handleNavigation(event, "/about")
                }
              >
                शाळेची माहिती
                <ArrowRight size={18} />
              </a>

              <a
                href="/facilities"
                className="button button-outline"
                onClick={(event) =>
                  handleNavigation(event, "/facilities")
                }
              >
                सुविधा & Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFORMATION */}
      <section className="quick-info-section">
        <div className="container">
          <div className="quick-info-grid">
            {quickInfo.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="quick-info-card"
                  key={item.title}
                >
                  <div className="quick-info-icon">
                    <Icon size={22} />
                  </div>

                  <div>
                    <p>{item.title}</p>
                    <strong>{item.value}</strong>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="highlights-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <h2>शाळेची वैशिष्ट्ये</h2>
            </div>

            <a
              href="/facilities"
              className="view-all"
              onClick={(event) =>
                handleNavigation(event, "/facilities")
              }
            >
              सुविधा पहा
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="highlight-grid">
            {highlights.map((item) => (
              <article
                className="highlight-card"
                key={item.title}
              >
                <div className="highlight-image">
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                </div>

                <div className="highlight-content">
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <a
                    href="/facilities"
                    onClick={(event) =>
                      handleNavigation(event, "/facilities")
                    }
                  >
                    सुविधा पहा
                    <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="location-section">
        <div className="container location-card">
          <div className="location-icon">
            <MapPin size={28} />
          </div>

          <div>
            <p className="section-label">स्थान</p>

            <h2>आमच्या संस्थेचा पत्ता शोधा</h2>

            <p>{institution.address}</p>
          </div>

          <a
            href="/contact"
            className="button button-dark"
            onClick={(event) =>
              handleNavigation(event, "/contact")
            }
          >
            संपर्क
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </>
  );
}s