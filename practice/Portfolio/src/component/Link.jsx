
import { Linkedin, Github, Twitter, Earth } from "lucide-react";

const Link = ({name, url}) => {
        
       if(name == "LinkedIn") {
          return (
            <div className="flex mx-3 text-blue-700 hover:underline">
            <Linkedin />
            <a href={url} className="pt-0.5 px-1 font-bold ">{name}</a>
          </div>
          );
       }else if(name == "GitHub") {
        return (
        <div className="flex mx-3 text-blue-700 hover:underline">
            <Github />
            <a href={url} className="pt-0.5 px-1 font-bold ">{name}</a>
          </div>
        );
       } else if(name == "Twitter") {
        return (
         <div className="flex mx-3 text-blue-700 hover:underline">
            <Twitter />
            <a href={url} className="pt-0.5 px-1 font-bold ">{name}</a>
          </div>
        );
        } else if(name == "Website") {
          return (
         <div className="flex mx-3 text-blue-700 hover:underline">
            <Earth />
            <a href={url} className="pt-0.5 px-1 font-bold ">{name}</a>
          </div>
          );
        }
        
} 
export default Link;
