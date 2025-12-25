import { User, Briefcase, ChevronsLeftRight, BookOpen, Heart, Award, Globe, Linkedin, Github, Twitter } from 'lucide-react';

function App() {  return (
    <>
      <div className="m-2 bg-gray-200 rounded">
        <div className="text-4xl font-bold rounded-tl-lg rounded-tr-lg bg-blue-500 p-4 text-white text-left">
          <div>
            <span className="inline-block align-text-bottom text-4xl font-bold rounded-tl-lg rounded-tr-lg bg-blue-500 text-white text-left">Rohit Chauhan</span><br/>
            <span className="inline-block align-text-top text-white text-xl">Full Stack Developer</span>
          </div>
          <div className="absolute right-0 top-0 m-5">
            <img className="size-24 rounded-full shadow-xl/40 shadow-red-500" src="./src/image/rohit.jpg" />
          </div>
        </div>

        <div className="px-4 ">
          <span className="inline-block flex"></span>
          <h2 className=" flex mb-2 text-xl font-sans font-bold "> <User />About Me</h2>
          <p className="mb-4">
            I am a passionate Full Stack Developer with experience in building web applications using modern technologies. I enjoy solving complex problems and creating efficient solutions.
          </p>
        </div>
        <div className ="mt-4 px-4" >
          <span  className="flex mb-2 pt-3 font-sans">
            <Briefcase />
            <h2 className="ml-1 inline-block align-text-top text-xl font-bold"> Experience</h2>
          </span>
          <div className="shadow-xl shadow-gray-400 mx-2 rounded bg-sky-100/20">
            <h3 className="font-bold px-4 ">E-Commerce Plateform</h3>
            <p className="pt-2 px-4 text-gray-600">Developed a full-stack e-commerce platform using React, Node.js, and MongoDB. Implemented user authentication, product management, and payment processing features.</p>
            <div className="flex">
              <span className="px-4 py-0.5 m-2 bg-blue-200/40 hover:bg-blue-200 rounded text-blue-800 text-sm font-semibold">React</span>
              <span className="px-4 py-0.5 m-2 bg-green-200/40 hover:bg-green-200 rounded text-green-800 text-sm font-semibold">Node.js</span>
              <span className="px-4 py-0.5 m-2 bg-yellow-200/40 hover:bg-yellow-200 rounded text-yellow-800 text-sm font-semibold">MongoDB</span>
            </div>
          </div>
          <div className="shadow-xl mt-3 shadow-gray-400 mx-2 rounded bg-sky-100/20">
            <h3 className="font-bold px-4 ">Social Media Dashboard</h3>
            <p className="pt-2 px-4 text-gray-600">Developed a full-stack e-commerce platform using React, Node.js, and MongoDB. Implemented user authentication, product management, and payment processing features.</p>
            <div className="flex">
              <span className="px-4 py-0.5 m-2 bg-blue-200/40 hover:bg-blue-200 rounded text-blue-800 text-sm font-semibold">Vue.js</span>
              <span className="px-4 py-0.5 m-2 bg-green-200/40 hover:bg-green-200 rounded text-green-800 text-sm font-semibold">D3.js</span>
              <span className="px-4 py-0.5 m-2 bg-yellow-200/40 hover:bg-yellow-200 rounded text-yellow-800 text-sm font-semibold">PostgreSQL</span>
            </div>
          </div>
        </div>
        <div className="mt-4 px-4">
          <span className="flex">
            <ChevronsLeftRight />
            <h2 className="ml-1 text-xl font-bold"> Skills</h2>
          </span>
          <div className="flex flex-wrap justify-start px-1">
            <span className="px-4 py-0.5 m-2 bg-purple-200/40 hover:bg-purple-300 rounded-full text-purple-800 text-sm font-semibold">JavaScript</span>
            <span className="px-4 py-0.5 m-2 bg-red-200/40 hover:bg-red-300 rounded-full text-red-800 text-sm font-semibold">Python</span>
            <span className="px-4 py-0.5 m-2 bg-green-200/40 hover:bg-green-300 rounded-full text-green-800 text-sm font-semibold">React</span>
            <span className="px-4 py-0.5 m-2 bg-yellow-200/40 hover:bg-yellow-300 rounded-full text-yellow-800 text-sm font-semibold">Node.js</span>
            <span className="px-4 py-0.5 m-2 bg-blue-200/40 hover:bg-blue-300 rounded-full text-blue-800 text-sm font-semibold">Django</span>
            <span className="px-4 py-0.5 m-2 bg-pink-200/40 hover:bg-pink-300 rounded-full text-pink-800 text-sm font-semibold">SQL</span>
          </div>
        </div>
        <div className="mt-4 px-4">
          <div className="flex">
            <BookOpen />
            <h2 className="ml-1 text-xl font-bold"> Education</h2>
          </div>
          <div className=" rounded bg-sky-100/20 mt-3">
            <h3 className="font-bold px-4 ">Bachelor of Technology in Computer Science</h3>
            <p className="pt-2 px-4 text-gray-600">XYZ University, 2018 - 2022</p>
            <p className="pt-1 px-4 text-gray-600">Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management</p>
          </div>
          <div className="rounded bg-sky-100/20 mt-3">
            <h3 className="font-bold px-4 ">High School Diploma</h3>
            <p className="pt-2 px-4 text-gray-600">ABC High School, 2016 - 2018</p>
            <p className="pt-1 px-4 text-gray-600">Graduated with Honors, Focus on Science and Mathematics</p>
          </div>
        </div>
        <div className="mt-4 px-4">
          <div className="flex">
            <Heart />
            <h2 className="ml-1 text-xl font-bold"> Hobbies & Interests</h2>
          </div>
          <ul className="list-disc list-inside mt-2 mb-4 mx-3 text-gray-700">
            <li>Coding and exploring new technologies</li>
            <li>Reading tech blogs and books</li>
            <li>Traveling and experiencing different cultures</li>
            <li>Playing chess and solving puzzles</li>
          </ul>
        </div>
        <div className="mt-4 px-4">
          <div className="flex">
            <Award />
            <h2 className="ml-1 text-xl font-bold"> Extracurricular Activites</h2>
          </div>
          <ul className="list-disc list-inside mt-2 mb-4 mx-3 text-gray-700">
            <li>Member of the university coding club, organizing hackathons and coding competitions.</li>
            <li>Volunteered for local community tech workshops, teaching basic programming skills to beginners.</li>
            <li>Participated in inter-college tech fests and won awards for innovative project presentations.</li>
          </ul>
        </div>
        <div className="mt-4 px-4">
          <div className="flex">
            <Globe />
            <h2 className="ml-1 text-xl font-bold"> Contect & Social Media</h2>
          </div>
          <ul className="mt-2 mb-4 mx-3 text-gray-700">
            <li>Email: Chauhanrc7878@email.com</li>
            <li>Phone: +919336454282</li>
          </ul>
          <div className="flex mt-2 mx-3 text-blue-700 hover:underline">
            <Linkedin />
            <a href="https://www.linkedin.com/in/rohit-chauhan-7878/" className="pt-0.5 px-1 font-bold ">LinkedIn</a>
          </div>
          <div className="flex mx-3 text-blue-700 hover:underline">
            <Github />
            <a href="https://www.linkedin.com/in/rohit-chauhan-7878/" className="pt-0.5 px-1 font-bold ">GitHub</a>
          </div>
          <div className="flex mx-3 text-blue-700 hover:underline">
            <Twitter />
            <a href="https://www.linkedin.com/in/rohit-chauhan-7878/" className="pt-0.5 px-1 font-bold ">Twitter</a>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
