import React from 'react';

const Card = ({obj}) => {
  return (
    <div className="card">
      <img className="card-img-top" src={obj.urls.small} alt={obj.alt_description} />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          {obj.description ? obj.description : '- No description - '}
        </p>
      </div>
    </div>
  );
}

export default Card;
