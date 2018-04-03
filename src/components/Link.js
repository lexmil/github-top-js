import React from 'react';
import PropTypes from 'prop-types';

const Link = (props) => (
  <div className="repository">
      <img className="avatar" alt={props.repoName} src={props.avatar} />
    <div className="repository-name">
      <a href={ props.ownerUrl }><strong>{ props.ownerName }</strong></a>
      &nbsp;/&nbsp;
      <a href={ props.repoUrl }><strong>{ props.repoName }</strong></a>
    </div>
  </div>
);

Link.propTypes = {
  avatar: PropTypes.string,
  ownerUrl: PropTypes.string.isRequired,
  ownerName: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
  repoName: PropTypes.string.isRequired
};

export default Link;
