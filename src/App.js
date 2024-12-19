import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css";
import data from "./assets/data";
import Blobs from "./partials/Blobs";
import Card from "./partials/Card";
import About from "./partials/About";
import Skills from "./partials/Skills";
import Projects from "./partials/Projects";
import Footer from "./partials/Footer";

function App() {

  useEffect(() => {
    AOS.init({
      once: true
    })
  })

  return (
    <div className="min-h-screen px-3 py-10 sm:px-5 bg-gray-50">

      <div data-aos="fade-down" data-aos-duration="800">
        <div className="w-full flex items-center justify-center">
          <div className="relative w-full max-w-lg">
            <Blobs />
            <Card name={data.name} title={data.title} social={data.socials} />
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <About title={data.about.title} description={data.about.description} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Footer github={data.socials.github}/>
      </div>

    </div>
  );
}

export default App;
