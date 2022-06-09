import PropTypes from 'prop-types';
import { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

export const ColorTool = ({ colors: initialColors, headerText }) => {

  const [ colors, setColors ] = useState([...initialColors]);

  const addColor = (color) => {
    setColors([
      ...colors,
      {
        ...color,
        id: Math.max(...colors.map(c => c.id), 0) + 1,
      },
    ]);
  };

  return (
    <>
      <ToolHeader headerText={headerText} />
      <ColorList colors={colors} />
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </>
  );

};

ColorTool.defaultProps = {
  colors: [],
};

ColorTool.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    hexcode: PropTypes.string.isRequired,
  })).isRequired,
};