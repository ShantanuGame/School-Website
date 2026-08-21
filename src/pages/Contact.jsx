import {
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";

const contactDetails = {
  phoneNumbers: [
    "+91-9975346791",
    "+91-9xxxxxxxxx",
  ],

  email: "sgmmas.warvandi@gmail.com",

  address: {
    
    village: "मु. वरवंडी पो. मुळानगर.  जि. अहिल्यानगर.",
    taluka: "ता. राहुरी",
    district: "जि. अहिल्यानगर.",
    state: "Maharashtra",
    pincode: "पीन नं. 413722",
  },

  contactPerson: {
    name: "नानासाहेब धोंडीबा गेम",
    designation: "मुख्याध्यापक",
  },

  location: {
    latitude: "19.319861",
    longitude: "74.637722",
  },
};

export default function Contact() {
  return (
    <main className="contact-page">

      {/* PAGE HEADER */}
      <section className="inner-page-header">
        <div className="container">

          

          <h1>Contact</h1>

          

        </div>
      </section>


      {/* CONTACT INFORMATION */}
      <section className="contact-section">

        <div className="container">

          <div className="contact-grid">

            {/* PHONE */}
            <article className="contact-card">

              <div className="contact-icon">
                <Phone size={22} />
              </div>

              <div>
                <span className="contact-label">
                  Phone Number
                </span>

                <h3>Contact Numbers</h3>

                <div className="contact-values">

                  {contactDetails.phoneNumbers.map(
                    (number, index) => (
                      <p key={index}>{number}</p>
                    )
                  )}

                </div>

              </div>

            </article>


            {/* EMAIL */}
            <article className="contact-card">

              <div className="contact-icon">
                <Mail size={22} />
              </div>

              <div>

                <span className="contact-label">
                  Official Communication
                </span>

                <h3>Official Email</h3>

                <p className="contact-main-value">
                  {contactDetails.email}
                </p>

              </div>

            </article>


            {/* CONTACT PERSON */}
            <article className="contact-card">

              <div className="contact-icon">
                <User size={22} />
              </div>

              <div>

                <span className="contact-label">
                  Contact Person
                </span>

                <h3>
                  {contactDetails.contactPerson.name}
                </h3>

                <p className="contact-main-value">
                  {contactDetails.contactPerson.designation}
                </p>

              </div>

            </article>


            {/* ADDRESS */}
            <article className="contact-card address-card">

              <div className="contact-icon">
                <MapPin size={22} />
              </div>

              <div>

                <span className="contact-label">
                  Postal Address
                </span>

                <h3>Correspondence Address</h3>

                <div className="address-details">

                  <p>
                    {contactDetails.address.institution}
                  </p>

                  <p>
                    {contactDetails.address.village},
                    {" "}
                    {contactDetails.address.taluka}
                  </p>

                  <p>
                    {contactDetails.address.district},
                    {" "}
                    {contactDetails.address.state}
                  </p>

                  <p>
                    PIN: {contactDetails.address.pincode}
                  </p>

                </div>

              </div>

            </article>

          </div>


          {/* MAP */}
          <div className="contact-map-card">

            <div className="contact-map-header">

              <div className="contact-icon">
                <MapPin size={22} />
              </div>

              <div>

                <span className="contact-label">
                  LOCATION
                </span>

                <h2>Find Us</h2>

                <p>
                  Geographical location of the Ashram School.
                </p>

              </div>

            </div>


            <div className="contact-map">

              <iframe
                title="Ashram School Location"
                src="https://www.google.com/maps?q=19.319861,74.637722&z=17&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>


            <div className="contact-coordinates">

              <div>
                <span>Latitude</span>
                <strong>19.319861</strong>
              </div>

              <div>
                <span>Longitude</span>
                <strong>74.637722</strong>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}