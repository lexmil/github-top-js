import React from 'react';
import ToggleStar from 'material-ui/svg-icons/toggle/star';

const shortNumber = (number) => number > 999 ? (number / 1000).toFixed(1) + 'k' : number;

const Star = (props) => (
  <div className="component-star">
    <ToggleStar/>
    {shortNumber(props.count)}
  </div>
);

export default Star;
