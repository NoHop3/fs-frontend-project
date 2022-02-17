import Intro from "./Intro";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import "../../../styles/Home.css";

export default function Main() {
  return (
    <main>
      <Intro />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
