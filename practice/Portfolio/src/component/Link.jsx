


const Link = ({icon, name, url}) => {
        

          return (
            <div className="flex mx-3 text-blue-700 hover:underline">
            {icon}
            <a href={url} className="pt-0.5 px-1 font-bold ">{name}</a>
          </div>
          );
 
        
} 
export default Link;
 