import { useEffect, useCallback, useState } from 'react';

import { allCars, appendCar, replaceCar, removeCar } from '../services/carsData';


export const useCarToolStore = () => {

  const [ cars, setCars ] = useState([]);

  const refreshCars = useCallback(async () => {
    const cars = await allCars();
    setCars(cars);
  }, []);

  const [ editCarId, setEditCarId ] = useState(-1);

  const editCar = useCallback(carId => {
    setEditCarId(carId);
  }, []);

  const cancelCar = useCallback(carId => {
    setEditCarId(-1);
  }, []);

  const addCar = useCallback(async car => {
    await appendCar(car);
    await refreshCars();
    setEditCarId(-1);
  }, [refreshCars]);

  const saveCar = useCallback(async car => {
    await replaceCar(car);
    await refreshCars();
    setEditCarId(-1);
  }, [refreshCars]);

  const deleteCar = useCallback(async carId => {
    await removeCar(carId);
    await refreshCars();
    setEditCarId(-1);
  }, [refreshCars]);  

  useEffect(() => {
    refreshCars();
  }, [refreshCars]);  

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