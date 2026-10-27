import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Building2,
  GraduationCap,
  MapPin,
  Users,
} from "lucide-react";

import headmasterImage from "../assets/Gallery/HeadMaster.jpeg";
//import superintendentImage from "../assets/Gallery/Superintendent.jpeg";

const institution = {
  name: "श्री गाडगे महाराज मिशन, मुंबई संचलित, माध्यमिक आश्रमशाळा, वरवंडी.",

  address: {
    village: "मु. वरवंडी पो. मुळानगर.",
    taluka: "ता. राहुरी.",
    district: "जि. अहिल्यानगर",
    state: "महाराष्ट्र",
    pincode: "413722",
  },

  registration:
    "व्ही.ए.एस.1090//37661/प्र.क्र.-14/मावक ६, मंत्रालय विस्तार भवन, मुंबई-32",

  medium: "मराठी",
  curriculum: "State Board Curriculum",
  standards: "इयत्ता- 8वी ते 10वी.",
  sanctionedCapacity: "120",

  schoolgrandorder:
    "शाळा ग्रँड ऑर्डर क्र. २७/२०२३-२४, दिनांक ०५/०६/२०२३",

  satbara:
    "सातबारा क्र. २७/२०२३-२४, दिनांक ०५/०६/२०२३",
};

/*
  IMPORTANT:
  Tables 15, 16 and 17 intentionally use the SAME
  13 data columns.

  Sr. No. is an additional first column.
*/

const studentColumns = [
  "Total Students",
  "Resident Students",
  "Non-Resident Students",
];
// changes done and added the deatils of teachers just now

