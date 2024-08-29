import { useContext } from "react";

import css3 from "../../assets/technologies/css3.svg";
import html5 from "../../assets/technologies/html5.svg";
import express from "../../assets/technologies/express.svg";
import javascript from "../../assets/technologies/javascript.svg";
import mongodb from "../../assets/technologies/mongodb.svg";
import nodejs from "../../assets/technologies/nodejs.svg";
import react from "../../assets/technologies/react.svg";
import vite from "../../assets/technologies/vite.svg";
import github from "../../assets/technologies/github.svg";
import python from "../../assets/technologies/python.svg";
import glasses from "../../assets/technologies/sunglasses.svg";
import gear from "../../assets/technologies/settings.svg";
import stack from "../../assets/technologies/stack-3.svg";

import { LangContext } from "../../Context/Langcontext";

import "./Aboutme.css";

const Aboutme = () => {
  const { language } = useContext(LangContext);

  return (
    <div className="aboutme">
      <h4>SOBRE MÍ</h4>
      <div className="aboutme_block"></div>
      <div className="blocks">
        <p>
          {language === "en" ? (
            <>
              My name is <b> Pablo Galeano </b>, and I am an Electronic Engineer
              graduated from the National University of La Matanza. During my
              studies, I ventured into the world of programming with various
              languages (C, C++, and VHDL). I began my career as an electronics
              technician, but life led me into the IT world, where I have been
              working for over 12 years as a systems and network administrator,
              managing backup systems and virtual machines. Over time, I started
              scripting and became interested in programming, taking courses in
              Python and FullStack (MERN). My goal is to continue growing as a
              developer and to work in what I am most passionate about.
              <div>
                My hobbies are working out, playing soccer, and spending time
                with my family.
              </div>
            </>
          ) : (
            <>
              Mi nombre es <b>Pablo Galeano</b>, soy Ingeniero Electrónico
              graduado en la Universidad Nacional de La Matanza. Durante la
              carrera incursioné en el mundo de la programación en distintos
              lenguajes (C, C++ y VHDL), luego omencé me carrera laboral como
              técnico electrónico pero la vida me ha llevado hacia el mundo IT,
              en el cual, hace más de 12 años trabajo en el área como
              administrador de sistemas y de redes, ademas de gestionar equipos
              de backup y máquinas virtuales. Con el pasar del tiempo comencé a
              realizar scripts y a interesarme en la programación realizando
              cursos de Python y tambien de FullStack (MERN). Mi objetivo es
              seguir creciendo como desarrollador y poder trabajar de lo que más
              me apasiona.
              <div>
                Mis hobbies son entrenar, jugar al futbol y pasar tiempo con mi
                familia.
              </div>
            </>
          )}
        </p>
        <div className="block grey">
          <img src={glasses} alt="" />
          <h6>
            {language === "en" ? "Frontend Develop" : "Desarrollo Frontend"}
          </h6>
          <p>
            {language === "en"
              ? "Structure and organize web page content in a semantic and accessible way. Create visually appealing interface designs."
              : "Estructurar y organizar el contenido de las páginas web de manera semántica y accesible. Crear diseños de interfaces visualmente atractivas."}
          </p>
        </div>
        <div className="block red">
          <img src={gear} alt="" />
          <h6>
            {language === "en" ? "Backend Develop" : "Desarrollo Backend"}
          </h6>
          <p>
            {language === "en"
              ? "Create and manage server-side logic in a web application. Additionally, ensure that data is properly processed and delivered from the server to the end user through the frontend interface."
              : "Crear y gestionar la lógica del lado del servidor en una aplicación web. Además de garantizar que los datos se procesen correctamente y se envíen desde el servidor hasta el usuario final, a través de la interfaz frontend."}
          </p>
        </div>
        <div className="block grey">
          <img src={stack} alt="" />
          <h6>
            {language === "en" ? "FullStack Develop" : "Desarrollo FullStack"}
          </h6>
          <p>
            {language === "en"
              ? "Manage both the frontend and backend, allowing for work on all stages of application development, from interface design to server-side logic implementation."
              : "Manejar tanto el frontend como el backend, lo que permite trabajar en todas las etapas del desarrollo de una aplicación, desde el diseño de la interfaz hasta la implementación de la lógica del servidor."}
          </p>
        </div>
      </div>
      <div className="aboutme_skills_title">
        <h5>{language === "en" ? "SKILLS" : "HABILIDADES"}</h5>
      </div>
      <div className="aboutme_skills">
        <div className="skill_block">
          <img className="aboutme_skills_img" src={html5} alt="HTML5" />
          HTML 5
        </div>
        <div className="skill_block">
          <img className="aboutme_skills_img" src={css3} alt="CSS3" />
          CSS3
        </div>
        <div className="skill_block">
          <img
            className="aboutme_skills_img"
            src={javascript}
            alt="JavaScript"
          />
          JavaScript
        </div>
        <div className="skill_block">
          <img className="aboutme_skills_img" src={react} alt="React" />
          ReactJS
        </div>
        <div className="skill_block">
          <img className="aboutme_skills_img" src={vite} alt="Vite" />
          Vite
        </div>
        <div className="skill_block">
          <img className="aboutme_skills_img" src={express} alt="ExpressJS" />
          ExpressJS
        </div>
        <div className="skill_block">
          <img className="aboutme_skills_img" src={mongodb} alt="" />
          MongoDB
        </div>
        <div className="skill_block">
          <img className="aboutme_skills_img" src={nodejs} alt="" />
          NodeJS
        </div>
        <div className="skill_block">
          <img className="aboutme_skills_img" src={github} alt="" />
          Github
        </div>
        <div className="skill_block">
          <img className="aboutme_skills_img" src={python} alt="" />
          Python
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
