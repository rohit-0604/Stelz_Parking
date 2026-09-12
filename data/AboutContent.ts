// data/AboutContent.ts

/** ===========
 *  Types
 *  =========== */
export type RichSegment =
  | { type: "text"; text: string }
  | { type: "bold"; text: string };

export type RichParagraph = RichSegment[];

/** A section inside a tab (heading is optional for “paragraph-only” blocks) */
export interface AboutSection {
  heading?: string;
  paragraphs?: RichParagraph[];
  /** For bulleted lists where the label is bold (e.g., “Design & Engineering”) */
  items?: { label?: string; text: string }[];
}

/** One tab worth of content (About / Vision / Mission) */
export interface TabContent {
  sections: AboutSection[];
}

/** Why-cards under “Why STELZ Multiparking” */
export interface WhyCard {
  id: number;
  icon: string;
  title: string;
  text: string;
}

/** Philosophy section */
export interface PhilosophyStep {
  id: string;
  title: string;
  body: string;
}

export interface PhilosophyContent {
  title: string;
  body: string;
  steps: PhilosophyStep[];
}

/** Top intro block */
export interface IntroContent {
  title: string;
  paragraphs: RichParagraph[];
}

/** Master shape to export */
export interface AboutContentFile {
  intro: IntroContent;
  tabs: {
    about: TabContent;
    vision: TabContent;
    mission: TabContent;
  };
  why: {
    title: string;
    cards: WhyCard[];
  };
  philosophy: PhilosophyContent;
}

/** ===========
 *  Content
 *  =========== */
