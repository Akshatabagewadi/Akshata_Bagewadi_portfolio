// ============================================================
// All portfolio content lives here. Edit this file to update
// text, links, projects, certifications, etc. across the site.
// ============================================================

export const personalInfo = {
  name: "Akshata Bagewadi",
  roles: [
    "React Developer",
    "Java Full Stack Developer",
    "Frontend Developer",
    "Software Developer"
  ],
  tagline:
    "Passionate Java Full Stack Developer building scalable web applications with React, Spring Boot, MySQL, and modern web technologies.",
  summary:
     "I am Akshata Bagewadi, an aspiring Software Developer with expertise in Java, React.js, Spring Boot, SQL, Python, HTML, CSS, and JavaScript. I have built full-stack web applications, machine learning solutions, and VLSI-based projects. As IEEE Student Branch Chair, I have led technical events and collaborated with teams. I am passionate about continuous learning and building scalable, user-friendly applications while growing as a Full Stack Software Engineer",
  email: "akshubagewadi@gmail.com",
  phone: "+91 93533 69654",
  linkedin: "https://linkedin.com/in/akshatabagewadi",
  github: "https://github.com/Akshatabagewadi",
  location: "Karnataka, India",
  resumeFile: "/resume.pdf",
  // Replace with your real photo at src/assets/profile.jpg (or update this path)
  profileImage: "/profile-placeholder.svg",
};

export const skills = [
  {
    category: "Programming",
    items: [
      "Java",
      "Python",
      "C++",
      "JavaScript"
    ]
  },
  {
    category: "Frameworks / Technologies",
    items: [
      "React.js",
      "Next.js",
      "Spring Boot",
      "Servlets",
      "JDBC",
      "Hibernate",
      "REST API",
      "HTML",
      "CSS",
      "Bootstrap",
      "Flask"
    ]
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Eclipse",
      "Postman",
      "Streamlit",
      "MS Office",
      "Apache Tomcat",
      "Power BI"
    ]
  },
  {
    category: "Databases",
    items: [
      "MySQL",
      "SQL",
      "MangoDB"
    ]
  }
];

export const experience = [
  {
    title: "Java Full Stack Developer Intern",
    company: "JSpiders, Bengaluru",
    period: "Feb 2026 – May 2026",
    status: "Completed",
    description: [
      "Completed an intensive Java Full Stack Development internship with hands-on experience in building enterprise-level web applications.",
      "Developed responsive frontend interfaces using HTML5, CSS3, JavaScript and React.js.",
      "Implemented backend functionality using Java, JDBC, Servlets, Hibernate and Spring Boot.",
      "Designed and managed relational databases using MySQL and integrated REST APIs.",
      "Applied Git and GitHub for version control, team collaboration and project management."
    ],
    tags: ["HTML", "CSS", "Javascript", "Java", "React.js", "Spring Boot", "MySQL", "GitHub"]
  },

  {
    title: "Data Analytics Intern",
    company: "UptoSkills",
    period: "Feb 2025 – May 2025",
    status: "Completed",
    description: [
      "Completed a 3-month Data Analytics internship focused on business intelligence and data visualization.",
      "Performed data cleaning, transformation and analysis using Microsoft Excel.",
      "Designed interactive dashboards and reports using Power BI.",
      "Analyzed datasets to identify trends and support business decision-making.",
      "Strengthened analytical thinking, reporting and visualization skills."
    ],
    tags: ["Python","Power BI", "Excel", "Data Analytics", "Dashboard", "Visualization"]
  },

  {
    title: "Python Full Stack Developer Virtual Intern",
    company: "EduSkills | AICTE",
    period: "Oct 2024 – Dec 2024",
    status: "Completed",
    description: [
      "Successfully completed a 10-week AICTE EduSkills Python Full Stack Developer Virtual Internship.",
      "Developed web applications using Python, HTML, CSS and JavaScript.",
      "Worked with Flask framework to build dynamic web applications.",
      "Improved frontend and backend development skills through real-world projects.",
      "Enhanced problem-solving, debugging and software development best practices."
    ],
    tags: ["Python", "Flask", "HTML", "CSS", "JavaScript"]
  }
];

