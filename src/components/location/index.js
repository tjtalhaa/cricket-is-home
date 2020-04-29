import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.2204916977785!2d73.07370741445816!3d33.6514482807168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df953a82a0dd71%3A0xf10e6646b6fcc700!2sRawalpindi%20Cricket%20Stadium!5e0!3m2!1sen!2s!4v1575213907114!5m2!1sen!2s"
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen>

                    </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;