import "./Header.css";

import spanish from "../../assets/icons/spanish.svg";
import english from "../../assets/icons/english.svg";

import { useContext, useState } from "react";

import { LangContext } from "../../Context/Langcontext";

const Header = () => {
  const { language, setLanguage } = useContext(LangContext);

  return (
    <div className="bar">
      <div className="links">
        <a className="link" href="#home">
          {language === "en" ? "HOME" : "INICIO"}
        </a>
        <a className="link" href="#home">
          {language === "en" ? "ABOUT ME" : "SOBRE MÍ"}
        </a>
        <a className="link" href="#projects">
          {language === "en" ? "PROJECTS" : "PROYECTOS"}
        </a>
        <a className="link" href="#certificates">
          {language === "en" ? "COURSE CERTIFICATES" : "CERTIFICADOS"}
        </a>
      </div>
      <div className="lang_selector">
        <img
          onClick={() => setLanguage("es")}
          className={language === "en" ? "noselected" : null}
          src={spanish}
          alt="Español"
        />
        <img
          onClick={() => setLanguage("en")}
          className={language === "en" ? null : "noselected"}
          src={english}
          alt="English"
        />
      </div>
    </div>
  );
};

export default Header;
