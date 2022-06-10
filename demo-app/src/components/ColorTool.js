import PropTypes from 'prop-types';

import { useColorToolStore } from '../hooks/useColorToolStore';

import { ToolHeader } from './ToolHeader';
import { ItemActionList } from './ItemActionList';
import { ColorForm } from './ColorForm';

export const ColorTool = ({ colors: initialColors, headerText }) => {

  const { colors, addColor, deleteColor } = useColorToolStore(initialColors);
 
  return (
    <>
      <ToolHeader headerText={headerText} />
      <ItemActionList items={colors} contentFn={color => color.name}
        actionButtonText="X" onAction={deleteColor} />
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