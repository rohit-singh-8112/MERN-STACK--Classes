import Heading from "./Heading";

const Section = ({Icon, title, font}) => {

    return(
      <div className="flex">
        {Icon}
        <Heading name={title} font={font} />
      </div>

  );
}
export default Section;