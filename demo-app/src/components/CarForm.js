import { useState } from 'react';

export const CarForm = ({ buttonText, onSubmitCar }) => {

  const [ carForm, setCarForm ] = useState({
    make: '', model: '', year: 1900, color: '', price: 0,
  });

  const change = (evt) => {
    setCarForm({
      ...carForm,
      [evt.target.name]: evt.target.type === 'number'
        ? evt.target.valueAsNumber : evt.target.value,
    });
  };

  const submitCar = () => {

    onSubmitCar({ ...carForm });

    setCarForm({
      make: '', model: '', year: 1900, color: '', price: 0,
    });

  };

  return (
    <form>
      <label>
        Make:
        <input type="text" name="make" value={carForm.make} onChange={change} />
      </label>
      <label>
        Model:
        <input type="text" name="model" value={carForm.model} onChange={change} />
      </label>
      <label>
        Year:
        <input type="number" name="year" value={carForm.year} onChange={change} />
      </label>
      <label>
        Color:
        <input type="text" name="color" value={carForm.color} onChange={change} />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={carForm.price} onChange={change} />
      </label>
      <button type="button" onClick={submitCar}>{buttonText}</button>
    </form>
  );

};

CarForm.defaultProps = {
  buttonText: 'Submit Car',
};