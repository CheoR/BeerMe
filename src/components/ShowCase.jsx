import React from 'react';

const ShowCase = () => (
    <section className="top-container">
      <header className="showCase">
        <h1>Beer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsam! Nihil quo minima nulla atque!</p>
        <a href="#" className="btn">Read More</a>
      </header>
      <div className="top-box top-box-a">
        <h4>Membership</h4>
        <p className="price">$199/mo</p>
        <a href="#" className="btn">Buy Now</a>
      </div>
      <div className="top-box top-box-b">
        <h4>Pro Membership</h4>
        <p className="price">$299/mo</p>
        <a href="#" className="btn">Buy Now</a>
      </div>
    </section>
);

export default ShowCase;