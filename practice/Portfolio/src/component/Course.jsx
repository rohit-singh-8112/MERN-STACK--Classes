
import Heading from "./Heading";

const Course = ({courseName, institution, year, CourseWork}) => {
  return (
    <div className=" rounded bg-sky-100/20 mt-3">
      <Heading name={courseName} />
      <p className="pt-2 px-4 text-gray-600">{institution}, {year}</p>
      <p className="pt-1 px-4 text-gray-600">Relevant Coursework: {CourseWork.join(", ")}</p>
    </div>
  );
}
export default Course;