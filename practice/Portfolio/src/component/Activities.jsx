
import { Award } from 'lucide-react';
import Section from './Section.jsx';

const Activities = ({ ActivitiesArr }) => {
  return (
      <div className="mt-4 px-4">
          <Section Icon={<Award />} title="Extracurricular Activities" font="h2" />
          <ul className="list-disc list-inside mt-2 mb-4 mx-3 text-gray-700">
            {ActivitiesArr.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul> 
        </div>
  );
}
export default Activities;