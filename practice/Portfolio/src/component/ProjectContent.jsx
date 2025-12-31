
import ProjectTechName from "./ProjectTechName";
import Heading from "./Heading";

const ProjectContent = ({title, discription,tech}) => {
  return (
    
          <div className="shadow-xl shadow-gray-400 mt-2 mx-2 rounded bg-sky-100/20">
            <Heading name={title} />
            <p className="pt-2 px-4 text-gray-600">{discription}</p>
            <div className="flex flex-wrap justify-start">  
              {tech.map((tech, index) => (
                <ProjectTechName key={index} tech={tech} />
              ))}
            </div>
          </div>
  );
}

export default ProjectContent;



































































  // <div className="shadow-xl shadow-gray-400 mx-2 rounded bg-sky-100/20">
  //           <Heading name="E-Commerce Platform" />
  //           <p className="pt-2 px-4 text-gray-600">Developed a full-stack e-commerce platform using React, Node.js, and MongoDB. Implemented user authentication, product management, and payment processing features.</p>
  //           <div className="flex">
  //             <span className="px-4 py-0.5 m-2 bg-blue-200/40 hover:bg-blue-200 rounded text-blue-800 text-sm font-semibold">React</span>
  //             <span className="px-4 py-0.5 m-2 bg-green-200/40 hover:bg-green-200 rounded text-green-800 text-sm font-semibold">Node.js</span>
  //             <span className="px-4 py-0.5 m-2 bg-yellow-200/40 hover:bg-yellow-200 rounded text-yellow-800 text-sm font-semibold">MongoDB</span>
  //           </div>
  //         </div>



















// <div className="shadow-xl mt-3 shadow-gray-400 mx-2 rounded bg-sky-100/20">
//             <Heading name="Social Media Dashboard" />
//             <p className="pt-2 px-4 text-gray-600">Developed a full-stack e-commerce platform using React, Node.js, and MongoDB. Implemented user authentication, product management, and payment processing features.</p>
//             <div className="flex">
//               <span className="px-4 py-0.5 m-2 bg-blue-200/40 hover:bg-blue-200 rounded text-blue-800 text-sm font-semibold">Vue.js</span>
//               <span className="px-4 py-0.5 m-2 bg-green-200/40 hover:bg-green-200 rounded text-green-800 text-sm font-semibold">D3.js</span>
//               <span className="px-4 py-0.5 m-2 bg-yellow-200/40 hover:bg-yellow-200 rounded text-yellow-800 text-sm font-semibold">PostgreSQL</span>
//             </div>
//           </div>