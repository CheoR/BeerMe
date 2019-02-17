import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
    <footer className="footer">
       <a href="#" target='_blank'><FontAwesomeIcon icon={['fab', 'facebook-square']} size="lg" /></a>
       <a href="#" target='_blank'><FontAwesomeIcon icon={['fab', 'github-square']} size="lg" /></a>
       <a href="#" target='_blank'><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" /></a>
       <a href="http://codepen.io/CheoR/" target='_blank'><FontAwesomeIcon icon={['fab', 'codepen']} size="lg" /></a>
       <a href="http://codepen.io/CheoR/" target='_blank'><FontAwesomeIcon icon={['fab', 'free-code-camp']} size="lg" /></a>

        <p>&copy; TacosBuenos 2018</p>
    </footer>
);

export default Footer;