// Provide CV data as a JS file to avoid fetch/CORS issues
window.cvData = {
  "personalInfo": {
    "firstName": "Alexis",
    "lastName": "Laroche",
    "fullName": "Alexis Laroche",
    "title": "Full Stack Developer",
    "email": "alexis.laroche@outlook.com",
    "location": "France, Paris",
    "age": 26,
    "languages": ["French", "English"],
    "profileImage": "https://via.placeholder.com/300x300",
    "description": "Passionate  developer with 5+ years of experience in creating innovative web solutions.",
    "aboutMe": "I'm a passionate full-stack developer with expertise in modern web technologies. I love creating efficient, scalable solutions and continuously learning new technologies."
  },
  "socialLinks": {
    "linkedin": "https://linkedin.com/in/johndoe",
    "github": "https://github.com/johndoe",
  },
  "workExperience": [
    {
      "id": 1,
      "position": "Senior Full Stack Developer",
      "company": "Tech Company Inc.",
      "period": "2021 - Present",
      "description": "Lead development of web applications using React, Node.js, and PostgreSQL. Managed a team of 4 developers and improved application performance by 40%.",
      "current": true
    },
    {
      "id": 2,
      "position": "Full Stack Developer",
      "company": "Web Solutions LLC",
      "period": "2019 - 2021",
      "description": "Developed and maintained multiple client websites using JavaScript, Python, and MySQL. Collaborated with designers to implement responsive designs.",
      "current": false
    },
    {
      "id": 3,
      "position": "Junior Developer",
      "company": "StartUp Co.",
      "period": "2018 - 2019",
      "description": "Built frontend components using HTML, CSS, and JavaScript. Assisted in backend development with Node.js and Express.",
      "current": false
    }
  ],
  "education": [
    {
      "id": 1,
      "degree": "Bachelor of Science in Computer Science",
      "institution": "University of Technology",
      "period": "2014 - 2018",
      "description": "Graduated with honors. Specialized in software engineering and web development.",
      "type": "degree"
    },
    {
      "id": 2,
      "degree": "Full Stack Web Development Certification",
      "institution": "Online Tech Academy",
      "period": "2018",
      "description": "Intensive 6-month program covering modern web development technologies.",
      "type": "certification"
    }
  ],
  "skills": {
    "technical": [
      { "name": "JavaScript", "level": 90, "category": "programming" },
      { "name": "React",      "level": 85, "category": "framework" },
      { "name": "Node.js",    "level": 80, "category": "backend" },
      { "name": "Python",     "level": 75, "category": "programming" }
    ],
    "tools": ["Git","Docker","AWS","MongoDB","PostgreSQL","Bootstrap"]
  },
  "projects": [
    {
      "id": 1,
      "title": "E-commerce Platform",
      "description": "Full-stack e-commerce solution built with React and Node.js.",
      "image": "https://via.placeholder.com/400x200",
      "demoUrl": "#",
      "githubUrl": "#",
      "technologies": ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      "id": 2,
      "title": "Task Management App",
      "description": "React-based task management application with real-time updates.",
      "image": "https://via.placeholder.com/400x200",
      "demoUrl": "#",
      "githubUrl": "#",
      "technologies": ["React", "Firebase", "Material-UI"]
    },
    {
      "id": 3,
      "title": "Weather Dashboard",
      "description": "Weather application using external APIs and responsive design.",
      "image": "https://via.placeholder.com/400x200",
      "demoUrl": "#",
      "githubUrl": "#",
      "technologies": ["JavaScript", "OpenWeather API", "Chart.js"]
    }
  ],
  "contact": {
    "formEndpoint": "#",
    "message": "Feel free to reach out for collaborations or just a friendly hello!"
  },
  "meta": {
    "siteTitle": "Alexis Laroche - CV",
    "copyright": "2025 Alexis Laroche. All rights reserved.",
    "lastUpdated": "2025-12-12"
  }
};
