import {
  Camera,
  Coffee,
  Droplets,
  Flame,
  GraduationCap,
  MapPin,
  Monitor,
  Shield,
  Trees,
  Users,
  Warehouse,
} from "lucide-react";

/* =========================================
   IMAGE IMPORTS
========================================= */

import classroom8 from "../assets/Gallery/8th.jpeg";
import classroom9 from "../assets/Gallery/9th.jpeg";
import classroom10 from "../assets/Gallery/10th.jpeg";

import boysRoom from "../assets/Gallery/BoysRoom.jpeg";
import girlsRoom from "../assets/Gallery/GirlsRoom.jpeg";

import diningHallImage from "../assets/Gallery/Hall.jpeg";

import toiletsImage from "../assets/Gallery/TB.jpeg";
import waterImage from "../assets/Gallery/water.jpeg";
import digitalFacilitiesImage from "../assets/Gallery/Digital facilities.jpeg";
import fireImage from "../assets/Gallery/Fire.jpeg";
import cctvImage from "../assets/Gallery/CCTV.png";
import kitchenImage from "../assets/Gallery/Kit.jpeg";
import ironGateImage from "../assets/Gallery/Irongate.jpeg";
import treeImage from "../assets/Gallery/Tree.jpeg";

import parentsImage from "../assets/Gallery/parent.jpeg";
import alumniImage from "../assets/Gallery/alu.png";

/* =========================================
   HOSTEL TIMETABLE
========================================= */

const hostelTimetable = [
  {
    meal: "Breakfast",
    time: "—",
    details: "Breakfast schedule",
  },
  {
    meal: "Lunch",
    time: "—",
    details: "Lunch schedule",
  },
  {
    meal: "Evening Meal",
    time: "—",
    details: "Evening meal schedule",
  },
  {
    meal: "Festival / Special Meals",
    time: "—",
    details: "Meal details for festivals and special occasions",
  },
];

/* =========================================
   SCHOOL TIMETABLE
========================================= */

const schoolTimetable = [
  {
    period: "Period 1",
    time: "—",
  },
  {
    period: "Period 2",
    time: "—",
  },
  {
    period: "Period 3",
    time: "—",
  },
  {
    period: "Period 4",
    time: "—",
  },
  {
    period: "Period 5",
    time: "—",
  },
  {
    period: "Period 6",
    time: "—",
  },
  {
    period: "Period 7",
    time: "—",
  },
  {
    period: "Period 8",
    time: "—",
  },
  {
    period: "Period 9",
    time: "—",
  },
];

/* =========================================
   WEEKLY FOOD MENU
========================================= */

const weeklyFoodMenu = [
  {
    day: "सोमवार",
    milk: "प्रतिदिनास २०० मिली",
    afternoonSnack: "मसालेभात",
    morningMeal: "चपाती, भात, तूरडाळ वरण, मटकी, भाजी",
    eveningMeal: "चपाती, भात, मटकी डाळ आमटी, सुकी भाजी",
    pulses: "हुलगा",
    other: "खारे शेंगदाणे",
  },
  {
    day: "मंगळवार",
    milk: "प्रतिदिनास २०० मिली",
    afternoonSnack: "लापसी",
    morningMeal: "चपाती, भात, तूरडाळ वरण, चवळीची भाजी",
    eveningMeal: "चपाती, भात, मूगडाळ वरण, सुकी भाजी",
    pulses: "वाटाणा",
    other: "चटणी",
  },
  {
    day: "बुधवार",
    milk: "प्रतिदिनास २०० मिली",
    afternoonSnack: "पोहे",
    morningMeal: "चपाती, भात, तूरडाळ वरण, हुलगा, भाजी",
    eveningMeal: "चपाती, भात, हरभरा आमटी, सुकी भाजी",
    pulses: "मटकी",
    other: "राजगिरा लाडू",
  },
  {
    day: "गुरुवार",
    milk: "प्रतिदिनास २०० मिली",
    afternoonSnack: "खिचडीभात",
    morningMeal: "चपाती, भात, तूरडाळ वरण, वाटाणा, भाजी",
    eveningMeal: "चपाती, भात, मसूरडाळ वरण, सुकी भाजी",
    pulses: "हरभरा",
    other: "खारे शेंगदाणे",
  },
  {
    day: "शुक्रवार",
    milk: "प्रतिदिनास २०० मिली",
    afternoonSnack: "उपीट",
    morningMeal: "चपाती, भात, तूरडाळ वरण, मसूर, भाजी",
    eveningMeal: "चपाती, भात, मटकी डाळ आमटी, सुकी भाजी",
    pulses: "हुलगा",
    other: "चटणी",
  },
  {
    day: "शनिवार",
    milk: "प्रतिदिनास २०० मिली",
    afternoonSnack: "शिरा",
    morningMeal: "चपाती, भात, तूरडाळ वरण, हरभरा, भाजी",
    eveningMeal: "चपाती, भात, मूगडाळ वरण, सुकी भाजी",
    pulses: "वाटाणा",
    other: "राजगिरा लाडू",
  },
  {
    day: "रविवार",
    milk: "प्रतिदिनास २०० मिली",
    afternoonSnack: "पोहे",
    morningMeal: "चपाती, भात, तूरडाळ वरण, हुलगा, भाजी",
    eveningMeal: "चपाती, भात, मसूरडाळ वरण, सुकी भाजी",
    pulses: "मटकी",
    other: "खारे शेंगदाणे",
  },
];

