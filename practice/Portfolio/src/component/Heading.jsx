
const Heading = ({name, font}) => {
  if (font === "h1") {
    return <h1 className="ml-1 text-xl font-bold">{name}</h1>;
  } else if (font === "h2") {
    return <h2 className="ml-1 text-xl font-bold">{name}</h2>;
  } else {
    return <h3 className="px-4 font-bold">{name}</h3>;
  }
};
export default Heading;