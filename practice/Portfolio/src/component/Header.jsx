


const Header = () => {
  return( 
    <>
      <div className="text-4xl font-bold rounded-tl-lg rounded-tr-lg bg-blue-500 p-4 text-white text-left">
          <div>
            <span className="inline-block align-text-bottom text-4xl font-bold rounded-tl-lg rounded-tr-lg bg-blue-500 text-white text-left">Rohit Chauhan</span><br/>
            <span className="inline-block align-text-top text-white text-xl">Full Stack Developer</span>
          </div>
          <div className="absolute right-0 top-0 m-5">
            <img className="size-24 rounded-full shadow-xl/40 shadow-red-500" src="./src/image/rohit.jpg" />
          </div>
        </div>
    
    </>
  );
} 
export default Header;