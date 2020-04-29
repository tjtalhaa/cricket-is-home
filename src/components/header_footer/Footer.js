import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">Rawalpindi Cricket Stadium</div>
                <div className="footer_copyright">
                Stadium Rd, Shamsabad, Rawalpindi, Punjab, Pakistan               </div>
            </Fade>
        </footer>
    );
};

export default Footer;