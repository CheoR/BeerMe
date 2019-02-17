import React from 'react';
import drunk from '../../../img/drunk.jpeg';

const Info = () => (
    <section className="info">
      <img src={drunk} alt="drunk" />
      <div className="info__container">
        <h2>Stop Drinking Alone</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae alias reiciendis deleniti possimus nemo non repellendus?
          Quae atque vero modi quidem! Autem cupiditate fugit doloribus ad amet, asperiores provident commodi.</p>
        <a href="#" className="btn">Learn More</a>
      </div>
    </section>
);

export default Info;