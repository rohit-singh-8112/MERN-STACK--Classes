


const Link = ({icon, name, url}) => {
        

          return <a className="flex mb-1 text-sky-400 hover:text-blue-600 font-semibold" href ={url}>{icon}
          <span className="ml-2">{name}</span>
          </a>
 
        
} 
export default Link;
 