/* =========================================
   CLASSROOMS
========================================= */

const classrooms = [
  {
    title: "8th Classrooms",
    image: classroom8,
    count: "—",
    area: "— sq. ft.",
  },
  {
    title: "9th Classrooms",
    image: classroom9,
    count: "—",
    area: "— sq. ft.",
  },
  {
    title: "10th Classrooms",
    image: classroom10,
    count: "—",
    area: "— sq. ft.",
  },
];

/* =========================================
   RESIDENTIAL ROOMS
========================================= */

const residentialRooms = [
  {
    title: "Boys' Residential Rooms",
    image: boysRoom,
    rooms: "—",
    area: "— sq. ft.",
    beds: "—",
    mattresses: "—",
  },
  {
    title: "Girls' Residential Rooms",
    image: girlsRoom,
    rooms: "—",
    area: "— sq. ft.",
    beds: "—",
    mattresses: "—",
  },
];

/* =========================================
   DINING HALL
========================================= */

const diningHall = {
  image: diningHallImage,
};

/* =========================================
   OTHER FACILITIES
========================================= */

const simpleFacilities = [
  {
    title: "Toilets & Bathrooms",
    icon: ({ size }) => (
      <span style={{ fontSize: size }}>🚻</span>
    ),
    image: toiletsImage,
    description:
      "Separate toilet and bathroom facilities for boys and girls.",
    items: [
      "Boys' toilet / bathroom photographs",
      "Girls' toilet / bathroom photographs",
    ],
  },
  {
    title: "Drinking Water Sources",
    icon: Droplets,
    image: waterImage,
    description:
      "Photographs and information about drinking-water sources and RO/filter facilities.",
    items: [
      "Drinking-water source photographs",
      "RO / water filter photographs",
      "Total filter count: —",
    ],
  },
  {
    title: "Computer Room & Digital Facilities",
    icon: Monitor,
    image: digitalFacilitiesImage,
    description:
      "Computer room and digital learning facilities available within the institution.",
    items: [
      "Computer room photograph",
      "Digital facility photographs",
      "Computer / digital equipment details",
    ],
  },
  {
    title: "Fire Extinguishers",
    icon: Flame,
    image: fireImage,
    description:
      "Photographs documenting fire extinguishers installed within the premises.",
    items: [
      "Fire extinguisher photographs",
      "Location / placement details",
    ],
  },
  {
    title: "CCTV Cameras",
    icon: Camera,
    image: cctvImage,
    description:
      "Photographs of CCTV cameras installed in the Ashram School and premises.",
    items: [
      "CCTV camera photographs",
      "Installed locations",
      "Coverage / installation details",
    ],
  },
  {
    title: "Kitchen & Storeroom",
    icon: Warehouse,
    image: kitchenImage,
    description:
      "Photographs documenting the kitchen and storeroom facilities.",
    items: [
      "Kitchen photograph",
      "Storeroom photograph",
      "Facility details",
    ],
  },
  {
    title: "Iron Gate & Boundary Wall",
    icon: Shield,
    image: ironGateImage,
    description:
      "Photographs of the main iron gate and protective boundary wall.",
    items: [
      "Iron gate photograph",
      "Boundary / protective wall photograph",
    ],
  },
  {
    title: "Tree Plantation",
    icon: Trees,
    image: treeImage,
    description:
      "Photographs of trees planted within the Ashram School premises.",
    items: [
      "Tree plantation photographs",
      "Plantation / campus details",
    ],
  },
];