export const projects = [
  {
  title: "MediCare Pro – Hospital Management System",
  period: "May 2026 — June 2026",
  description:
    "Developed a responsive Hospital Management System with dedicated Admin, Doctor, and Patient modules. Implemented secure authentication, appointment scheduling, patient records management, billing, and CRUD operations.",
  tech: [
    "React.js",
    "HTML",
    "CSS",
    "JavaScript",
    "React Router",
    "Context API",
    "Local Storage",
    "CRUD Operations"
  ],
  github: "https://github.com/Akshatabagewadi",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxrO4LeVFdUiE5jiwIefTaFptPFVB2LpV4BqNIASQx_hagHjJ85eKpxTHe&s=10",
},
  {
    title: "Book My Ticket- Online Movie Ticket Booking System",
    period: "Feb 2026 — May 2026",
    description:
      "Developed a full stack online movie ticket booking system with secure OTP based user authentication, movie browsing, show scheduling and online ticket booking. Integrated Razorpay for secure payments, Cloudinary for image management, JavaMailSender for email notifications & QR code generation for digital ticket verification. Built the backend using Spring Boot, Spring Data JPA, Hibernate.",
    tech: ["Java", "Razorpay","Spring Boot", "Hibernate", "MySQL", "HTML", "CSS","Javascript","Thymeleaf","JDBC"],
    // Replace with your actual repo / live links
    github: "https://github.com/Akshatabagewadi/Book-my-ticket",

    image: "/projects/book-my-ticket.svg",
  },
  {
    title: "Crop Recommendation System -usinh python and Flask",
    period: "Jul 2025 — Nov 2025",
    description:
      "Developed a machine learning-based crop recommendation system that predicts the most suitable crop based on soil nutrients (NPK), temperature, humidity, rainfall, and pH values. Built a Python backend using Flask and integrated Logistic Regression and Naive Bayes algorithms for accurate crop prediction. Designed an interactive.",
    tech: ["Python", "Flask", "Streamlit","Pandas","Machine Learning", "Logistic Regression", "NumPy"],
    github: "https://github.com/Akshatabagewadi",
    image: "/projects/crop-recommendation.svg",
  },
  {
    title: "Design & Comparative Analysis of 8-bit Multipliers",
    period: "Oct 2023 — Aug 2024",
    description:
      "Developed and analyzed 8-bit Vedic and Wallace Tree multipliers using the Cadence Virtuoso Design Suite in 45nm CMOS technology. Designed transistor-level schematics, configured test circuits, and performed functional verification through waveform simulations.",
    tech: [ "45nm CMOS", "Cadence Virtuso", "Vlsi design"],
    github: "https://drive.google.com/drive/folders/1JWHHxwzqCyBGDswdwH-LA1ZA7R97mTio",
    image: "/projects/multiplier-design.svg",
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering — Electronics & Communication",
    institution: "KLS Vishwanathrao Deshpande Institute of Technology, Haliyal",
    period: "Dec 2022 — May 2026",
    detail: "CGPA: 8.8 / 10",
  },
  {
    degree: "PUC (11th & 12th)",
    institution: "Smt. Vidya P. Hanchinamani PU College, Dharwad",
    period: "Jan 2021 — May 2022",
    detail: "Percentage: 89%",
  },
  {
    degree: "Primary & High School",
    institution: "St. Theresa English Medium School, Alnavar",
    period: "Jun 2016 — Apr 2020",
    detail: "Percentage: 92.32%",
  },
];

