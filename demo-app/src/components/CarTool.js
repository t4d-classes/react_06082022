import { useState } from 'react';

import { useList } from '../hooks/useList';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = ({ cars: initialCars }) => {

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

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={editCar} onDeleteCar={deleteCar}
        onSaveCar={saveCar} onCancelCar={cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );

};

CarTool.defaultProps = {
  cars: [],
};