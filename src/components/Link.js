import React from 'react';

const highlightRepositoryName = (name) => {
  const partsOfName = name.split('/');
  return (
    <span>
      <span className={'repository-owner'}>{ partsOfName[0] }</span>/
      <span>{ partsOfName[1] }</span>
    </span>
  )
};

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

export default Link;
