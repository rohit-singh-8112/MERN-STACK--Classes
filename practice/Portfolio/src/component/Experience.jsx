
import { Briefcase } from "lucide-react";
import Section from "./Section.jsx";
import ProjectContent from "./ProjectContent.jsx";

const Experience = ({ExprienceArr}) => {
  return (
    <div className ="mt-4 px-4" >
          <Section Icon={<Briefcase />} title="Experience" font="h2" />
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