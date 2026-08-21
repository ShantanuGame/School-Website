import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About & Admissions",
        facilities: "Facilities & Gallery",
        contact: "Contact",
      },

      language: {
        english: "English",
        marathi: "मराठी",
      },

      home: {
        welcome: "Welcome to Ashram School",
        subtitle:
          "An educational institution dedicated to providing quality education, residential facilities and holistic development of students.",
        learnMore: "Learn More",
      },

      about: {
        title: "About & Admissions",
        institutionalInfo: "Institutional Information",
        address: "Full Address",
        district: "District",
        taluka: "Taluka",
        village: "Village",
        registration: "Registration / Recognition",
        medium: "Medium of Instruction",
        curriculum: "Standards / Curriculum Offered",
        capacity: "Sanctioned Admission Capacity",

        totalStudents: "Total Student Count",
        aadhaarLinked: "Students with Aadhaar Linked",
        aadhaarNotLinked: "Students with Aadhaar Not Linked",

        staff: "Staff / Teacher Details",
        sanctioned: "Sanctioned",
        filled: "Filled",
        vacant: "Vacant",

        employeeDetails: "Employee Details",
        employeeName: "Employee Name",
        designation: "Designation",
        contactNumber: "Contact Number",

        officerDetails: "Officer Details",
        officersWorking: "Number of Officers Currently Working",
        posts: "Designation / Post",

        approvedEmployees: "Approved / Sanctioned Post Related Employees",
        numberEmployees: "Number of Employees",

        residentialOffice: "Residential / Office Photos",
        headmasterRoom: "Headmaster's Room",
        superintendentResidence: "Hostel Superintendent's Residence",
        latitude: "Latitude",
        longitude: "Longitude",
      },

      facilities: {
        title: "Facilities & Gallery",
        subtitle:
          "Information, photographs and documentation of the educational, residential, recreational and other facilities available within the institution.",

        timetables: "Hostel & School Department Timetables",
        hostelTimetable: "Hostel Department Timetable",
        schoolTimetable: "School Department Timetable",
        breakfast: "Breakfast",
        lunch: "Lunch",
        eveningMeal: "Evening Meal",

        classrooms: "Classrooms",
        primaryClassrooms: "Primary Classrooms",
        secondaryClassrooms: "Secondary Classrooms",
        higherSecondaryClassrooms: "Higher Secondary Classrooms",
        numberClassrooms: "Number of Classrooms",
        area: "Area",

        residential: "Student Residential Rooms",
        boysRooms: "Boys' Residential Rooms",
        girlsRooms: "Girls' Residential Rooms",
        rooms: "Rooms",
        beds: "Beds",
        mattresses: "Mattresses",

        dining: "Dining Hall",
        plates: "Plates",
        bowls: "Bowls",
        glasses: "Glasses",
        diningTables: "Dining Tables",

        geographical: "Campus Locations & GPS",
        playground: "Playground",
        boysBlock: "Boys' Residential Block",
        girlsBlock: "Girls' Residential Block",
        googleMaps: "Google Maps / Geographical Location",

        otherFacilities: "Other Facilities",
        toilets: "Toilets & Bathrooms",
        drinkingWater: "Drinking Water Sources",
        computerRoom: "Computer Room & Digital Facilities",
        fireExtinguishers: "Fire Extinguishers",
        cctv: "CCTV Cameras",
        kitchen: "Kitchen & Storeroom",
        boundary: "Iron Gate & Boundary Wall",
        plantation: "Tree Plantation",

        community: "Parents' Committee & Alumni Association",
        parentsCommittee: "Parents' Committee",
        alumni: "Alumni Association",
        name: "Name",
        year: "Year",
      },

      contact: {
        title: "Contact",
        subtitle:
          "Contact information and geographical location of the Ashram School.",
        phone: "Phone Number",
        contactNumbers: "Contact Numbers",
        officialCommunication: "Official Communication",
        officialEmail: "Official Email",
        contactPerson: "Contact Person",
        postalAddress: "Postal Address",
        correspondenceAddress: "Correspondence Address",
        location: "Location",
        findUs: "Find Us",
        coordinates: "Geographical location of the Ashram School.",
      },

      common: {
        photo: "Photo",
        details: "Details",
        location: "Location",
        contact: "Contact",
      },

      footer: {
        institution: "Educational Institution",
      },
    },
  },

  mr: {
    translation: {
      nav: {
        home: "मुख्यपृष्ठ",
        about: "आमच्याबद्दल व प्रवेश",
        facilities: "सुविधा व छायाचित्रे",
        contact: "संपर्क",
      },

      language: {
        english: "English",
        marathi: "मराठी",
      },

      home: {
        welcome: "आश्रमशाळेत आपले स्वागत आहे",
        subtitle:
          "विद्यार्थ्यांना दर्जेदार शिक्षण, निवासी सुविधा आणि सर्वांगीण विकासाच्या संधी उपलब्ध करून देणारी शैक्षणिक संस्था.",
        learnMore: "अधिक माहिती",
      },

      about: {
        title: "आमच्याबद्दल व प्रवेश",
        institutionalInfo: "संस्थेची माहिती",
        address: "संपूर्ण पत्ता",
        district: "जिल्हा",
        taluka: "तालुका",
        village: "गाव",
        registration: "नोंदणी / मान्यता",
        medium: "शिक्षणाचे माध्यम",
        curriculum: "शैक्षणिक स्तर / अभ्यासक्रम",
        capacity: "मंजूर प्रवेश क्षमता",

        totalStudents: "एकूण विद्यार्थी संख्या",
        aadhaarLinked: "आधार संलग्न विद्यार्थी",
        aadhaarNotLinked: "आधार संलग्न नसलेले विद्यार्थी",

        staff: "कर्मचारी / शिक्षक तपशील",
        sanctioned: "मंजूर",
        filled: "कार्यरत",
        vacant: "रिक्त",

        employeeDetails: "कर्मचारी तपशील",
        employeeName: "कर्मचाऱ्याचे नाव",
        designation: "पदनाम",
        contactNumber: "संपर्क क्रमांक",

        officerDetails: "अधिकारी तपशील",
        officersWorking: "सध्या कार्यरत अधिकाऱ्यांची संख्या",
        posts: "पद / पदनाम",

        approvedEmployees: "मंजूर / स्वीकृत पदांवरील कर्मचारी",
        numberEmployees: "कर्मचाऱ्यांची संख्या",

        residentialOffice: "निवासी / कार्यालयीन छायाचित्रे",
        headmasterRoom: "मुख्याध्यापकांचे कक्ष",
        superintendentResidence: "वसतिगृह अधीक्षकांचे निवासस्थान",
        latitude: "अक्षांश",
        longitude: "रेखांश",
      },

      facilities: {
        title: "सुविधा व छायाचित्रे",
        subtitle:
          "संस्थेतील शैक्षणिक, निवासी, मनोरंजनात्मक आणि इतर सुविधांची माहिती व छायाचित्रे.",

        timetables: "वसतिगृह व शाळा विभागाचे वेळापत्रक",
        hostelTimetable: "वसतिगृह विभागाचे वेळापत्रक",
        schoolTimetable: "शाळा विभागाचे वेळापत्रक",
        breakfast: "नाश्ता",
        lunch: "दुपारचे जेवण",
        eveningMeal: "सायंकाळचे जेवण",

        classrooms: "वर्गखोल्या",
        primaryClassrooms: "प्राथमिक वर्गखोल्या",
        secondaryClassrooms: "माध्यमिक वर्गखोल्या",
        higherSecondaryClassrooms: "उच्च माध्यमिक वर्गखोल्या",
        numberClassrooms: "वर्गखोल्यांची संख्या",
        area: "क्षेत्रफळ",

        residential: "विद्यार्थी निवासी खोल्या",
        boysRooms: "मुलांच्या निवासी खोल्या",
        girlsRooms: "मुलींच्या निवासी खोल्या",
        rooms: "खोल्या",
        beds: "खाटा",
        mattresses: "गाद्या",

        dining: "भोजनगृह",
        plates: "ताटे",
        bowls: "वाट्या",
        glasses: "ग्लास",
        diningTables: "भोजनाची टेबल्स",

        geographical: "परिसरातील ठिकाणे व GPS",
        playground: "क्रीडांगण",
        boysBlock: "मुलांचे निवासी भवन",
        girlsBlock: "मुलींचे निवासी भवन",
        googleMaps: "Google नकाशा / भौगोलिक स्थान",

        otherFacilities: "इतर सुविधा",
        toilets: "शौचालये व स्नानगृहे",
        drinkingWater: "पिण्याच्या पाण्याचे स्रोत",
        computerRoom: "संगणक कक्ष व डिजिटल सुविधा",
        fireExtinguishers: "अग्निशामक यंत्रे",
        cctv: "CCTV कॅमेरे",
        kitchen: "स्वयंपाकघर व साठवण कक्ष",
        boundary: "लोखंडी गेट व संरक्षक भिंत",
        plantation: "वृक्षारोपण",

        community: "पालक समिती व माजी विद्यार्थी संघटना",
        parentsCommittee: "पालक समिती",
        alumni: "माजी विद्यार्थी संघटना",
        name: "नाव",
        year: "वर्ष",
      },

      contact: {
        title: "संपर्क",
        subtitle:
          "आश्रमशाळेची संपर्क माहिती आणि भौगोलिक स्थान.",
        phone: "दूरध्वनी क्रमांक",
        contactNumbers: "संपर्क क्रमांक",
        officialCommunication: "अधिकृत संपर्क",
        officialEmail: "अधिकृत ई-मेल",
        contactPerson: "संपर्क व्यक्ती",
        postalAddress: "टपालाचा पत्ता",
        correspondenceAddress: "पत्रव्यवहाराचा पत्ता",
        location: "स्थान",
        findUs: "आम्हाला शोधा",
        coordinates: "आश्रमशाळेचे भौगोलिक स्थान.",
      },

      common: {
        photo: "छायाचित्र",
        details: "तपशील",
        location: "स्थान",
        contact: "संपर्क",
      },

      footer: {
        institution: "शैक्षणिक संस्था",
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;