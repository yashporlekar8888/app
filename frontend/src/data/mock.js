// Mock data for Yash Porlekar's Portfolio
export const mockData = {
  personal: {
    name: "Yash Porlekar",
    title: "Java Full Stack Developer & AI Enthusiast",
    tagline: "Building scalable applications with modern technologies",
    location: "Pune, Maharashtra, India",
    email: "yashporlekar8888@gmail.com",
    phone: "9763362074",
    linkedin: "https://www.linkedin.com/in/yashporlekar",
    github: "https://github.com/yashporlekar8888/",
    bio: "I'm a passionate developer skilled in Java, Spring Boot, React, and modern web technologies. I love leveraging AI tools to optimize code, speed up development, and follow industry best practices. With hands-on experience in building scalable microservices and intuitive user interfaces, I strive to deliver innovative, business-focused solutions.",
    profileImage: "https://customer-assets.emergentagent.com/job_glass-portfolio-16/artifacts/69zivsvc_IMG_5198.jpeg",
  },

  skills: {
    core: [
      { name: "Java", level: 90, icon: "Coffee" },
      { name: "Spring Boot", level: 85, icon: "Server" },
      { name: "React JS", level: 80, icon: "Globe" },
      { name: "Spring Security", level: 75, icon: "Shield" },
      { name: "Microservices", level: 80, icon: "Network" }
    ],
    beginner: [
      { name: "Angular", level: 40, icon: "Triangle" },
      { name: "AWS", level: 35, icon: "Cloud" }
    ],
    other: [
      { name: "Servlets", level: 70, icon: "Code" },
      { name: "JSP", level: 70, icon: "FileText" },
      { name: "WebLogic", level: 65, icon: "Database" },
      { name: "Git", level: 80, icon: "GitBranch" },
      { name: "SonarQube", level: 60, icon: "Search" },
      { name: "Material UI", level: 75, icon: "Palette" },
      { name: "Ant Design", level: 70, icon: "Layout" }
    ]
  },

  experience: [
    {
      id: 1,
      company: "Giant Leap Systems Pvt. Ltd.",
      role: "Software Engineer",
      duration: "August 2025 - Present",
      location: "Pune, Maharashtra, India",
      description: "Currently working on innovative software solutions and expanding expertise in full-stack development.",
      technologies: ["Java", "Spring Boot", "React"],
      current: true
    },
    {
      id: 2,
      company: "SUMA Webmarksy",
      role: "Freelance Developer",
      duration: "January 2025 - July 2025",
      location: "Remote",
      description: "Delivered custom web solutions for various clients, focusing on scalable and maintainable code architecture.",
      technologies: ["Java", "React", "Spring Boot"],
      current: false
    },
    {
      id: 3,
      company: "Servosys Solutions",
      role: "Software Engineer",
      duration: "August 2024 - December 2024",
      location: "Mumbai, Maharashtra, India",
      description: "Worked on ICICI Bank's Post Sanction module, developing new business requirements and ensuring smooth functioning of corporate loan applications through RM, ARM, CMOG, and CA firm workflows.",
      technologies: ["Java", "JSP", "Servlets", "Oracle SQL", "WebLogic"],
      achievements: ["Resolved critical issues in Live and UAT environments", "Conducted Root Cause Analysis", "Enhanced system performance"],
      current: false
    },
    {
      id: 4,
      company: "tCognition",
      role: "Java Full Stack Developer",
      duration: "April 2023 - April 2024",
      location: "Kolhapur, Maharashtra, India",
      description: "Developed and maintained microservices-based applications including Candidate Credibility Rating, US-Staffing, and X-Seed ATS. Implemented robust security features and intuitive user interfaces.",
      technologies: ["Java", "Spring Boot", "React", "Material UI", "Ant Design", "SonarQube"],
      achievements: ["Built scalable microservices architecture", "Implemented Spring Security with role-based access", "Ensured high code quality through static analysis"],
      current: false
    }
  ],

  projects: [
    {
      id: 1,
      title: "Post Sanction Module Enhancement",
      description: "Enhanced ICICI Bank's enterprise loan processing system with complex workflow integration and operational continuity features.",
      technologies: ["Java", "Oracle SQL", "Oracle WebLogic", "Servosys BPM/DMS"],
      category: "Enterprise Banking",
      status: "Completed",
      year: "2024"
    },
    {
      id: 2,
      title: "Microservices Web Applications",
      description: "Developed multiple scalable web applications including Candidate Credibility Rating, US-Staffing, and X-Seed ATS with robust security and modern UI.",
      technologies: ["Java", "Spring Boot", "React", "Redux", "Material UI", "Ant Design"],
      category: "Web Applications",
      status: "Completed",
      year: "2023-2024"
    },
    {
      id: 3,
      title: "Future Project Placeholder",
      description: "Exciting new projects coming soon. Stay tuned for innovative solutions and cutting-edge implementations.",
      technologies: ["React", "Java", "AI/ML"],
      category: "Innovation",
      status: "Planning",
      year: "2025"
    }
  ],

  education: [
    {
      id: 1,
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Sanjay Ghodawat University",
      duration: "August 2020 - April 2023",
      result: "First Class with Distinction",
      type: "Bachelor's"
    },
    {
      id: 2,
      degree: "Diploma in Computer Science and Engineering",
      institution: "Sharad Institute of Technology Polytechnic",
      duration: "June 2017 - May 2020",
      result: "First Class with Distinction",
      type: "Diploma"
    }
  ],

  certifications: [
    {
      id: 1,
      name: "Meta Front-End Developer Certificate",
      issuer: "Meta (Coursera)",
      date: "April 2023",
      credentialId: "#",
      status: "Completed"
    },
    {
      id: 2,
      name: "KLIC Certificate in C Programming",
      issuer: "KLIC",
      date: "May 2019",
      credentialId: "#",
      status: "Completed"
    }
  ]
};