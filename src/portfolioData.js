export const profile = {
  name: 'Hanna Sherin',
  shortName: 'Hanna',
  title: 'Full-stack developer building clear interfaces and reliable backend systems.',
  longTitle:
    'I design and build modern web products with React on the front end and Laravel, Node.js, and database-driven business logic behind the scenes.',
  location: 'Calicut, Kerala, India',
  email: 'hannasherin7110@gmail.com',
  phone: '+91 95394 97110',
  intro:
    'I like digital products that feel thoughtful at the surface and disciplined underneath. My work usually lives in that middle ground between interface design, API integration, and backend structure.',
  summary:
    'MCA graduate from 2025, currently working as a PHP Laravel Developer at Bpract Software Solutions. I have hands-on experience across MERN development, Laravel applications, REST APIs, MySQL, MongoDB, and collaborative Git workflows.',
  personalStatement:
    'My goal is to build software that is both useful and dependable. That means simple user flows, readable architecture, and systems that continue to make sense when the product gets more complex.',
  links: [
    { label: 'GitHub', href: 'https://github.com/Hannasherin7' },
    { label: 'LinkedIn', href: 'http://linkedin.com/in/hanna-sherin916854272' },
    { label: 'Email', href: 'mailto:hannasherin7110@gmail.com' },
  ],
}

export const siteIntro = {
  kicker: 'Developer journal',
  message:
    'A multi-page space focused on development work, product thinking, and the systems behind the interface.',
}

export const highlights = [
  {
    title: 'Current role',
    text: 'Building backend features for MLM-focused PHP Laravel projects on active client work since May 2025.',
  },
  {
    title: 'Main stack',
    text: 'React, Laravel, Node.js, Express, MySQL, MongoDB, REST APIs, and Git-based workflows.',
  },
  {
    title: 'Working style',
    text: 'Practical, collaborative, and strongly focused on products that need both clarity and reliability.',
  },
]

export const featuredNotes = [
  {
    label: 'What I care about',
    title: 'Interfaces should feel calm.',
    text: 'I prefer layouts that guide attention naturally instead of overwhelming users with too much at once.',
  },
  {
    label: 'How I build',
    title: 'Backend logic should stay readable.',
    text: 'As products scale, code quality starts to matter more than feature count. I value maintainable structure.',
  },
  {
    label: 'Where I fit best',
    title: 'Teams shipping real products.',
    text: 'The work I enjoy most is where design, development, and business requirements need to align carefully.',
  },
]

export const experience = [
  {
    role: 'PHP Laravel Developer',
    company: 'Bpract Software Solutions',
    period: 'May 2025 - Present',
    description:
      'Developing backend functionality mainly for MLM projects using PHP and Laravel, implementing business logic, working with database-driven systems, and collaborating in agile development cycles.',
    bullets: [
      'Build and maintain backend features in PHP and Laravel for MLM-based applications.',
      'Work on live client systems with complex database and business-logic dependencies.',
      'Collaborate with teams through sprint-based delivery and version control workflows.',
    ],
  },
  {
    role: 'MERN Stack Developer Intern',
    company: 'Ipix Technologies Pvt Ltd',
    period: 'February 2025 - May 2025',
    description:
      'Built and maintained scalable web applications using the MERN stack, handled API integration tasks, fixed bugs, and gained practical project experience in a collaborative development environment.',
    bullets: [
      'Contributed to React-based UI implementation.',
      'Worked with REST APIs and full-stack debugging.',
      'Improved development discipline through real-time project delivery.',
    ],
  },
]

export const education = [
  {
    degree: 'Master of Computer Application',
    school: 'FISAT, Angamaly',
    period: 'May 2025',
    detail: 'SGPA: 8.41',
  },
  {
    degree: 'Bachelor of Computer Science',
    school: 'MCAS Moodadi, Kozhikode',
    period: 'April 2023',
    detail: 'CGPA: 6.66',
  },
]

export const skills = {
  frontend: ['React.js', 'HTML5', 'CSS3', 'Bootstrap'],
  backend: ['PHP', 'Laravel', 'Node.js', 'Express.js'],
  databases: ['MySQL', 'MongoDB', 'SQL'],
  languages: ['JavaScript', 'Python', 'Java', 'C'],
  tools: ['Git', 'GitHub', 'VS Code', 'Postman'],
  architecture: ['REST API', 'JWT Auth', 'MVC Architecture'],
}

