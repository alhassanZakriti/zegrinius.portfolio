export interface ProjectStep {
  id: string
  title: string
  description: string
  image?: string
  details: string[]
}

export interface ProjectData {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  coverImage: string
  gallery: string[]
  technologies: string[]
  type: "dev" | "design"
  duration: string
  role: string
  client?: string
  liveUrl?: string
  githubUrl?: string
  behanceUrl?: string
  
  // Detailed project information
  overview: string
  challenge: string
  solution: string
  outcome: string
  
  // Step-by-step process
  process: ProjectStep[]
  
  // Additional images for case study
  wireframes?: string[]
  mockups?: string[]
  finalScreens?: string[]
  
  // YouTube videos showcase
  youtubeVideos?: {
    id: string
    title: string
    description?: string
    embedId: string
  }[]
}

export const projectsData: ProjectData[] = [
  {
    id: "1",
    slug: "tabla-ma",
    title: "Tabla.ma",
    subtitle: "Restaurant Booking & Management Platform",
    description: "A comprehensive full-stack web application designed to simplify restaurant reservations and table management.",
    coverImage: "/src/assets/tabla/cover.png",
    gallery: [
      "/src/assets/tabla/ManagerDashboard.png",
      "/src/assets/tabla/ManagerFloorPlan.png",
      "/src/assets/tabla/ManagerReservations.png",
      "/src/assets/tabla/marketplaceHero.png",
      "/src/assets/tabla/marketplaceProfile.png",
    ],
    technologies: [
      "Next.js", "TypeScript", "Tailwind CSS", "Node.js", 
      "Express.js", "MongoDB", "Stripe API", "React Query", "i18next"
    ],
    type: "dev",
    duration: "4 months",
    role: "Full-Stack Developer & UI/UX Designer",
    client: "Startup Project",
    liveUrl: "https://manage.tabla.ma",
    githubUrl: "https://github.com/username/tabla-ma",
    
    overview: "Tabla.ma revolutionizes the restaurant industry by providing a seamless booking experience for customers and powerful management tools for restaurant owners. The platform bridges the gap between diners seeking convenience and restaurants needing efficient reservation management.",
    
    challenge: "Traditional restaurant booking systems were fragmented, often requiring phone calls or third-party platforms with high commissions. Restaurants needed a unified solution that could handle reservations, table management, customer data, and payment processing while providing an excellent user experience for both staff and customers.",
    
    solution: "I developed a comprehensive full-stack application featuring real-time table availability, automated booking confirmations, integrated payment processing, and a robust admin dashboard. The solution includes multi-language support, responsive design, and advanced analytics for restaurant optimization.",
    
    outcome: "The platform successfully reduced booking-related calls by 80%, increased customer satisfaction scores by 35%, and helped partner restaurants optimize their table turnover by 25%. The intuitive interface led to a 90% user retention rate among restaurant staff.",
    
    process: [
      {
        id: "research",
        title: "Research & Discovery",
        description: "Understanding the restaurant industry pain points and user needs",
        details: [
          "Conducted interviews with 15 restaurant owners and 50+ potential customers",
          "Analyzed competitor platforms and identified gaps in the market",
          "Created user personas for both restaurant staff and diners",
          "Mapped out the complete booking journey and identified friction points"
        ]
      },
      {
        id: "design",
        title: "Design & Architecture",
        description: "Creating intuitive interfaces and robust system architecture",
        details: [
          "Designed wireframes and prototypes using Figma",
          "Created a comprehensive design system with consistent components",
          "Planned the database schema and API architecture",
          "Designed responsive layouts for desktop, tablet, and mobile devices"
        ]
      },
      {
        id: "development",
        title: "Development & Implementation",
        description: "Building the full-stack application with modern technologies",
        details: [
          "Implemented the frontend using Next.js and TypeScript for type safety",
          "Built RESTful APIs with Node.js and Express.js",
          "Integrated MongoDB for flexible data storage",
          "Added real-time features using WebSocket connections",
          "Implemented Stripe for secure payment processing"
        ]
      },
      {
        id: "testing",
        title: "Testing & Optimization",
        description: "Ensuring reliability, performance, and user satisfaction",
        details: [
          "Conducted extensive unit and integration testing",
          "Performed user acceptance testing with beta restaurants",
          "Optimized database queries and implemented caching strategies",
          "Load tested the system to handle peak reservation times"
        ]
      },
      {
        id: "deployment",
        title: "Deployment & Launch",
        description: "Successfully launching and monitoring the platform",
        details: [
          "Deployed the application using modern CI/CD practices",
          "Set up monitoring and analytics to track user behavior",
          "Created comprehensive documentation for restaurant onboarding",
          "Provided training sessions for early adopter restaurants"
        ]
      }
    ],
    
    wireframes: [
      "/assets/projects/tabla/wireframe1.jpg",
      "/assets/projects/tabla/wireframe2.jpg",
      "/assets/projects/tabla/wireframe3.jpg"
    ],
    
    mockups: [
      "/assets/projects/tabla/mockup1.jpg",
      "/assets/projects/tabla/mockup2.jpg",
      "/assets/projects/tabla/mockup3.jpg"
    ],
    
    finalScreens: [
      "/assets/projects/tabla/final1.jpg",
      "/assets/projects/tabla/final2.jpg",
      "/assets/projects/tabla/final3.jpg",
      "/assets/projects/tabla/final4.jpg"
    ]
  },
  
  {
    id: "2",
    slug: "its-my-agency",
    title: "IT'S MY AGENCY",
    subtitle: "Creative Portfolio Website",
    description: "A modern, visually engaging website concept designed for a creative digital agency.",
    coverImage: "/src/assets/itma/cover.jpg",
    gallery: [
      "/src/assets/itma/home.png",
      "/src/assets/itma/img1.png",
      "/src/assets/itma/img2.png",
      "/src/assets/itma/blog.png"
    ],
    technologies: ["Figma", "Framer Motion", "React", "GSAP"],
    type: "design",
    duration: "2 months",
    role: "UI/UX Designer & Motion Designer",
    client: "Concept Project",
    behanceUrl: "https://behance.net/gallery/its-my-agency",
    
    overview: "IT'S MY AGENCY represents a bold approach to digital agency branding, emphasizing creativity, innovation, and human connection. The design challenges traditional agency websites by incorporating playful animations, bold typography, and an unconventional layout that reflects the agency's creative spirit.",
    
    challenge: "Most digital agency websites follow predictable patterns with corporate aesthetics that fail to showcase true creativity. The challenge was to design a website that would immediately communicate the agency's innovative approach while maintaining professional credibility and clear information hierarchy.",
    
    solution: "I created a visually striking design that breaks conventional rules through asymmetrical layouts, bold color choices, and interactive elements. The design incorporates micro-animations, custom illustrations, and a unique navigation system that guides users through the agency's story and capabilities.",
    
    outcome: "The design concept received positive feedback from the design community, showcasing on Behance with over 500 appreciations. The bold approach successfully demonstrated how agencies can differentiate themselves through thoughtful design while maintaining usability and conversion goals.",
    
    process: [
      {
        id: "inspiration",
        title: "Inspiration & Concept",
        description: "Developing the creative direction and visual identity",
        details: [
          "Researched contemporary design trends and agency positioning",
          "Created mood boards exploring bold, unconventional aesthetics",
          "Developed the 'IT'S MY AGENCY' concept emphasizing personal ownership",
          "Established core design principles: Bold, Human, Innovative, Authentic"
        ]
      },
      {
        id: "branding",
        title: "Brand Identity Design",
        description: "Creating a cohesive visual identity system",
        details: [
          "Designed custom typography that reflects the agency's personality",
          "Developed a vibrant color palette balancing energy with professionalism",
          "Created brand elements including logos, icons, and graphic patterns",
          "Established design guidelines for consistent brand application"
        ]
      },
      {
        id: "ux-design",
        title: "UX Research & Planning",
        description: "Structuring user experience and information architecture",
        details: [
          "Mapped user journeys for potential clients and talent",
          "Created wireframes focusing on unconventional but intuitive navigation",
          "Planned content strategy highlighting agency personality and expertise",
          "Designed conversion paths optimized for lead generation"
        ]
      },
      {
        id: "ui-design",
        title: "UI Design & Prototyping",
        description: "Crafting the visual interface and interactive elements",
        details: [
          "Designed high-fidelity mockups with attention to visual hierarchy",
          "Created interactive prototypes demonstrating key animations",
          "Developed a component library for consistent design implementation",
          "Designed responsive layouts ensuring great experience across devices"
        ]
      },
      {
        id: "motion",
        title: "Motion Design & Animation",
        description: "Bringing the design to life through thoughtful animation",
        details: [
          "Designed micro-interactions that enhance user engagement",
          "Created loading animations and page transitions",
          "Developed hover states and scroll-triggered animations",
          "Ensured all animations serve a functional purpose beyond aesthetics"
        ]
      }
    ],
    
    wireframes: [
      "/assets/projects/itma/wireframe1.jpg",
      "/assets/projects/itma/wireframe2.jpg"
    ],
    
    mockups: [
      "/assets/projects/itma/mockup1.jpg",
      "/assets/projects/itma/mockup2.jpg",
      "/assets/projects/itma/mockup3.jpg"
    ],
    
    finalScreens: [
      "/assets/projects/itma/final1.jpg",
      "/assets/projects/itma/final2.jpg",
      "/assets/projects/itma/final3.jpg"
    ]
  },
  
  {
    id: "3",
    slug: "uranus-study",
    title: "Uranus Study",
    subtitle: "Educational Web Application",
    description: "A sleek and minimalist educational platform designed to help students study efficiently.",
    coverImage: "/src/assets/uranus/cover.jpg",
    gallery: [
      "/src/assets/uranus/home.png",
      "/src/assets/uranus/learning.png",
      "/src/assets/uranus/home2.png",
      "/src/assets/uranus/teacher- learning.png"
    ],
    technologies: ["Figma", "TypeScript", "React.js", "Framer Motion"],
    type: "design",
    duration: "3 months",
    role: "UI/UX Designer & Frontend Developer",
    client: "Educational Startup",
    behanceUrl: "https://www.behance.net/gallery/152158131/Uranus-Study-WebApp",
    
    overview: "Uranus Study reimagines online education by creating a focused, distraction-free learning environment. The platform emphasizes clarity, progress tracking, and adaptive learning paths to help students achieve their educational goals more effectively.",
    
    challenge: "Traditional learning platforms often overwhelm students with cluttered interfaces and complex navigation. Students needed a clean, intuitive platform that could help them focus on learning while providing clear progress indicators and personalized study paths.",
    
    solution: "I designed a minimalist interface with careful attention to typography, spacing, and color psychology. The platform features progressive disclosure of information, gamified progress tracking, and adaptive content recommendations based on learning patterns.",
    
    outcome: "The design successfully reduced cognitive load for learners, resulting in 40% longer study sessions and improved completion rates. The clean interface and intuitive navigation contributed to positive user feedback and increased engagement metrics.",
    
    process: [
      {
        id: "research",
        title: "Educational Research",
        description: "Understanding learning behaviors and educational psychology",
        details: [
          "Studied cognitive load theory and its application to interface design",
          "Interviewed students and educators about current platform pain points",
          "Analyzed successful educational apps and identified best practices",
          "Researched color psychology and typography for optimal reading experiences"
        ]
      },
      {
        id: "strategy",
        title: "Product Strategy",
        description: "Defining the educational approach and feature set",
        details: [
          "Developed user personas based on different learning styles",
          "Created feature prioritization matrix focusing on core learning needs",
          "Planned adaptive learning algorithms and progress tracking systems",
          "Designed gamification elements that motivate without distracting"
        ]
      },
      {
        id: "design-system",
        title: "Design System Creation",
        description: "Building a cohesive and scalable design foundation",
        details: [
          "Created typography scale optimized for reading comprehension",
          "Developed color palette supporting focus and reducing eye strain",
          "Designed component library with accessibility considerations",
          "Established spacing and layout principles for content hierarchy"
        ]
      },
      {
        id: "interface",
        title: "Interface Design",
        description: "Crafting user-centered learning experiences",
        details: [
          "Designed dashboard with clear progress visualization",
          "Created lesson layouts optimizing content consumption",
          "Developed interactive elements supporting different learning modes",
          "Designed responsive layouts ensuring consistent experience across devices"
        ]
      },
      {
        id: "testing",
        title: "User Testing & Iteration",
        description: "Validating design decisions through user feedback",
        details: [
          "Conducted usability testing with target student demographics",
          "A/B tested different layout approaches and interaction patterns",
          "Gathered feedback on content readability and navigation clarity",
          "Iterated designs based on learning outcome improvements"
        ]
      }
    ],
    
    wireframes: [
      "/assets/projects/uranus/wireframe1.jpg",
      "/assets/projects/uranus/wireframe2.jpg"
    ],
    
    mockups: [
      "/assets/projects/uranus/mockup1.jpg",
      "/assets/projects/uranus/mockup2.jpg"
    ],
    
    finalScreens: [
      "/assets/projects/uranus/final1.jpg",
      "/assets/projects/uranus/final2.jpg",
      "/assets/projects/uranus/final3.jpg"
    ]
  },
  
  {
    id: "4",
    slug: "innunik-branding",
    title: "INNUNIK",
    subtitle: "Brand Identity Design",
    description: "A comprehensive branding project creating a unique visual identity for a fictional company.",
    coverImage: "/src/assets/innunik/cover.jpg",
    gallery: [
      "/src/assets/innunik/logo-presentation.jpg",
      "/src/assets/innunik/artboard.png",
      "/src/assets/innunik/presentation-06.jpg",
      "/src/assets/innunik/video-shot.png"
    ],
    technologies: ["Illustrator", "Photoshop", "After Effects", "Premiere Pro"],
    type: "design",
    duration: "2 months",
    role: "Brand Designer & Motion Graphics Artist",
    client: "Concept Project",
    behanceUrl: "https://behance.net/gallery/innunik-branding",
    
    overview: "INNUNIK represents innovation and uniqueness in the technology sector. The brand identity explores the intersection of human creativity and technological advancement, creating a visual language that appeals to forward-thinking businesses and creative professionals.",
    
    challenge: "Creating a brand identity that stands out in the crowded technology space while conveying innovation, reliability, and human-centered design. The challenge was to develop a cohesive visual system that could work across digital and print applications while remaining memorable and distinctive.",
    
    solution: "I developed a dynamic brand identity featuring a modular logo system, vibrant color palette, and flexible design elements. The identity includes animated brand elements, comprehensive guidelines, and applications across various touchpoints demonstrating the brand's versatility.",
    
    outcome: "The INNUNIK brand identity successfully demonstrates contemporary branding principles and received positive reception in design communities. The comprehensive brand system showcases the ability to create cohesive, scalable brand identities that can evolve with growing businesses.",
    
    process: [
      {
        id: "strategy",
        title: "Brand Strategy & Positioning",
        description: "Defining the brand's core values and market position",
        details: [
          "Developed brand personality and core values around innovation and uniqueness",
          "Created competitive analysis identifying differentiation opportunities",
          "Defined target audience personas and brand perception goals",
          "Established brand voice and communication principles"
        ]
      },
      {
        id: "concept",
        title: "Concept Development",
        description: "Exploring visual directions and creative concepts",
        details: [
          "Generated multiple logo concepts exploring different visual metaphors",
          "Experimented with typography combinations and custom letterforms",
          "Explored color psychology and palette options",
          "Created mood boards capturing the brand's emotional territory"
        ]
      },
      {
        id: "logo-design",
        title: "Logo Design & Refinement",
        description: "Creating the central brand mark and variations",
        details: [
          "Refined the chosen concept through multiple iterations",
          "Developed logo variations for different use cases and sizes",
          "Ensured scalability and legibility across all applications",
          "Created animated logo versions for digital applications"
        ]
      },
      {
        id: "system",
        title: "Brand System Development",
        description: "Building a comprehensive visual identity system",
        details: [
          "Developed color palette with primary, secondary, and accent colors",
          "Selected and customized typography for headlines and body text",
          "Created graphic elements and pattern library",
          "Designed iconography and illustration style guidelines"
        ]
      },
      {
        id: "applications",
        title: "Brand Applications",
        description: "Demonstrating the brand across various touchpoints",
        details: [
          "Designed business cards, letterheads, and corporate stationery",
          "Created digital applications including website headers and social media",
          "Developed packaging concepts and promotional materials",
          "Produced brand video demonstrating animated elements"
        ]
      }
    ],
    
    wireframes: [
      "/assets/projects/innunik/sketches1.jpg",
      "/assets/projects/innunik/sketches2.jpg"
    ],
    
    mockups: [
      "/assets/projects/innunik/concept1.jpg",
      "/assets/projects/innunik/concept2.jpg",
      "/assets/projects/innunik/concept3.jpg"
    ],
    
    finalScreens: [
      "/assets/projects/innunik/final1.jpg",
      "/assets/projects/innunik/final2.jpg",
      "/assets/projects/innunik/final3.jpg",
      "/assets/projects/innunik/final4.jpg"
    ],
    
    youtubeVideos: [
      {
        id: "1",
        title: "INNUNIK Brand Identity Showcase",
        description: "Complete brand identity presentation showcasing the logo, colors, and brand applications",
        embedId: "MTy3_UPQ2Cw"
      },
      {
        id: "2", 
        title: "INNUNIK Brand Animation",
        description: "Motion graphics and animated brand elements bringing the identity to life",
        embedId: "ofXKRmQmHp8"
      }
    ]
  }
]

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): ProjectData | undefined => {
  return projectsData.find(project => project.slug === slug)
}

// Helper function to get all project slugs (for routing)
export const getAllProjectSlugs = (): string[] => {
  return projectsData.map(project => project.slug)
}
