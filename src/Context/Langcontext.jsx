import { useState, createContext } from "react";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  return (
    <LangContext.Provider value={{ language, setLanguage }}>
      {children}
    </LangContext.Provider>
  );
};