export const ABOUT_CONTENT: AboutContentFile = {
  /* --------------------------- INTRO (white bg) --------------------------- */
  intro: {
    title: "WELCOME TO STELZ MULTIPARKING",
    paragraphs: [
      [
        {
          type: "text",
          text:
            "STELZ Parking is a premier expert in the design, supply, manufacturing, installation, testing, commissioning, and maintenance of advanced Mechanical Car Parking Systems. With a firm commitment to innovation, quality, and reliability, we deliver cutting-edge solutions that enhance urban mobility by optimizing parking space while ensuring convenience and efficiency for modern cities. Headquartered in Sample City, Test State, our company has built a strong national presence, offering top-tier products and services across India to a diverse range of clients, including individual property owners, commercial complexes, and business partners. At STELZ Parking, we take pride in our ability to provide dependable, high-quality parking solutions that not only meet the current demands of urban development but also set new standards in functionality, sustainability, and customer satisfaction."
        }
      ]
    ]
  },

  /* --------------------------- TABS (one component) ---------------------- */
  tabs: {
    /* ============== ABOUT tab ============== */
    about: {
      sections: [
        {
        heading: "Revolutionizing Urban Parking Solutions",
        paragraphs: [
            [
            {
                type: "text",
                text:
                "STELZ Parking stands at the forefront of India’s mechanical car parking industry, delivering innovative, space-efficient solutions that address the evolving challenges of urban mobility. We have established a robust national presence, transforming the parking landscape across metropolitan cities and emerging urban centers throughout India."
            }
            ]
        ]
        },


        // 2) Our Expertise — has a small lead paragraph and a labeled items list
        {
          heading: "Our Expertise",
          paragraphs: [
            [
              {
                type: "text",
                text:
                  "As premier specialists in advanced Mechanical Car Parking Systems, we offer comprehensive end-to-end solutions encompassing:"
              }
            ]
          ],
          items: [
            {
              label: "Design & Engineering",
              text:
                "Creating customized parking solutions tailored to unique spatial requirements and architectural constraints."
            },
            {
              label: "Manufacturing",
              text:
                "Producing high-quality, reliable systems with precision engineering and superior materials."
            },
            {
              label: "Installation",
              text:
                "Expert deployment with minimal disruption to surrounding environments."
            },
            {
              label: "Testing & Commissioning",
              text:
                "Rigorous quality assurance to ensure optimal performance."
            },
            {
              label: "Maintenance",
              text:
                "Proactive service programs that maximize system longevity and operational efficiency."
            }
          ]
        },

        // 3) Our Commitment — lead paragraph + labeled items
        {
          heading: "Our Commitment",
          paragraphs: [
            [
              {
                type: "text",
                text:
                  "At STELZ Parking, we are driven by an unwavering commitment to excellence in every aspect of our operations:"
              }
            ]
          ],
          items: [
            {
              label: "Innovation",
              text:
                "Continuously developing cutting-edge technologies that set new industry standards."
            },
            {
              label: "Quality",
              text:
                "Maintaining rigorous quality control processes throughout design, manufacturing, and installation."
            },
            {
              label: "Reliability",
              text:
                "Building systems that perform consistently with minimal downtime."
            },
            {
              label: "Sustainability",
              text:
                "Creating parking solutions that reduce environmental impact through efficient space utilization."
            },
            {
              label: "Modernization",
              text:
                "The concept of modernization defines, enhancement of existing applications or their migration from traditional architecture to the latest one. This change makes technological advance in every aspect of system that means integration of new functionalities. The Implementation of modernization gives big boost in many areas."
            },
            {
              label: "Customer Satisfaction",
              text:
                "Delivering personalized service that exceeds expectations."
            }
          ]
        },

        // 4) Our Impact — lead paragraph + labeled items
        {
          heading: "Our Impact",
          paragraphs: [
            [
              {
                type: "text",
                text:
                  "Our advanced parking systems deliver tangible benefits that extend beyond simple vehicle storage:"
              }
            ]
          ],
          items: [
            {
              label: "Space Optimization",
              text:
                "Maximizing parking capacity in limited urban spaces."
            },
            {
              label: "Enhanced Property Value",
              text:
                "Adding premium amenities to residential and commercial developments."
            },
            {
              label: "Urban Beautification",
              text:
                "Reducing street congestion and improving cityscapes."
            },
            {
              label: "Environmental Benefits",
              text:
                "Minimizing emissions through reduced vehicle circulation."
            },
            {
              label: "Safety & Security",
              text:
                "Providing protected environments for vehicle storage."
            }
          ]
        }
      ]
    },

    /* ============== VISION tab ============== */
    vision: {
      sections: [
        // First block: paragraph only (no heading)
        {
          paragraphs: [
            [
              {
                type: "text",
                text:
                  "At STELZ Parking, we envision a future where urban mobility transcends traditional constraints, driven by intelligent mechanical parking systems that harmonize efficiency, sustainability, and human-centric design. As cities across India grapple with rapid urbanization and space scarcity,our goal is to redefine parking infrastructure by pioneering solutions that set global benchmarks in innovation, reliability, and environmental stewardship. We strive to be the catalyst for smarter cities, where seamless parking experiences reduce congestion, lower carbon emissions, and elevate the quality of urban life."
              }
            ]
          ]
        },
        // Second block: titled section + paragraph (consistent with About)
        {
          heading: "Strategic Growth & Industry Leadership",
          paragraphs: [
            [
              {
                type: "text",
                text:
                  "Our ambition extends beyond technological advancement—we aim to solidify our position as India’s most trusted partner for transformative parking solutions. Through strategic collaborations with urban planners, architects, and municipal authorities, we will expand our national footprint, delivering scalable systems tailored to diverse urban landscapes. By investing in R&D and adopting emerging technologies like AI-driven automation and IoT-enabled analytics, we ensure our offerings evolve in lockstep with the dynamic needs of modern cities. Every project we undertake is a step toward our broader mission: enabling cities to grow vertically, sustainably, and inclusively."
              }
            ]
          ]
        }
      ]
    },

    /* ============== MISSION tab ============== */
    mission: {
      sections: [
        {
          heading: "Commitment to Excellence & Sustainability",
          paragraphs: [
            [
              {
                type: "text",
                text:
                  "At the heart of our vision lies an unwavering commitment to excellence. We prioritize precision engineering, using eco-conscious materials and energy-efficient processes to deliver systems that minimize operational costs and environmental impact. By adhering to global quality standards and fostering a culture of continuous improvement, we ensure our solutions remain cost-effective, durable, and adaptable to future urban challenges. Through this ethos, STEL Parking aspires to empower communities, enhance property value, and contribute to a greener, more livable India—one innovative parking system at a time."
              }
            ],
          ]
        }
      ]
    }
  },

  /* ---------------------- WHY STELZ (separate component) ------------------ */
  why: {
    title: "Why STELZ Multiparking",
    cards: [
      {
        id: 1,
        icon: "/assets/aboutUs/1.svg",
        title: "Customized Engineering",
        text:
          "Every system is designed to fit your site's unique layout, usage requirements, and space constraints."
      },
      {
        id: 2,
        icon: "/assets/aboutUs/2.svg",
        title: "End-to-End Solutions",
        text:
          "From design and manufacturing to installation and support, we offer complete in-house expertise."
      },
      {
        id: 3,
        icon: "/assets/aboutUs/3.svg",
        title: "High Volume, High Trust",
        text:
          "With over 12,000 systems installed annually, our scale reflects our reliability and customer satisfaction."
      },
      {
        id: 4,
        icon: "/assets/aboutUs/4.svg",
        title: "Innovative R&D Focus",
        text:
          "Continuous investment in research and development ensures cutting-edge technology and long-term performance."
      },
      {
        id: 5,
        icon: "/assets/aboutUs/5.svg",
        title: "Cost-Effective Efficiency",
        text:
          "Our mechanical systems deliver optimal functionality while keeping costs low, offering excellent value."
      },
      {
        id: 6,
        icon: "/assets/aboutUs/6.svg",
        title: "Proven Track Record",
        text:
          "Trusted by top developers and institutions, our installations span across residential, commercial, and industrial sectors."
      }
    ]
  },

  /* --------------------- PHILOSOPHY (separate component) ------------------ */
  philosophy: {
    title: "Our Operational Philosophy",
    body:
      "At STELZ Parking, we stand by our core belief that “Service Driven is Success Driven.” Guided by this philosophy, we provide fully customized solutions tailored to the unique needs of each client. Our automated multilevel car parking systems are designed with flexibility in mind and can be adapted to suit the specific structural conditions and spatial constraints of any site.\n\nWe take a consultative approach—carefully assessing customer requirements, site layout, and space availability to deliver the most efficient and effective parking solution. This personalized service is made possible through our structured five-step process:",
    steps: [
      {
        id: "01",
        title: "Conceptualization",
        body:
          "Conceptualization is the stage where we thoroughly understand the project’s unique requirements, identify challenges, and define clear expectations. Based on this understanding, we design a tailored solution that fits the specific needs of the client, ensuring every detail is aligned with the project goals. "
      },
      {
        id: "02",
        title: "Designing",
        body:
          "Designing is where ideas take shape into precise engineering plans. At this stage, we create detailed layouts and system designs that balance functionality, safety, and efficiency. Every element is crafted with accuracy to ensure the solution is practical, reliable, and ready for flawless execution."
      },
      {
        id: "03",
        title: "Manufacturing",
        body:
          "Manufacturing focuses on transforming designs into reality by producing high-quality components with precision. Each part is crafted using advanced processes and materials, while strict quality control measures ensure durability, safety, and performance. This stage guarantees that every component meets the highest standards before moving to installation."
      },
      {
        id: "04",
        title: "Installation",
        body:
          "Installation is the stage where systems are seamlessly integrated on-site with expert precision. Our professional team ensures smooth execution, adhering to safety standards and project timelines. Every component is aligned and tested for flawless functionality, setting the stage for reliable, long-term performance."
      },
      {
        id: "05",
        title: "Post-Installation Maintenance",
        body:
          "Post-Installation Maintenance ensures the system’s long-term performance and reliability. Through dedicated support, regular servicing, and timely interventions, we keep operations running at their best. Our commitment extends beyond delivery, focusing on customer satisfaction and sustained efficiency throughout the system’s lifecycle."
      }
    ]
  }
};

export default ABOUT_CONTENT;
