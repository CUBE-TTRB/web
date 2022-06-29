import { createContext, useContext, useEffect, useState } from 'react';
import AppService from '../service/app.service';
export const AppContext = createContext();

export function AppWrapper({ children }) {

  const [isauth, setIsauth] = useState(AppService.TOKEN);

  useEffect(() => {
    if(AppService.TOKEN){
      setIsauth(true)
    }else {setIsauth(false)}
  }, [AppService.TOKEN])
  

  const contextValues = {
    state: {
      auth: isauth
    }
  }

  return (
    <AppContext.Provider value={contextValues}>
      {children}
    </AppContext.Provider>
  );
}
