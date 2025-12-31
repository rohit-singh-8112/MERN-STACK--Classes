
import photos from "../assets/image/rohit.jpg";

const Header = () => {
  return( 
    <>
      <div className="flex rounded-tl-lg rounded-tr-lg bg-blue-500 p-4 text-white text-left justify-between items-center shadow-lg shadow-blue-300/50">
        <div>
          <div className="font-bold text-3xl">Rohit Chauhan</div>
          <div className="font-semibold text-xl">Full Stack Developer</div>
        </div>
        <img className="w-24 rounded-full shadow-xl/40 shadow-red-500 " src={photos} alt="My image"/>
      </div>
    
    </>
  );
} 
export default Header;