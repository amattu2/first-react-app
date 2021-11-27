// Imports
import React, { useEffect } from 'react';

const Context = React.createContext(null);

export const useLocalStorage = () => {
  const contextState = React.useContext(Context);

  if (contextState === null) {
    throw new Error('useLocalStorage must be used within a LocalStorageProvider tag');
  }

  return contextState;
};

export const LocalStorageProvider = (props) => {
  const { children } = props;

  const ioFunctions = {
    getItems: () => {
      try {
        return JSON.parse(window.localStorage.getItem("items"));
      } catch(e) { return [] };
    },
    storeItems: (items) => {
      window.localStorage.setItem("items", JSON.stringify(items));
    }
  };

  return <Context.Provider value={ioFunctions}>{children}</Context.Provider>;
};
