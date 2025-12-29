
import { BookOpen } from 'lucide-react';
import Heading from './Heading.jsx';
import Course from './Course.jsx';
const Education = ({EducationArr}) => {

  return (
      <div className="mt-4 px-4">
          <div className="flex">
            <BookOpen />
            <Heading name="Education" font="h2" />
          </div>
          {EducationArr.map((edication, index) => (
            <Course 
              key={index} 
              courseName={edication.courseName} 
              institution={edication.institution}
              year={edication.year}
              CourseWork={edication.CourseWork}
            />
          ))}

          
        </div>

  );
}
export default Education;