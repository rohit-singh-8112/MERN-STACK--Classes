
import { BookOpen } from 'lucide-react';
import  Section from './Section.jsx';
import Course from './Course.jsx';
const Education = ({EducationArr}) => {

  return (
      <div className="mt-4 px-4">
          <Section Icon={<BookOpen />} title="Education" font="h2" />
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