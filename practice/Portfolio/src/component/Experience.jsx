
import { Briefcase } from "lucide-react";
import Heading from "./Heading.jsx";
import ProjectContent from "./ProjectContent.jsx";

const Experience = ({ExprienceArr}) => {
  return (
    <div className ="mt-4 px-4" >
          <div className="flex">
            <Briefcase />
            <Heading name="Experience" font="h2" />
          </div>
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