export const projects = [
  {
    slug: 'ecoharvest',
    name: 'EcoHarvest',
    eyebrow: 'Featured project',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Python'],
    summary:
      'An e-commerce platform connecting farmers directly with consumers for organic produce discovery, ordering, and community-led content.',
    challenge:
      'The project needed to combine commerce, agricultural information, and user engagement in one system without making the experience feel fragmented.',
    solution:
      'I approached it as a multi-layered product with separate user actions for ordering, crop intelligence, recipes, and storytelling, all supported through a MERN foundation and Python-based ML integration.',
    outcome:
      'The result is a more ambitious full-stack product that shows my ability to work across user flows, data structures, and feature coordination.',
    features: [
      'Farmer-to-consumer product marketplace',
      'Order tracking workflows',
      'Crop yield prediction integration',
      'Recipe sharing and farmer blog content',
    ],
  },
  {
    slug: 'blog-sharing-website',
    name: 'Blog Sharing Website',
    eyebrow: 'MERN project',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    summary:
      'A blog platform where users can register, create, edit, and manage their own posts with secure authentication and controlled access.',
    challenge:
      'The main requirement was to keep the publishing workflow straightforward while maintaining secure, user-specific control over blog content.',
    solution:
      'I used the MERN stack to implement authentication, CRUD operations, and user-bound content access while keeping the UI clean and easy to navigate.',
    outcome:
      'This project strengthened my MERN workflow around authentication, full-stack data handling, and user-managed content systems.',
    features: [
      'Secure login and registration',
      'Post creation, update, and deletion',
      'User-specific content control',
      'Database-driven blog management',
    ],
  },
  {
    slug: 'apartment-management-system',
    name: 'Apartment Management System',
    eyebrow: 'MERN project',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    summary:
      'A web application for apartment residents and administrators to manage notices, complaints, events, and user information through one shared platform.',
    challenge:
      'The product had to serve two kinds of users, residents and admins, while keeping sensitive information organized and actions easy to understand.',
    solution:
      'I built role-oriented flows with React and a Node/Express backend so that notices, complaints, and operational updates could live in one coherent system.',
    outcome:
      'The project reflects my ability to think in terms of real operational workflows instead of isolated screens.',
    features: [
      'Resident and admin management flows',
      'Notice, event, and complaint handling',
      'Secure data interaction',
      'Centralized apartment communication',
    ],
  },
  {
    slug: 'fitness-tracker',
    name: 'Fitness Tracker',
    eyebrow: 'MERN build',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    summary:
      'A fitness tracking application that helps users log workouts, monitor calories, set goals, and visualize progress.',
    challenge:
      'The product needed to turn personal fitness data into something motivating and readable rather than just another form-based dashboard.',
    solution:
      'I designed around regular user habits like logging workouts and checking progress, then connected those patterns to data views and tracking features inside the MERN stack.',
    outcome:
      'This project demonstrates my interest in products where ongoing user engagement matters as much as basic feature delivery.',
    features: [
      'Workout logging',
      'Goal setting',
      'Calorie monitoring',
      'Progress visualization',
    ],
  },
  {
    slug: 'fisat-college-bus-pass-booking',
    name: 'FISAT College Bus Pass Booking',
    eyebrow: 'MERN project',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    summary:
      'An online system for FISAT students to book, cancel, and manage bus passes with admin control and secure access.',
    challenge:
      'Transportation workflows are small but operationally sensitive, so the system had to make routine actions quick while still handling admin control cleanly.',
    solution:
      'I modeled it as a straightforward service flow: secure login, clear booking actions, cancellation support, and a separate layer for administrative oversight.',
    outcome:
      'The project highlights my ability to build useful service-based applications around practical day-to-day needs.',
    features: [
      'Bus pass booking and cancellation',
      'Admin controls',
      'Secure user login',
      'Student self-service workflow',
    ],
  },
]

export const certifications = [
  'SQL and Relational Database from IBM',
  'Learn Java Programming Beginner to Master from Udemy',
  'Introduction to Data Science from Infosys Springboard',
]

export const extras = {
  traits: [
    'Time management',
    'Problem solving',
    'Team collaboration',
    'Quick learner',
    'Positive in changing situations',
  ],
  volunteering: ['Guides and Scout', 'National Service Scheme'],
  interests: ['Photography', 'Gardening', 'Drawing'],
  activities: ['Volunteering', 'Social club member', 'Cultural events'],
}

export const projectLinks = projects.map((project) => ({
  name: project.name,
  slug: project.slug,
  href: `/projects/${project.slug}`,
}))
