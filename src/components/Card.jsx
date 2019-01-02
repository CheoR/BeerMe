import React from 'react';

const Card = ({ obj }) => {
  const id = obj.id;
  const name = obj.name || obj.username;
  console.log('card object is: ');
  console.table(obj);
  return (
    <div className="main-card--temp">
      <img src="https://via.placeholder.com/150" alt={ name } />
      <h2>{ id } - { name }</h2>
      <span>{ name }</span>
    </div>
  );
}

export default Card;