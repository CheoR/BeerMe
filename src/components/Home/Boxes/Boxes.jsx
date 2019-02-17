import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Boxes = () => (
    <section className="boxes">
      <div className="box">
        <FontAwesomeIcon icon="chart-pie" size="4x" />
        <h3>Analytics</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
      </div>
      <div className="box">
        <FontAwesomeIcon icon="globe" size="4x" />
        <h3>Marketing</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
      </div>
      <div className="box">
        <FontAwesomeIcon icon="cog" size="4x" />
        <h3>Development</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
      </div>
      <div className="box">
        <FontAwesomeIcon icon="users" size="4x" />
        <h3>Support</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
      </div>
    </section>
);

export default Boxes;