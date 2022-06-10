import { useState } from 'react';

import { useList } from '../hooks/useList';

export const useCarToolStore = (initialCars) => {

  const [
    cars, appendCar, replaceCar, removeCar,
  ] = useList([...initialCars]);

  const [ editCarId, setEditCarId ] = useState(-1);

  const editCar = carId => {
    setEditCarId(carId);
  };

  const cancelCar = carId => {
    setEditCarId(-1);
  };

  const addCar = car => {
    appendCar(car);
    setEditCarId(-1);
  };

  const saveCar = car => {
    replaceCar(car);
    setEditCarId(-1);
  };

  const deleteCar = carId => {
    removeCar(carId);
    setEditCarId(-1);
  };


  return {
    cars,
    editCarId,
    editCar,
    cancelCar,
    addCar,
    saveCar,
    deleteCar,
  };

};