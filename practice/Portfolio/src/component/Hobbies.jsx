

import { Heart } from 'lucide-react';
import Section from './Section.jsx';

const Hobbies = ({HobbiesArr}) => {
  return (
     <div className="mt-4 px-4">
          <Section Icon={<Heart />} title="Hobbies & Interests" font="h2" />
          <ul className="list-disc list-inside mt-2 mb-4 mx-3 text-gray-700">
            {HobbiesArr.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
  );
}
export default Hobbies;