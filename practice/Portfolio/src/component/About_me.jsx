
import Section from './Section.jsx';
import { User } from 'lucide-react';

const AboutMe = () => {
  return (
    <div className="px-4 mt-4 ">
      <Section Icon={<User />} title="About Me" font="h2" />
      <p className="mb-4">
        I am a passionate Full Stack Developer with experience in building web applications using modern technologies. I enjoy solving complex problems and creating efficient solutions.
      </p>
    </div>
  );
}
export default AboutMe;