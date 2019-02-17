import React from 'react';

const Card = ({ obj }) => {
  const id = obj.id;
  const name = obj.name || obj.username;

  return (
    <div className="card">
      <img src="https://via.placeholder.com/150" alt={ name } />
      <div className="card__content">
        <h2>{ id } - { name }</h2>
        <span>{ name }</span>
      </div>
    </div>
  );
}

export default Card;