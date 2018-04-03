import React from 'react';
import PropTypes from 'prop-types';
import ToggleStar from 'material-ui/svg-icons/toggle/star';

const shortNumber = (number) => number > 999 ? (number / 1000).toFixed(1) + 'k' : number;

const Star = (props) => (
  <div className="component-star">
    <ToggleStar/>
    {shortNumber(props.count)}
  </div>
);

Star.propTypes = {
  count: PropTypes.number.isRequired
};

export default Star;
