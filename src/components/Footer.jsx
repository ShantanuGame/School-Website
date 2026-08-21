import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-main">
          <div>
            <div className="footer-brand">श्री गाडगे महाराज मिशन, मुंबई संचलित, माध्यमिक आश्रमशाळा, वरवंडी.</div>

            <p className="footer-department">
              इतर मागास बहुजन कल्याण विभाग, महाराष्ट्र शासन
            </p>

            <p className="footer-description">
              संस्था, विद्यार्थी, कर्मचारी, सुविधा आणि संपर्काची माहिती उपलब्ध करून देणारे अधिकृत संस्थात्मक माहिती पोर्टल.
            </p>
          </div>

          <div className="footer-contact">
            <div className="footer-contact-item">
              <Phone size={19} />
              <span>+91 XXXXX XXXXX</span>
            </div>

            <div className="footer-contact-item">
              <Mail size={19} />
              <span>sgmmas.warvandi@gmail.com</span>
            </div>

            <div className="footer-contact-item">
              <MapPin size={19} />
              <span>
                मु. वरवंडी पो. मुळानगर. ता. राहुरी जि. अहिल्यानगर. पीन नं. 413722.
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Ashram Institution</span>

          <span>All institutional information is subject to periodic update.</span>
        </div>
      </div>
    </footer>
  );
}