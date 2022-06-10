import { createContext, useContext } from "react";

import { useColorToolStore } from '../hooks/useColorToolStore';

const colorList = [
  { id: 1, name: 'red', hexcode: 'ff0000' },
  { id: 2, name: 'green', hexcode: '00ff00' },
  { id: 3, name: 'blue', hexcode: '0000ff' },
];

const colorToolStoreContext = createContext();


export const ColorToolStoreProvider = ({ children }) => {

  return (
    <colorToolStoreContext.Provider value={useColorToolStore(colorList)}>
      {children}
    </colorToolStoreContext.Provider>
  );

};


export const useColorToolStoreContext = () => {
  return useContext(colorToolStoreContext);
};
