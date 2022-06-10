import PropTypes from 'prop-types';
import React from 'react';

/**
 * Display a list of items and an action button for each item
 * @param {*} param0 
 * @returns {Element}
 */
export const ItemActionList = ({
  items,
  keyFn,
  contentFn,
  actionButtonText,
  onAction: action,
}) => {

  return (
    <ul>
      {items.map(item => {
        const itemKey = keyFn(item);
        return (
          <li key={itemKey}>
            {contentFn(item)}
            <button type="button" onClick={() => action(itemKey)}>
              {actionButtonText}
            </button>
          </li>
        );
      })}
    </ul>    
  );
};

ItemActionList.defaultProps = {
  items: [],
  keyFn: item => item.id,
  actionButtonText: 'Go',
};

ItemActionList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  keyFn: PropTypes.func.isRequired,
  contentFn: PropTypes.func.isRequired,
  actionButtonText: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
};
