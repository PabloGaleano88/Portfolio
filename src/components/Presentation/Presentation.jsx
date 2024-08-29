import { useContext } from "react";
import "./Presentation.css";
import { LangContext } from "../../Context/Langcontext";

import photo from "../../assets/photos/aboutmephoto.jpg";
import download_icon from "../../assets/icons/download.svg";

const Presentation = () => {
  const { language } = useContext(LangContext);

  return (
    <div className="flex_container">
      <div>
        <img className="photo" src={photo} alt="" />
      </div>
      <div className="titles">
        <h2>{language === "en" ? "Hello, I'm Pablo" : "Hola! Soy Pablo"}</h2>
        <h1>
          {language === "en"
            ? "FullStack Developer"
            : "Desarrollador FullStack"}
        </h1>
        <p className="presentation_desc">
          {language === "en"
            ? "Electronic Engineer and Full Stack Developer. I am passionate about transforming ideas into efficient and scalable technological solutions. I have gained knowledge in Frontend and Backend development using modern frameworks, and I am here to help you take your project to the next level. Explore my projects or let's get in touch!"
            : "Ingeniero electrónico y desarrollador Full Stack. Me apasiona transformar ideas en soluciones tecnológicas eficientes y escalables. Adquirí conocimientos de Frontend y Backend con la utilización frameworks modernos, estoy aquí para ayudarte a llevar tu proyecto al siguiente nivel. Explora mis proyectos o ¡pongámonos en contacto!"}
        </p>
        <a
          href={
            language === "en"
              ? "https://drive.google.com/file/d/14Icp5iM3oDAJE30YLpp5ApBLpYima6b6/view?usp=drive_link"
              : "https://drive.google.com/file/d/1Lb-h2OV9cj8dzg5DekebRan0MeDuyrD4/view?usp=drive_link"
          }
          download="resume Galeano"
        >
          {language === "en" ? "DOWNLOAD RESUME" : "DESCARGAR CV"}
          <img src={download_icon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Presentation;
