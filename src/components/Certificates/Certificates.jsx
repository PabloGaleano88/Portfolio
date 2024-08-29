import { useContext } from "react";
import { LangContext } from "../../Context/Langcontext";

import "./Certificates.css";

import webdev from "../../assets/certificates/webdev_spa.png";
import jsdev from "../../assets/certificates/js_spa.png";
import reactdev from "../../assets/certificates/react_spa.png";
import backend from "../../assets/certificates/backend_esp.png";
import fullstack from "../../assets/certificates/fullstack_spa.png";
import python from "../../assets/certificates/Diplomatura_Python.png";

function IndividualIntervalsExample() {
  const { language } = useContext(LangContext);

  return (
    <div id="certificates">
      <div className="background_block">
        <div className="certificates_title">
          <h4>{language === "en" ? "COURSE CERTIFICATES" : "CERTIFICADOS"}</h4>
        </div>
        <div className="cert_container">
          <div className="cert_box">
            <img src={webdev} alt="" />
            <a
              className="cert_link"
              href={
                language === "en"
                  ? "https://www.coderhouse.com/ar/certificados/63a9a8e20a6cf8000e9b7bbc?lang=en"
                  : "https://www.coderhouse.com/ar/certificados/63a9a8e20a6cf8000e9b7bbc?lang=es"
              }
            >
              {language === "en" ? "VIEW CERTIFICATE ➜" : "VER CERTIFICADO ➜"}
            </a>
          </div>
          <div className="cert_box">
            <img src={jsdev} alt="" />
            <a
              className="cert_link"
              href={
                language === "en"
                  ? "https://www.coderhouse.com/ar/certificados/646e167f40b36c00023d5cee?lang=en"
                  : "https://www.coderhouse.com/ar/certificados/646e167f40b36c00023d5cee?lang=es"
              }
            >
              {language === "en" ? "VIEW CERTIFICATE ➜" : "VER CERTIFICADO ➜"}
            </a>
          </div>
          <div className="cert_box">
            <img src={reactdev} alt="" />
            <a
              className="cert_link"
              href={
                language === "en"
                  ? "https://www.coderhouse.com/ar/certificados/64d13d05b89975b6b87430d8?lang=en"
                  : "https://www.coderhouse.com/ar/certificados/64d13d05b89975b6b87430d8?lang=es"
              }
            >
              {language === "en" ? "VIEW CERTIFICATE ➜" : "VER CERTIFICADO ➜"}
            </a>
          </div>
          <div className="cert_box">
            <img src={backend} alt="" />
            <a
              className="cert_link"
              href={
                language === "en"
                  ? "https://www.coderhouse.com/ar/certificados/65c2b75374006318990a7ac8?lang=en"
                  : "https://www.coderhouse.com/ar/certificados/65c2b75374006318990a7ac8?lang=es"
              }
            >
              {language === "en" ? "VIEW CERTIFICATE ➜" : "VER CERTIFICADO ➜"}
            </a>
          </div>
          <div className="cert_box">
            <img src={fullstack} alt="" />
            <a
              className="cert_link"
              href={
                language === "en"
                  ? "https://www.coderhouse.com/ar/certificados/65c2b753740063efc00a7b1a?lang=en"
                  : "https://www.coderhouse.com/ar/certificados/65c2b753740063efc00a7b1a?lang=es"
              }
            >
              {language === "en" ? "VIEW CERTIFICATE ➜" : "VER CERTIFICADO ➜"}
            </a>
          </div>
          <div className="cert_box">
            <img src={python} alt="" />
            <p>CER-OXZO4JZS-815858</p>
            <a
              className="cert_link"
              href="https://sigead.utnba.centrodeelearning.com/alumnos/validar_certificado"
            >
              {language === "en" ? "VIEW CERTIFICATE ➜" : "VER CERTIFICADO ➜"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualIntervalsExample;
