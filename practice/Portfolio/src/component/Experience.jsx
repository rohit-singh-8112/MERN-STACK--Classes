
import { Briefcase } from "lucide-react";
import Heading from "./Heading.jsx";
import ProjectContent from "./ProjectContent.jsx";

const Experience = ({ExprienceArr}) => {
  return (
    <div className ="mt-4 px-4" >
          <span  className="mb-2 pt-3 font-sans">
            <Briefcase />
            <Heading name="Experience" font="h2" />
          </span>
          {ExprienceArr.map((project, index) => (
            <ProjectContent 
              key={index}
              title={project.title}
              discription={project.discription}
              tech={project.tech}
            />
          ))}
        </div>
  );
}
export default Experience;