const employeeData = [
  {
    name: "श्री गमे नानासाहेब धोंडीबा",
    designation: "मुख्याध्यापक",
    contact: "9975346791",
    sanctionedPost: "Yes",
    details: "जन्मतारीख: 29-05-1971 | नेमणूक: 08-06-2002 | सेवानिवृत्ती: 31-05-2029 | शिक्षण: एम.ए.बी.एड | सेवार्थ आय डी: 15CSWNDGM7101 | सेवेत: कायम | पत्ता: मु.पो.केलवड ता.राहाता जि.अहिल्यानगर | विषय: मराठी इ.9,10 वी",
  },
  {
    name: "श्री गायकवाड अनिल प्रकाश",
    designation: "सहशिक्षक",
    contact: "9730108090",
    sanctionedPost: "Yes",
    details: "जन्मतारीख: 01-06-1974 | नेमणूक: 01-06-2002 | सेवानिवृत्ती: 31-05-2032 | शिक्षण: बी.ए.बी.एड | सेवार्थ आय डी: 15CSWAPGM7401 | सेवेत: कायम | पत्ता: मु.पो.मिरजगाव ता.कर्जत जि.अहिल्यानगर | विषय: हिंदी,भूगोल इ.8,9,10वी 9वी इतिहास",
  },
  {
    name: "श्री तनपुरे विकास मारुतराव",
    designation: "सहशिक्षक",
    contact: "9423046181",
    sanctionedPost: "Yes",
    details: "जन्मतारीख: 01-06-1973 | नेमणूक: 28-06-1999 | सेवानिवृत्ती: 31-05-2031 | शिक्षण: एम.एस्सी.बी.एड | सेवार्थ आय डी: 15CSWVMTM7301 | सेवेत: कायम | पत्ता: मु.पो.मिरजगाव ता.कर्जत जि.अहिल्यानगर | विषय: गणित,विज्ञान,-.8,9,10 वी 8वी इतिहास",
  },
  {
    name: "श्री जाधव शुभम ज्ञानदेव",
    designation: "सहशिक्षक",
    contact: "8668956644",
    sanctionedPost: "Yes",
    details: "जन्मतारीख: 27-01-1997 | नेमणूक: 08-10-2024 | सेवानिवृत्ती: 31-01-2055 | शिक्षण: एम.एस्सी.बी.एड | सेवार्थ आय डी: 15CSWASDJM9701 | सेवेत: शिक्षण सेवक | पत्ता: ज्ञानाई निवास,तपोवन रोड,अहिल्यानगर | विषय: इंग्रजी-8,9,10 वी/विज्ञान 8वी",
  },
  {
    name: "श्री डोके अतुल हरिभाऊ",
    designation: "सहशिक्षक",
    contact: "9096943719",
    sanctionedPost: "Yes",
    details: "जन्मतारीख: 03-03-1988 | नेमणूक: 01-09-2011 | सेवानिवृत्ती: 31-03-2046 | शिक्षण: बी.एस्सी.बी.एड | सेवार्थ आय डी: 15CSWAHDM8801 | सेवेत: कायम | पत्ता: मु.पो.ओतूर ता.जुन्नर जि.पुणे. | विषय: विज्ञान,गणित,9,10 वी 10वी इतिहास 8वी मराठी",
  },
  {
    name: "श्री नागरगोजे जालिंदर उत्तम",
    designation: "क.लिपीक",
    contact: "8975780569",
    sanctionedPost: "Yes",
    details: "जन्मतारीख: 21-05-1969 | नेमणूक: 19-11-1990 | सेवानिवृत्ती: 31-05-2027 | शिक्षण: बी.ए. | सेवार्थ आय डी: 15CSWJUNM6901 | सेवेत: कायम | पत्ता: मु.पो.कऱ्हेवडगाव ता.आष्टी जि.बीड | विषय: कार्यालयीन कामकाज",
  },
  {
    name: "श्री खुरंगे विकास दगडू",
    designation: "प्र.शा.परिचर",
    contact: "9922315423",
    sanctionedPost: "Yes",
    details: "जन्मतारीख: 01-06-1980 | नेमणूक: 01-09-2000 | सेवानिवृत्ती: 31-05-2040 | शिक्षण: बी.ए. | सेवार्थ आय डी: 15CSWVDKM8001 | सेवेत: कायम | पत्ता: मु.खुरंगेवाडी पो.चांदे खु.ता.कर्जत जि.अहिल्यानगर | विषय: प्रतिनियुक्ती-इमाबक कार्या.अ.नगर",
  },
  {
    name: "श्री पोतदार किरण सदानंद",
    designation: "शिपाई",
    contact: "7558320322",
    sanctionedPost: "Yes",
    details: "जन्मतारीख: 02-11-1981 | नेमणूक: 01-09-2003 | सेवानिवृत्ती: 30-11-2041 | शिक्षण: एच.एस.सी. | सेवार्थ आय डी: 15CSWKSPM8101 | सेवेत: कायम | पत्ता: वस्ती,एकनाथनगर ता.राहुरी जि.अहिल्यानगर",
  },
  {
    name: "श्रीम.तवल मंदाकिनी नानासाहेब",
    designation: "स्वयंपाकी",
    contact: "9822877003",
    sanctionedPost: "Yes",
    details: "जन्मतारीख: 15-03-1969 | नेमणूक: 01-06-1992 | सेवानिवृत्ती: 31-03-2029 | शिक्षण: साक्षर | सेवार्थ आय डी: 15CSWMNTF6902 | सेवेत: कायम | पत्ता: मु.वळण ता.राहुरी जि.अहिल्यानगर",
  },
  {
    name: "श्रीम.शिंदे आशा आश्रु",
    designation: "स्वयंपाकी",
    contact: "9860764097",
    sanctionedPost: "Yes",
    details: "जन्मतारीख: 22-06-1978 | नेमणूक: 01-03-2004 | सेवानिवृत्ती: 30-06-2038 | शिक्षण: इ.4 थी. | सेवार्थ आय डी: 15CSWAASM7801 | सेवेत: कायम | पत्ता: मु.पो.मिरजगाव ता.कर्जत जि.अहिल्यानगर",
  },
  {
    name: "श्री खडसे प्रविण आत्माराम",
    designation: "मदतनीस",
    contact: "9881047477",
    sanctionedPost: "Yes",
    details: "जन्मतारीख: 17-03-1980 | नेमणूक: 01-08-2009 | सेवानिवृत्ती: 31-03-2040 | शिक्षण: एच.एस.सी. | सेवार्थ आय डी: 15CSWPAKM8001 | सेवेत: कायम | पत्ता: मु.पो.मुर्तिजापूर ता.आकोला जि.अमरावती",
  },
];

const employeeSummary = {
  officersWorking: "000",
  employeesAgainstSanctionedPosts: "000",
};

/* =========================================
   LOCATION PHOTOS
========================================= */

const locationPhotos = [
  {
    title: "Headmaster's Room",
    image: headmasterImage,
    description: "Photograph of the Headmaster's room.",
    latitude: "—",
    longitude: "—",
  },
  {
    title: "Hostel Superintendent's Residence",
    //image: superintendentImage,
    description: "Photograph of the Hostel Superintendent's residence.",
    latitude: "—",
    longitude: "—",
  },
];

