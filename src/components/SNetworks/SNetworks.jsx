import "./SNetworks.css";
import React from "react";

import github from "../../assets/socialNetworks/github.svg";
import linkedin from "../../assets/socialNetworks/linkedin.svg";
import email from "../../assets/socialNetworks/email.svg";
import whatsapp from "../../assets/socialNetworks/whatsapp.svg";

const SNetworks = () => {
  return (
    <div className="sn_bar">
      <ul>
        <a href="https://github.com/PabloGaleano88">
          <img className="svg_icon" src={github} alt="GitHub Link" />
        </a>
        <a href="https://www.linkedin.com/in/pablolgaleano/">
          <img className="svg_icon" src={linkedin} alt="Linkedin Link" />
        </a>
        <a href="mailto: pablogaleano88@hotmail.com">
          <img className="svg_icon" src={email} alt="Email Link" />
        </a>
        <a href="https://wa.me/5491168524373">
          <img className="svg_icon" src={whatsapp} alt="Whatsapp Link" />
        </a>
        <li className="spacer"></li>
      </ul>
    </div>
  );
};

export default SNetworks;