/* =========================================
   COMMITTEE DATA
========================================= */

const committeeMembers = [
  {
    name: "—",
    designation: "—",
    contact: "—",
  },
];

const alumniMembers = [
  {
    name: "—",
    year: "—",
    contact: "—",
  },
];

/* =========================================
   PHOTO COMPONENT
========================================= */

function PhotoPlaceholder({ title, image }) {
  return (
    <div className="facility-photo">
      <img src={image} alt={title} />

      <div className="facility-photo-caption">
        <Camera size={16} />
        <span>{title}</span>
      </div>
    </div>
  );
}

/* =========================================
   MAIN PAGE
========================================= */

export default function FacilitiesGallery() {
  return (
    <main className="facilities-page">

      {/* PAGE HEADER */}
      <section className="inner-page-header">
        <div className="container">
          <h1>Facilities & Gallery</h1>
        </div>
      </section>

      {/* =========================================
          TIMETABLES
      ========================================= */}

      <section className="facility-section">
        <div className="container">

          <div className="section-heading-simple">
            <p className="section-label">TIMETABLES</p>

            <h2>Hostel & School Department Timetables</h2>

            <p>
              Daily schedules followed by the hostel and school departments.
            </p>
          </div>

          <div className="timetable-grid">

            {/* HOSTEL */}
            <div className="facility-card">

              <div className="facility-card-header">

                <div className="facility-icon">
                  <Coffee size={22} />
                </div>

                <div>
                  <h3>Hostel Department Timetable</h3>
                  <p>Breakfast, lunch and evening meal schedule</p>
                </div>

              </div>

              <div className="table-wrapper">

                <table className="facility-table">

                  <thead>
                    <tr>
                      <th>Meal</th>
                      <th>Time</th>
                      <th>Details</th>
                    </tr>
                  </thead>

                  <tbody>

                    {hostelTimetable.map((item) => (
                      <tr key={item.meal}>
                        <td>{item.meal}</td>
                        <td>{item.time}</td>
                        <td>{item.details}</td>
                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>

            </div>

            {/* SCHOOL */}
            <div className="facility-card">

              <div className="facility-card-header">

                <div className="facility-icon">
                  <GraduationCap size={22} />
                </div>

                <div>
                  <h3>School Department Timetable</h3>
                  <p>Academic periods and daily school schedule</p>
                </div>

              </div>

              <div className="table-wrapper">

                <table className="facility-table">

                  <thead>
                    <tr>
                      <th>Period</th>
                      <th>Time</th>
                    </tr>
                  </thead>

                  <tbody>

                    {schoolTimetable.map((item) => (
                      <tr key={item.period}>
                        <td>{item.period}</td>
                        <td>{item.time}</td>
                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>

            </div>

          </div>

          {/* =========================================
              WEEKLY FOOD MENU
          ========================================= */}

          <div className="weekly-food-menu-card">

            <div className="facility-card-header">

              <div className="facility-icon">
                <Coffee size={22} />
              </div>

              <div>
                <h3>
                  साप्ताहिक भोजन मेनू तक्ता सन-२०२६-२०२७
                </h3>

                <p>वसतिगृह विभाग</p>
              </div>

            </div>

            <div className="weekly-food-table-wrapper">

              <table className="weekly-food-table">

                <thead>
                  <tr>
                    <th>वार</th>
                    <th>दूध</th>
                    <th>दुपार नाष्टा</th>
                    <th>फळ</th>
                    <th>सकाळचे जेवण</th>
                    <th>फळ</th>
                    <th>संध्याकाळचे जेवण</th>
                    <th>कडधान्य</th>
                    <th>इतर</th>
                  </tr>
                </thead>

                <tbody>

                  {weeklyFoodMenu.map((item, index) => (
                    <tr key={item.day}>

                      <td>{item.day}</td>

                      {index === 0 && (
                        <td rowSpan={7}>
                          {item.milk}
                        </td>
                      )}

                      <td>{item.afternoonSnack}</td>

                      {index === 0 && (
                        <td rowSpan={7}>
                          उपलब्धतेनुसार
                        </td>
                      )}

                      <td>{item.morningMeal}</td>

                      {index === 0 && (
                        <td rowSpan={7}>
                          उपलब्धतेनुसार
                        </td>
                      )}

                      <td>{item.eveningMeal}</td>

                      <td>{item.pulses}</td>

                      <td>{item.other}</td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

            <p className="weekly-food-note">
              सन समारंभाच्या दिवशी मिठाईचे भोजन देण्यात येते.
            </p>

          </div>

        </div>
      </section>

      {/* =========================================
          CLASSROOMS
      ========================================= */}

      <section className="facility-section facility-section-gray">

        <div className="container">

          <div className="section-heading-simple">

            <p className="section-label">
              EDUCATIONAL FACILITIES
            </p>

            <h2>Classrooms</h2>

            <p>
              Class-wise classroom photographs with the number of
              classrooms and area.
            </p>

          </div>

          <div className="facility-card-grid">

            {classrooms.map((classroom) => (
              <article
                className="gallery-card"
                key={classroom.title}
              >

                <PhotoPlaceholder
                  title={classroom.title}
                  image={classroom.image}
                />

                <div className="gallery-card-content">

                  <h3>{classroom.title}</h3>

                  <div className="facility-stats">

                    <div>
                      <span>Number of Classrooms</span>
                      <strong>{classroom.count}</strong>
                    </div>

                    <div>
                      <span>Area</span>
                      <strong>{classroom.area}</strong>
                    </div>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================
          RESIDENTIAL ROOMS
      ========================================= */}

      <section className="facility-section">

        <div className="container">

          <div className="section-heading-simple">

            <p className="section-label">
              RESIDENTIAL FACILITIES
            </p>

            <h2>Student Residential Rooms</h2>

            <p>
              Photographs and details of student residential rooms,
              including room, area, bed and mattress information.
            </p>

          </div>

          <div className="facility-card-grid">

            {residentialRooms.map((room) => (
              <article
                className="gallery-card"
                key={room.title}
              >

                <PhotoPlaceholder
                  title={room.title}
                  image={room.image}
                />

                <div className="gallery-card-content">

                  <h3>{room.title}</h3>

                  <div className="facility-stats four-column">

                    <div>
                      <span>Rooms</span>
                      <strong>{room.rooms}</strong>
                    </div>

                    <div>
                      <span>Area</span>
                      <strong>{room.area}</strong>
                    </div>

                    <div>
                      <span>Beds</span>
                      <strong>{room.beds}</strong>
                    </div>

                    <div>
                      <span>Mattresses</span>
                      <strong>{room.mattresses}</strong>
                    </div>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================
          DINING HALL / EVENTS
      ========================================= */}

      <section className="facility-section facility-section-gray">

        <div className="container">

          <div className="section-heading-simple">

            <h2>Event & Dining Hall</h2>

          </div>

          <div className="dining-layout">

            <PhotoPlaceholder
              title="Dining Hall"
              image={diningHall.image}
            />

            <div className="dining-information">

              <h3>Events Held in the School</h3>

              <p>Various Events</p>

              <div className="inventory-grid">

                <div>
                  <span>01.</span>
                  <strong>Independence Day</strong>
                </div>

                <div>
                  <span>02.</span>
                  <strong>Republic Day</strong>
                </div>

                <div>
                  <span>03.</span>
                  <strong>Gandhi Jayanti</strong>
                </div>

                <div>
                  <span>04.</span>
                  <strong>Teachers' Day</strong>
                </div>

                <div>
                  <span>05.</span>
                  <strong>Children's Day</strong>
                </div>

                <div>
                  <span>06.</span>
                  <strong>Annual Sports Day</strong>
                </div>

                <div>
                  <span>07.</span>
                  <strong>Annual Cultural Programme</strong>
                </div>

                <div>
                  <span>08.</span>
                  <strong>Prize Distribution Ceremony</strong>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================
          OTHER FACILITIES
      ========================================= */}

      <section className="facility-section facility-section-gray">

        <div className="container">

          <div className="section-heading-simple">

            <p className="section-label">
              CAMPUS FACILITIES
            </p>

            <h2>Other Facilities</h2>

            <p>
              Photographic documentation of other important
              facilities and infrastructure.
            </p>

          </div>

          <div className="simple-facility-grid">

            {simpleFacilities.map((facility) => {

              const Icon = facility.icon;

              return (
                <article
                  className="simple-facility-card"
                  key={facility.title}
                >

                  <div className="simple-facility-icon">
                    <Icon size={23} />
                  </div>

                  <h3>{facility.title}</h3>

                  <p>{facility.description}</p>

                  <div className="facility-requirements">

                    {facility.items.map((item) => (
                      <div key={item}>
                        <span>✓</span>
                        {item}
                      </div>
                    ))}

                  </div>

                  <PhotoPlaceholder
                    title={facility.title}
                    image={facility.image}
                  />

                </article>
              );

            })}

          </div>

        </div>

      </section>

      {/* =========================================
          COMMITTEES & ALUMNI
      ========================================= */}

      <section className="facility-section">

        <div className="container">

          <div className="section-heading-simple">

            <p className="section-label">
              COMMUNITY PARTICIPATION
            </p>

            <h2>
              Parents' Committee & Alumni Association
            </h2>

            <p>
              Lists, photographs and contact information of the
              Parents' Committee and Alumni Association.
            </p>

          </div>

          <div className="committee-grid">

            {/* PARENTS */}
            <div className="committee-card">

              <div className="committee-header">

                <div className="facility-icon">
                  <Users size={22} />
                </div>

                <div>
                  <h3>Parents' Committee</h3>
                  <p>
                    Committee members and contact details
                  </p>
                </div>

              </div>

              <PhotoPlaceholder
                title="Parents' Committee"
                image={parentsImage}
              />

              <div className="table-wrapper">

                <table className="facility-table">

                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Name</th>
                      <th>Designation</th>
                      <th>Contact</th>
                    </tr>
                  </thead>

                  <tbody>

                    {committeeMembers.map((member, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{member.name}</td>
                        <td>{member.designation}</td>
                        <td>{member.contact}</td>
                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>

            </div>

            {/* ALUMNI */}
            <div className="committee-card">

              <div className="committee-header">

                <div className="facility-icon">
                  <GraduationCap size={22} />
                </div>

                <div>
                  <h3>Alumni Association</h3>
                  <p>
                    Alumni members and contact details
                  </p>
                </div>

              </div>

              <PhotoPlaceholder
                title="Alumni Association"
                image={alumniImage}
              />

              <div className="table-wrapper">

                <table className="facility-table">

                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Name</th>
                      <th>Year</th>
                      <th>Contact</th>
                    </tr>
                  </thead>

                  <tbody>

                    {alumniMembers.map((member, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{member.name}</td>
                        <td>{member.year}</td>
                        <td>{member.contact}</td>
                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================
          PAGE NAVIGATION
      ========================================= */}

      <section className="page-navigation">

        <div className="container page-navigation-inner">

          <a
            href="/about"
            className="page-nav-link"
          >
            ← About & Admissions
          </a>

          <a
            href="/contact"
            className="page-nav-link"
          >
            Contact →
          </a>

        </div>

      </section>

    </main>
  );
}