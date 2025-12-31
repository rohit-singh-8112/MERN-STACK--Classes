
import { ChevronsLeftRight } from "lucide-react";
import ProjectTechName from "./ProjectTechName";
import Section from "./Section.jsx";

const Skills = ({ SkillsArr }) => {
    return(
      <div className="mt-4 px-4">
          <Section Icon={<ChevronsLeftRight />} title="Skills" font="h2" />
           <div className="flex flex-wrap justify-start px-1">
             {SkillsArr.map((tech, index) => <ProjectTechName key={index} tech={tech} />)}
           </div>
         </div>
     
    );
}
export default Skills;


