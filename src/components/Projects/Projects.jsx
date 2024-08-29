import { useContext, useEffect, useState } from "react";

import projectsjson from "./Projects_json.json";
import html from "../../assets/technologies/tags/html.svg";
import css from "../../assets/technologies/tags/css.svg";
import js from "../../assets/technologies/tags/js.svg";
import react from "../../assets/technologies/tags/react.svg";
import mongodb from "../../assets/technologies/tags/mongodb.svg";

import { LangContext } from "../../Context/Langcontext";

import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    function getData() {
      try {
        setProjects(projectsjson);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []);

  const techImages = {
    HTML: html,
    CSS: css,
    JavaScript: js,
    React: react,
    MongoDB: mongodb,
  };

  const { language } = useContext(LangContext);

  return (
    <div>
      <div id="projects">
        <h4 className="projects_title">
          {language === "en" ? "PROJECTS" : "PROYECTOS"}
        </h4>
      </div>
      <div className="projects_cards_container">
        {projects.map((project) => (
          <div key={project.id}>
            <div className="project_card">
              <img src={project.img} alt="" />
              <div className="tech">
                {project.languages.map((lang) => (
                  <img
                    key={lang}
                    src={techImages[lang]}
                    alt={lang}
                    className="tech_icon"
                  />
                ))}
              </div>
            </div>
            <div className="card_text">
              <p>{project.name}</p>
              <a href={project.url}>
                {language === "en" ? "KNOW MORE ➜" : "SABER MÁS ➜"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