export const leadership = [
  {
    title: "IEEE Day 2025 Ambassador",
    description:
      "Selected as an IEEE Day 2025 Ambassador for the IEEE Bangalore Section to represent and promote IEEE initiatives globally. Conducted outreach activities and encouraged student participation in IEEE events and programs.",
  },
  {
    title: "IEEE CAS Bangalore — Institute to Industry Forum 4.0",
    description:
      "Participated in the IEEE CAS Bangalore Institute to Industry Forum 4.0, gaining insights into emerging technologies, industry trends, and strengthening the connection between academia and industry through technical sessions and networking.",
  },
  {
    title: "Code Battle – 2K25 Volunteer",
    description:
      "Volunteered at Code Battle 2K25, a national-level hackathon, assisting with event planning, participant registration, technical coordination, and ensuring the smooth execution of the competition.",
  },
  {
    title: "Chair, IEEE Student Branch — KLS VDIT",
    description:
      "Served as Chair of the IEEE Student Branch at KLS VDIT, leading technical events, workshops, membership drives, and student engagement initiatives while coordinating with volunteers, faculty, and the IEEE Bangalore Section.",
  },
];

// Add your certifications here — title, issuer, date, and an optional
// credential URL. Sample entry below is a placeholder; replace it.
export const certifications = [
  {
    title: "Excel",
    issuer: "OneRoadmap",
    date: "Aug 2025",
    url: "https://oneroadmap.io/skills/excel/certificate/CERT-7956897C",
  },
  {
    title: "Android Developer Virtual Internship",
    issuer: "EduSkills Foundation",
    date: "Mar 2025",
    url: "https://www.linkedin.com/posts/akshata-bagewadi-49104933b_androiddevelopment-googlefordevelopers-eduskills-activity-7304496895161196544-7zYX?utm_source=share&utm_medium=member_android&rcm=ACoAAFVB820Bik39XWONM8FKGN9vqlQ1CWMID9Q",
  },
  {
    title: "Python Programming for AWS",
    issuer: "Udemy",
    date: "Mar 2025",
    url: "https://www.linkedin.com/posts/akshata-bagewadi-49104933b_aws-python-boto3-activity-7307011125064134656-vtVu?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAFVB820Bik39XWONM8FKGN9vqlQ1CWMID9Q&utm_campaign=copy_link",
  },
  {
    title: "Cyber Security Analyst Job Simulation",
    issuer: "Forage",
    date: "Feb 2025",
    url: "https://drive.google.com/drive/folders/19GCVbNBRrkeMRRxYTdHxddVdyBBtdcHJ",
  },
  {
    title: "Product Management Job Simulation",
    issuer: "Forage",
    date: "Feb 2025",
    url: "https://drive.google.com/drive/folders/19GCVbNBRrkeMRRxYTdHxddVdyBBtdcHJ",
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "Forage",
    date: "Feb 2025",
    url: "https://drive.google.com/drive/folders/19GCVbNBRrkeMRRxYTdHxddVdyBBtdcHJ",
  },
  {
    title: "Technology Consulting Job Simulation",
    issuer: "Forage",
    date: "Feb 2025",
    url: "https://drive.google.com/drive/folders/19GCVbNBRrkeMRRxYTdHxddVdyBBtdcHJ",
  },
  {
    title: "Python Full Stack Developer Virtual Internship",
    issuer: "EduSkills Foundation",
    date: "Oct 2024",
    url: "https://www.linkedin.com/posts/akshata-bagewadi-49104933b_python-fullstackdevelopment-internship-activity-7289666746116915200-SsPC?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAFVB820Bik39XWONM8FKGN9vqlQ1CWMID9Q&utm_campaign=copy_link",
  },
  
  
];
export const achievements = [
  { text: "Academic excellence — CGPA of 8.8/10 in Electronics & Communication Engineering." },
  { text: "Selected as IEEE Day 2025 Ambassador for the Bangalore Section." },
  { text: "Served as Chair of the IEEE Student Branch at KLS VDIT." },
  { text: "Contributed as a volunteer for Code Battle – 2k25, a national-level hackathon." },
];

export const strengths = ["Adaptability", "Problem-solving", "Team Collaboration", "Leadership", "Commitment to Excellence", "Quick learner", "creativity"];
export const interests = ["Reading Books", "Anchoring Events", "Gardening", "Listening to Music", "Volunteering"];

// EmailJS credentials — create a free account at emailjs.com,
// then replace these three values with your own.
export const emailjsConfig = {
  serviceId: "YOUR_EMAILJS_SERVICE_ID",
  templateId: "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
};
