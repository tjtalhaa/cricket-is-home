import React from 'react';
import Fade from 'react-reveal/Fade';

const Description = () => {
    return (
        <Fade>
            <div className="center_wrapper">
                <h2>Highlights</h2>
                <div className="highlight_description">
                This is the first ever webpage I made without using bootsrtap so it wint work on small screens more over this website helped mein learning many react libraries. For more of my React or Django projects please click any of button on interface or you can visit at <a className="weblink" href="https://www.talhakhalid.tk" ><strong> Talha khalid </strong></a>
                </div>
            </div>
        </Fade>
    );
};

export default Description;