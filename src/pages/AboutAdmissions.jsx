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
import superintendentImage from "../assets/Gallery/Superintendent.jpeg";

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

const employeeData = [
  {
    name: "—",
    designation: "—",
    contact: "—",
    officer: "—",
    workingAtAshram: "—",
    sanctionedPost: "—",
    details: "—",
  },
  {
    name: "—",
    designation: "—",
    contact: "—",
    officer: "—",
    workingAtAshram: "—",
    sanctionedPost: "—",
    details: "—",
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
    image: superintendentImage,
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