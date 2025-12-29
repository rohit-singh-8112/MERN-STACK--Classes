
import { ChevronsLeftRight } from "lucide-react";
import ProjectTechName from "./ProjectTechName";
import Heading from "./Heading";

const Skills = ({ SkillsArr }) => {
    return(
      <div className="mt-4 px-4">
           <span className="flex">
             <ChevronsLeftRight />
             <Heading name="Skills" font="h2" />
           </span>
           <div className="flex flex-wrap justify-start px-1">
             {SkillsArr.map((tech, index) => <ProjectTechName key={index} tech={tech} />)}
           </div>
         </div>
     
    );
}
export default Skills;


