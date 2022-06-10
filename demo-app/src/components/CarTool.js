import { useCarToolStoreContext } from '../contexts/carToolStoreContext';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = () => {

  const {
    cars, editCarId,
    editCar, cancelCar,
    addCar, saveCar, deleteCar
  } = useCarToolStoreContext();

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