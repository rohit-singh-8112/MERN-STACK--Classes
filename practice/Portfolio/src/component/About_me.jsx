import Heading from './Heading.jsx';
import { User } from 'lucide-react';

const AboutMe = () => {
  return (
    <div className="px-4 mt-4 ">
      <span className="flex">
        <User />
        <Heading name="About Me" font="h2" />
      </span>
      <p className="mb-4">
        I am a passionate Full Stack Developer with experience in building web applications using modern technologies. I enjoy solving complex problems and creating efficient solutions.
      </p>
    </div>
  );
}
export default AboutMe;