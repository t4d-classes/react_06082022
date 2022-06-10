import { createContext, useContext } from "react";

import { useCarToolStore } from '../hooks/useCarToolStore';

const carToolStoreContext = createContext();

export const CarToolStoreProvider = ({ children }) => {
  return (
    <carToolStoreContext.Provider value={useCarToolStore()}>
      {children}
    </carToolStoreContext.Provider>
  );

};

export const useCarToolStoreContext = () => {
  return useContext(carToolStoreContext);
};
