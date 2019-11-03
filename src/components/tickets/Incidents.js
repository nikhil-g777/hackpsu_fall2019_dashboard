import React from 'react';
import PropTypes from 'prop-types';

const Incidents = () => {
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                Heavy storm in SaltLake City, Utah - reported by Alex at 11/03/2019 11:00 AM
            </div>
            <div className="alert alert-primary" role="alert">
                Fire receeding in Austin, Texas - source: twitter at 11/01/2019 05:00 PM            
            </div>
        </div>
    );
};

Incidents.propTypes = {
};

export default Incidents;
