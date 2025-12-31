
import {Globe} from 'lucide-react';
import Section from './Section.jsx';
import Link from './Link.jsx';



const Contect = ({LinksNameURL}) => {
  
  return (
    <div className="mt-4 px-4">
          <Section Icon={<Globe />} title="Contact & Social Media" font="h2" />
          <ul className="mt-2 mb-4 mx-3 text-gray-700">
            <li>Email: Chauhanrc7878@email.com</li>
            <li>Phone: +919336454282</li>
          </ul>
          {LinksNameURL.map((link) => (
            <Link
            key={link.id}
            icon={link.icon}
            name={link.name}
            url={link.url} />
          ))}
      </div>
  );
}
export default Contect;