import bravex from '../images/bravex.png'
import geegpay from '../images/geegpay.png'
import talentsync from '../images/talentsync.png'
import toggle from '../images/toggle.png'
import trail from '../images/trail.png'

const projectsData = [
    {
      period: { start: "SEPT 2022", end: "APR 2023" },
      role: "Online Course Enrolment",
      company: "CS50x",
      desc: "Embarked on an enriching educational journey by engaging with course materials and solving challenging problems that equipped me with the fundamental and foundational knowledge and skills in Computer Science and programming.",
      tools: ["HTML", "CSS", "JavaScript", 'C', 'Python', 'SQL', 'Flask', 'Data Structures & Algorithm'],
      link: 'https://github.com/code50/109081098'
    },
    {
      period: { start: "MAR 2023", end: "MAR 2023" },
      role: "CS50x Final Project",
      company: "CS50x",
      desc: "Designed, Developed and built my CS50x Final project, which was a simple demo implementation of a College's departmental website that exists as a means to relay information to the students of the department and visitors. ",
      tools: ["HTML", "CSS", "JavaScript", "Flask", "Github"],
      link: 'https://lambdola.github.io/aeefinalproject.github.io'
    },
    {
      period: { start: "MAY 2023", end: "MAY 2023" },
      role: "Front End Developer",
      company: "UI Design",
      desc: "Built an NFT card component by following a Figma file design to pixel perfect details",
      tools: ["HTML", "CSS", "JavaScript", "Figma", "Github"],
      link: 'https://lambdola.github.io'
    },
    {
      period: { start: "JUL 2023", end: "PRESENT" },
      role: "Full Stack Developer",
      company: "Trizent Autos",
      desc: "Designed, developed and built a demo car website providing services to buy, rent and repair cars.",
      tools: ["React", "TailwindCSS", "Express.js", "MongoDB", "Node.js" , "Git/Github"],
      link: 'https://trizent-autos-fe.vercel.app'
    },
   
    {
      period: { start: "SEPT 2023", end: "SEPT 2023" },
      role: "Front End Developer",
      company: "CGPA Calculator",
      desc: "Built a university standard CGPA calculator designed after the CGPA grading system of the University of Ibadan.",
      tools: ["React", "TailwindCSS", "Github"],
      link: 'https://ui-cgpa-calc.onrender.com'
    },
    {
      period: { start: "NOV 2023", end: "NOV 2023" },
      role: "Full Stack Developer",
      company: "Stutern",
      desc: "Built a full stack application that enables small businesses to efficiently manage and track payments and invoices.",
      tools: ["React", "TailwindCSS", "Express.js", "MongoDB", "Node.js", "Git/Github", "Flutterwave", "Node Mailer"],
      link: 'https://itrack-2.vercel.app'
    },
    {
      period: { start: "DEC 2023", end: "DEC 2023" },
      role: "Front End Developer",
      company: "Design Illustration",
      desc: "Developed an amimation based mobile bottom nav bar design illustration.",
      tools: ["HTML", "CSS", "JavaScript", "Figma", "Animation"],
      link: 'https://twitter.com/elijahdimeji549/status/1748013457276915999?s=19'
    },
    {
      period: { start: "DEC 2023", end: "PRESENT" },
      role: "Full Stack Developer",
      company: "Intertwined",
      desc: "Designed, developed and deployed a full stack web app that acts as a plaform for people in need of manual services and requests to find and connect with service renderers..",
      tools: ["React", "TailwindCSS", "Express.js", "MongoDB", "Node.js" , "Git/Github"],
      link: 'https://intertwined-fe.vercel.app'
    },
    {
      period: { start: "JAN 2024", end: "JAN 2024" },
      photo: trail,
      company: "Light Trail",
      desc: "Built and deployed an animation based design illustration. ",
      tools: ["HTML", "CSS", "JavaScript", "Animation"],
      link: 'https://light-trail.vercel.app'
    },
    {
      period: { start: "JAN 2024", end: "JAN 2024" },
      photo: toggle,
      company: "Theme Switch",
      desc: "Built and deployed an animation based theme toggling switch ",
      tools: ["HTML", "CSS", "JavaScript", "Animation"],
      link: 'https://two-face.vercel.app'
    },
    {
      period: { start: "JAN 2024", end: "JAN 2024" },
      photo: talentsync,
      company: "Talent Sync",
      desc: "Developed and deployed a project by following a Figma file design as a role assessment test.",
      tools: ["HTML", "CSS", "JavaScript", "Figma", "Vercel"],
      link: 'https://talentsync-assessment-ebon.vercel.app'
    },
    {
      period: { start: "JAN 2024", end: "JAN 2024" },
      photo: geegpay,
      company: "Geegpay",
      desc: "Developed and deployed a Figma file design as an entry project for a Front-end design challenge.",
      tools: ["HTML", "CSS", "JavaScript", "Figma", "Animation", "Responsiveness"],
      link: 'https://geegpay-fe-dashboard-challenge.vercel.app'
    },
    {
      period: { start: "JAN 2024", end: "JAN 2024" },
      photo: bravex,
      company: "Bravex",
      desc: "Designed, developed and deployed an animation based project as a role evaluation test.",
      tools: ["HTML", "CSS", "Animation", "Github"],
      link: 'https://bravex-demo.vercel.app'
    }
  ];

  export default projectsData.reverse();