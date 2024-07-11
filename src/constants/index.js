import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  people,
  colla,
  commu,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  recure,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Machine Learning',
    icon: ux,
  },
  {
    title: 'Software Developer',
    icon: prototyping,
  },
];

const technologies = [
//  {
//   name : 'html',
//   icon : html,
//  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'MongoDB',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Express',
    icon: rubyrails,
  },
  {
    name: 'Flask',
    icon: graphql,
  },
  {
    name: 'sql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'PyTorch',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'Collaboration',
    icon: colla,
  },
  {
    name: 'Communication',
    icon: commu,
  },
  {
    name: 'People Management',
    icon: people,
  },
];

const experiences = [
  {
    title: 'Software Development Intern',
    company_name: 'Broken Atom',
    company_des:'Developed a comprehensive web application from scratch using React and Python writing algorithms for its functionalities',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'May 2024 - Present',
  },
  {
    title: 'Full Stack Development Intern',
    company_name: 'Prepinsta',
    company_des:' Developed responsive web pages using HTML  CSS and JavaScript  integrated backend APIs collaborated with team members',
    icon: microverse,
    iconBg: '#333333',
    date: 'Jan 2024 - April 2024',
  },
  {
    title: 'Technical Lead - ECLUB ',
    company_name: 'Gitam University',
    company_des:'Oversee the planning execution and delivery of technical projects  Lead and mentor a team of developers',

    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2024 - Present',
  },
  {
    title: 'CO-Founder',
    company_name: 'Shadow Rise',
    company_des:'dynamic platform empowering GenerationZ with resources mentorship and real world experiences to turn innovative ideas into successful ventures',
    icon: dcc,
    iconBg: '#333333',
    date: 'Oct 2023 - Present',
  },
  {
    title: 'Free-Lancer',
    company_name: 'Recure',
    company_des:'Collaborated with clients togather requirements an deliver tailored solutions',
    icon: recure,
    iconBg: '#333333',
    date: 'June - Present', 
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Mediapipe Pose Estimation',
    description: 'Developed a React app using MediaPipe Pose Landmarker for real-time video analysis, detecting body landmarks and calculating angles between selected points.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Computer Vision',
        color: 'green-text-gradient',
      },
      {
        name: 'Java script',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/Shasidharyadav/Mediapipe-pose-estimation',
    demo: 'https://mediapipe-pose-estimation-shasidharyadavrs-projects.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'Business Idea Validator',
    description:
      'Developed a Business Idea Validator using the Gemini API for data retrieval and analysis. Integrated the platform with Streamlit to create a user-friendly interface for submitting and receiving feedback on business concepts.',
    tags: [
      {
        name: 'StreamLit',
        color: 'blue-text-gradient',
      },
      {
        name: 'Gemini API',
        color: 'green-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: '',
    demo: 'https://demoai.streamlit.app/',
  },
  {
    id: 'project-3',
    name: 'SurplusServe',
    description: "platform that connects food donors with recipient to reduce food waste and hunger.",
    tags: [
      {
        name: 'nodejs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Express',
        color: 'green-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'pink-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'pink-text-gradient',
      },
    ], 
    image: math,
    repo: 'https://github.com/Shasidharyadav/SurplusServe',
    demo: 'https://drive.google.com/file/d/1ElggOP6iRO7yhxtY5zEThml27EJcAYgo/view',
  },
  {
    id: 'project-4',
    name: 'CHITTI',
    description: 'An AI-powered mental health chatbot using NLP to understandand respond to mental health queries',
    tags: [
      {
        name: 'Flask',
        color: 'blue-text-gradient',
      },
      {
        name: 'NLTK',
        color: 'green-text-gradient',
      },
      {
        name: 'TensorFlow',
        color: 'pink-text-gradient',
      },
      {
        name: 'Keras',
        color: 'pink-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/Shasidharyadav/SurplusServe',
    demo: 'https://drive.google.com/file/d/1-936_l2QrWDFdDfReG6sesvNpFwrbXnN/view',
  },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