const studentData = {
  total: {
    total: "142",
    resident: "120",
    nonResident: "22",
  },

  aadhaarLinked: {
    total: "141",
    resident: "120",
    nonResident: "21",
  },

  aadhaarNotLinked: {
    total: "1",
    resident: "000",
    nonResident: "1",
  },
};

const staffData = [
  {
    category: "Teaching Staff",
    sanctioned: "05",
    filled: "05",
    vacant: "000",
  },
  {
    category: "Non-Teaching Staff",
    sanctioned: "09",
    filled: "06",
    vacant: "03",
  },
];

function StudentTable({ title, data, description }) {
  const values = [
    data.total,
    data.resident,
    data.nonResident,
  ];

  return (
    <section className="data-section">
      <div className="data-section-heading">
        <div>
          <p className="section-label">STUDENT DATA</p>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="student-table">
          <thead>
            <tr>
              <th>Sr. No.</th>

              {studentColumns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>

              {values.map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function AboutAdmissions() {
  return (
    <main className="about-page">

      {/* =========================================
          PAGE HEADER
      ========================================= */}

      <section className="inner-page-header">
        <div className="container">
          <h1>About & Admissions</h1>
        </div>
      </section>

      {/* =========================================
          INSTITUTIONAL IDENTITY
      ========================================= */}

      <section className="institution-section">
        <div className="container">

          <div className="institution-grid">

            {/* OFFICIAL NAME */}

            <div className="information-card institution-name-card">
              <div className="information-icon">
                <Building2 size={22} />
              </div>

              <div>
                <span>Official Name</span>
                <strong>{institution.name}</strong>
              </div>
            </div>

            {/* VILLAGE */}

            <div className="information-card">
              <div className="information-icon">
                <MapPin size={22} />
              </div>

              <div>
                <span>Village</span>
                <strong>{institution.address.village}</strong>
              </div>
            </div>

            {/* TALUKA */}

            <div className="information-card">
              <div className="information-icon">
                <MapPin size={22} />
              </div>

              <div>
                <span>Taluka</span>
                <strong>{institution.address.taluka}</strong>
              </div>
            </div>

            {/* DISTRICT */}

            <div className="information-card">
              <div className="information-icon">
                <MapPin size={22} />
              </div>

              <div>
                <span>District</span>
                <strong>{institution.address.district}</strong>
              </div>
            </div>

            {/* MEDIUM */}

            <div className="information-card">
              <div className="information-icon">
                <BookOpen size={22} />
              </div>

              <div>
                <span>Medium of Instruction</span>
                <strong>{institution.medium}</strong>
              </div>
            </div>

            {/* STANDARDS */}

            <div className="information-card">
              <div className="information-icon">
                <GraduationCap size={22} />
              </div>

              <div>
                <span>Standards / Curriculum</span>
                <strong>{institution.standards}</strong>
              </div>
            </div>

            {/* 7/12 UTARA */}

            <a
              href="https://drive.google.com/file/d/1hzm4sdOOEBGufnR9fXfDNRK2Z6DuLrd9/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="information-card-link"
            >
              <div className="information-card">
                <div className="information-icon">
                  <GraduationCap size={22} />
                </div>

                <div>
                  <span>7/12उतारा</span>
                  <strong>{institution.satbara}</strong>
                </div>
              </div>
            </a>

            {/* SCHOOL RECOGNITION ORDER */}

            <a
              href="https://drive.google.com/file/d/1J5bi8nBr7fEjmuYPDWiMYarj_MttkOLQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="information-card-link"
            >
              <div className="information-card">
                <div className="information-icon">
                  <GraduationCap size={22} />
                </div>

                <div>
                  <span>शाळा मान्यता आदेश</span>
                  <strong>{institution.schoolgrandorder}</strong>
                </div>
              </div>
            </a>

          </div>

          {/* IDENTITY DETAILS */}

          <div className="identity-details">

            <div>
              <span>Full Address</span>

              <strong>
                {institution.address.village},{" "}
                {institution.address.taluka},{" "}
                {institution.address.district},{" "}
                {institution.address.state} -{" "}
                {institution.address.pincode}
              </strong>
            </div>

            <div>
              <span>Registration / Recognition</span>

              <strong>{institution.registration}</strong>
            </div>

            <div>
              <span>Curriculum Offered</span>

              <strong>{institution.curriculum}</strong>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          ADMISSION CAPACITY
      ========================================= */}

      <section className="capacity-section">
        <div className="container">

          <div className="capacity-card">

            <div className="capacity-icon">
              <Users size={28} />
            </div>

            <div>
              <p className="section-label">ADMISSIONS</p>

              <h2>Sanctioned Admission Capacity</h2>

              <p>
                Total number of students permitted under the sanctioned
                institutional capacity.
              </p>
            </div>

            <div className="capacity-number">
              {institution.sanctionedCapacity}
              <span>Students</span>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          STUDENT TABLES
      ========================================= */}

      <section className="student-data-section">
        <div className="container">

          <div className="section-heading-simple">

            <p className="section-label">ENROLLMENT DATA</p>

            <h2>Student Information</h2>

            <p>
              Class-wise student information separated by residential status.
            </p>

          </div>

          <StudentTable
            title="Table 1 — Total Student Count"
            description="Class-wise total, resident and non-resident student count."
            data={studentData.total}
          />

          <StudentTable
            title="Table 2 — Students with Aadhaar Linked"
            description="Students whose Aadhaar information is linked."
            data={studentData.aadhaarLinked}
          />

          <StudentTable
            title="Table 3 — Students with Aadhaar Not Linked"
            description="Students whose Aadhaar information is not linked."
            data={studentData.aadhaarNotLinked}
          />

        </div>
      </section>

      {/* =========================================
          STAFF
      ========================================= */}

      <section className="staff-section">
        <div className="container">

          <div className="section-heading-simple">

            <p className="section-label">STAFF INFORMATION</p>

            <h2>Staff / Teacher Position</h2>

            <p>
              Sanctioned, filled and vacant positions for teaching and
              non-teaching staff.
            </p>

          </div>

          <div className="table-wrapper">

            <table className="staff-table">

              <thead>
                <tr>
                  <th>Category</th>
                  <th>Sanctioned</th>
                  <th>Filled</th>
                  <th>Vacant</th>
                </tr>
              </thead>

              <tbody>

                {staffData.map((staff) => (
                  <tr key={staff.category}>
                    <td>{staff.category}</td>
                    <td>{staff.sanctioned}</td>
                    <td>{staff.filled}</td>
                    <td>{staff.vacant}</td>
                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>
      </section>

      {/* =========================================
          EMPLOYEE / OFFICER DETAILS
      ========================================= */}

      <section className="employee-section">
        <div className="container">

          <div className="section-heading-simple">
            <h2>Employee Details</h2>
          </div>

          <div className="table-wrapper employee-table-wrapper">

            <table className="employee-table">

              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Employee Name</th>
                  <th>Designation / Post</th>
                  <th>Contact Number</th>
                  <th>Officer</th>
                  <th>Working at Ashram School</th>
                  <th>Sanctioned / Approved Post</th>
                  <th>Details</th>
                </tr>
              </thead>

              <tbody>

                {employeeData.map((employee, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{employee.name}</td>
                    <td>{employee.designation}</td>
                    <td>{employee.contact}</td>
                    <td>{employee.officer}</td>
                    <td>{employee.workingAtAshram}</td>
                    <td>{employee.sanctionedPost}</td>
                    <td>{employee.details}</td>
                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>
      </section>

      {/* =========================================
          HEADMASTER / SUPERINTENDENT PHOTOS
      ========================================= */}

      <section className="location-photo-section">
        <div className="container">

          <div className="section-heading-simple">

            <p className="section-label">
              LOCATION & PHOTOGRAPHS
            </p>

            <h2>
              Institutional Residential / Office Locations
            </h2>

            <p>
              Photographs and geographical coordinates of the Headmaster's
              room and Hostel Superintendent's residence.
            </p>

          </div>

          <div className="location-photo-grid">

            {locationPhotos.map((location) => (
              <article
                className="location-photo-card"
                key={location.title}
              >

                <div className="location-photo-image">

                  <img
                    src={location.image}
                    alt={location.title}
                  />

                </div>

                <div className="location-photo-content">

                  <h3>{location.title}</h3>

                  <p>{location.description}</p>

                  <div className="coordinates">

                    <div>
                      <span>Latitude</span>
                      <strong>{location.latitude}</strong>
                    </div>

                    <div>
                      <span>Longitude</span>
                      <strong>{location.longitude}</strong>
                    </div>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================
          BACK / NEXT
      ========================================= */}

      <section className="page-navigation">
        <div className="container page-navigation-inner">

          <a href="/" className="page-nav-link">
            <ArrowLeft size={17} />
            Home
          </a>

          <a href="/facilities" className="page-nav-link">
            Facilities & Gallery
            <ArrowRight size={17} />
          </a>

        </div>
      </section>

    </main>
  );
}
