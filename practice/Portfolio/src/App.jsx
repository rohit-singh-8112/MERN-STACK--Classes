



import AboutMe from './component/About_me.jsx';
import Header from './component/Header.jsx';
import Experience from './component/Experience.jsx';
import Skills from './component/Skills.jsx';  
import Contect from './component/Contect.jsx';
import Education from './component/Education.jsx';
import Activities from './component/Activities.jsx';
import Hobbies from './component/Hobbies.jsx';
import { Linkedin, Github, Twitter, Earth } from "lucide-react";


function App() { 

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------DATA ARRAYS AND OBJECTS FOR PORTFOLIO COMPONENTS--------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


const ExprienceArr = [
    {
      title: "Portfolio Website",
      discription: "A personal portfolio website to showcase my projects and skills.",
      tech: ["React", "Tailwind CSS", "JavaScript"]
    },  
    {
      title: "E-commerce Platform",
      discription: "An online platform for buying and selling products.",
      tech: ["Node.js", "Express", "MongoDB"]
    },
    {
      title: "Blog Application",
      discription: "A web application for creating and sharing blog posts.",
      tech: ["Django", "Python", "SQLite"]
    }
  ];

  const SkillsArr =["JavaScript", "Python", "React", "Node.js", "Django", "SQL"];

  const LinksNameURL = [
    {name: "LinkedIn", url: "https://www.linkedin.com/in/yourprofile", id:"1", icon: <Linkedin />},
    {name: "GitHub", url: "https://github.com/yourprofile", id:"2", icon: <Github />},
    {name: "Twitter", url: "https://twitter.com/yourprofile", id:"3", icon: <Twitter />},
    {name: "Website", url: "https://www.yourwebsite.com", id:"4", icon: <Earth />}
  ];

  const EducationArr = [
    {
      courseName: "Bachelor of Technology in Computer Science",
      institution: "XYZ University",
      year: "2018 - 2022",
      CourseWork: ["Data Structures", "Algorithms", "Web Development", "Database Management"]
    },
    {
      courseName: "High School Diploma",
      institution: "ABC High School",
      year: "2016 - 2018",
      CourseWork: ["Graduated with Honors", "Focus on Science and Mathematics"]
    }
  ];

  const ActivitiesArr = [
    "Member of the university coding club, organizing hackathons and coding competitions.",
    "Volunteered for local community tech workshops, teaching basic programming skills to beginners.",
    "Participated in inter-college tech fests and won awards for innovative project presentations."
  ];

  const HobbiesArr = [
    "Coding and exploring new technologies",
    "Reading tech blogs and books",
    "Traveling and experiencing different cultures",
    "Playing chess and solving puzzles"
  ];

 
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------END OF DATA ARRAYS AND OBJECTS FOR PORTFOLIO COMPONENTS--------------------------------------------------------------------------------------------------------------------  
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


  
  return (
    <>
      <div className="bg-slate-200">
        <div className="max-w-3xl m mx-auto bg-white">
          <Header />
          <AboutMe />
          <Experience ExprienceArr={ExprienceArr} />
          <Skills SkillsArr={SkillsArr} />
          <Education EducationArr={EducationArr} />
          <Hobbies HobbiesArr={HobbiesArr} />
          <Activities ActivitiesArr={ActivitiesArr} />
          <Contect LinksNameURL={LinksNameURL} />
        </div>
      </div>
      
    </>
  )
}

export default App
