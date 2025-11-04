// data/content.ts

// ─────────────────────────────────────────────────────────────────────────────
// Your existing "content" object (kept intact for Home page compatibility)
// ─────────────────────────────────────────────────────────────────────────────
export const content = {
  meta: {
    title: "STELZ Multiparking | Engineering Tomorrow’s Parking",
    description:
      "STELZ Multiparking provides innovative, automated car parking solutions designed for modern cities and smart infrastructure.",
    ogImage: "/assets/home/Logo.jpg",
    siteUrl: "https://stelzparking.com",
  },

  hero: {
    taglines: [
      "Engineering Tomorrow’s Parking",
      "Architects of Parking Excellence",
      "Parking. Redefined by Stelz.",
    ],
    images: ["/assets/home/HeroBg1.jpg", "/assets/home/HeroBg2.jpg", "/assets/home/HeroBg3.jpg"],
    highlights: [
      "DESINED FOR BOTH INDOOR AND OUTDOOR CAR PARKING APPLICATIONS",
      "INNOVATIVE PARKING SYSTEMS",
      "SPACE OPTIMIZATION",
      "ADVANCED TECHNOLOGY INTEGRATION",
      "SMART CITY COMPATIBILITY",
      "CUSTOMIZED CAR PARKING SOLUTIONS",
      "DESIGNED FOR SPACE SAVING WITH MULTI-CAR PARKING",
      "EASY OPERATION",
      "QUICK INSTALLATION, LONG-TERM VALUE",
    ],
    brochure: "/assets/brochure.pdf",
  },

  footprint: {
    title: "STELZ Footprint",
    projects: [
      { id: 1, image: "/assets/footprint/NCCUrbanPark.png",  name: "NCC Urban Park View", location: "Bengaluru" },
      { id: 2, image: "/assets/footprint/AragenLifeSciences.png", name: "Aragen Life Sciences", location: "Bengaluru" },
      { id: 3, image: "/assets/footprint/SattvaHorizon.png", name: "Sattva Horizon", spaces: "1270 No’s", location: "Bengaluru" },
      { id: 4, image: "/assets/footprint/ManipalHospital.png", name: "Manipal Hospital", spaces: "350 No’s", location: "Bengaluru" },
      { id: 5, image: "/assets/footprint/JyotiTechPark.png", name: "Jyoti Tech Park", spaces: "600 No’s", location: "Hyderabad" },
      { id: 6, image: "/assets/footprint/SparshHospital.png", name: "Sparsh Hospital", location: "Bengaluru" },
      { id: 7, image: "/assets/footprint/IBMIndia.jpg", name: "IBM India", spaces: "600 No’s", location: "Bengaluru" },
      { id: 8, image: "/assets/footprint/ConfidentSquaremall.png", name: "Confident Square Mall", location: "Bengaluru" },
      { id: 9, image: "/assets/footprint/JyothiGranules.png", name: "Jyothi Granules", spaces: "700 No’s", location: "Hyderabad" },
      { id: 10, image: "/assets/footprint/Centrum.png", name: "Centrum", spaces: "340 No’s", location: "Hyderabad" },
    ],
  },

  models: {
    title: "Parking Models",
    items: [
      { id: 1, image: "/assets/parking_models/PitPuzzle.jpg", title: "Pit Puzzle" },
      { id: 2, image: "/assets/parking_models/PuzzleParking.jpg", title: "Puzzle Parking" },
      { id: 3, image: "/assets/parking_models/Rotatory.jpg", title: "Rotatory" },
      { id: 4, image: "/assets/parking_models/OP-01.jpg", title: "OP -01" },
      { id: 5, image: "/assets/parking_models/3LevelPitPuzzle.jpg", title: "3-level Pit Puzzle" },
      { id: 6, image: "/assets/parking_models/3LevelPitStacker.jpg", title: "3-level Pit Stacker" },
      { id: 7, image: "/assets/parking_models/3LevelStackParking.jpg", title: "3-level Stack Parking" },
      { id: 8, image: "/assets/parking_models/CarHoist.jpg", title: "Car Hoist" },
      { id: 9, image: "/assets/parking_models/TurnTable.jpg", title: "Turn Table" },
      { id: 10, image: "/assets/parking_models/CantileverParking.jpg", title: "Cantilever Parking" },
    ],
    brochure: "/assets/brochure.pdf",
  },

  footer: {
    office: {
      title: "Office Address",
      address:
        "No. 1955, 2nd Floor, 5th Stage, BEML Layout, Rajarajeshwari Nagar, Bengaluru 560098.",
    },
    factory: {
      title: "Factory Address",
      address:
        "Sy. No. 56/2, Mr Rama and Sri.M.Maramkrishnappa Layout, Kere Road, Dasanapura Hobli, Machohalli Village, Bengaluru 560091.",
    },
    contact: {
      title: "Contact Info",
      phone: "080-50056701",
      mobile: "+91 90365 81605",
      email: "info@stelzparking.com",
      socials: {
        linkedin: "https://www.linkedin.com/company/stlezparking/?viewAsMember=true",
        instagram: "https://www.instagram.com/stelz_multiparking/?igsh=MXM2YmV3YWFmeTVoaw%3D%3D#",
        youtube: "https://www.youtube.com/@stelzparking",
        facebook: "https://www.facebook.com/people/STELZ-Parking/61553166070631/",
      },
    },
    copyright: "© 2025 Published by STELZ MULTIPARKING PVT LTD. All rights reserved.",
  },
} as const;
