import AboutMe from '@components/sections/AboutMe';
import Experience from '@components/sections/Experience';
import Projects from '@components/sections/Projects';
import Footer from '@components/sections/Footer';

export default function HomeContent() {
  return (
    <div>
      <AboutMe />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
