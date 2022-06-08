import { useState } from 'react';

export const ColorForm = ({ buttonText }) => {

  const [ colorForm, setColorForm ] = useState({
    name: '', hexcode: '',
  });

  const change = (evt) => {
    setColorForm({
      ...colorForm,
      [evt.target.name]: evt.target.value,
    });
  };

  console.log(colorForm);

  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" value={colorForm.name} onChange={change} />
      </label>
      <label>
        Hexcode:
        <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
      </label>
      <button type="button">{buttonText}</button>
    </form>
  );

};

ColorForm.defaultProps = {
  buttonText: 'Submit Color',
};