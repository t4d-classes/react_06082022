import { createContext, useContext } from "react";

import { useCarToolStore } from '../hooks/useCarToolStore';

const cars = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'red', price: 48000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2020, color: 'blue', price: 120000 },
];

const carToolStoreContext = createContext();

export const CarToolStoreProvider = ({ children }) => {
  return (
    <carToolStoreContext.Provider value={useCarToolStore(cars)}>
      {children}
    </carToolStoreContext.Provider>
  );

};

export const useCarToolStoreContext = () => {
  return useContext(carToolStoreContext);
};
