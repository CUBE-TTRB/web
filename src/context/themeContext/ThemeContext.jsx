import React, { createContext, useState} from "react";

// On défini ici le type ce qui sera stocké dans notre contexte.
let ContextType = {
  // Une fonction pour switch entre light et dark
  toggleDark: () => void{} ,
  // La valeur effective du thème
  isDark : false
};

// Cette variable contient le contexte par défaut qui sera
// (sauf en cas de bug) toujours écrasé.
const defaultContext= {
  toggleDark: () => {
    console.warn("Should have been overriden");
  },
  isDark: true,
};

// On crée le contexte à partir du contexte par défaut.
const ThemeContext = createContext(defaultContext);

// On défini et exporte un component pour
// wrap le provider de React afin de définir
// un contexte basé sur un useState
export const ThemeContextProvider = ({ children }) => {
  // Le thème est sombre par défaut.
  const [isDark, setIsDark] = useState(true);

  // On défini un "meilleur" contexte que le defaultContext.
  const context = {
    toggleDark: () => {
      setIsDark(!isDark);
    },
    isDark,
  };

  // On génère un provider avec notre contexte
  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};

// Par défaut le context est exporté et pas le provider.
export default ThemeContext;
