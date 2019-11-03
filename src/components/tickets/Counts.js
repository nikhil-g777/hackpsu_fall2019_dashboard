import React from 'react';
import PropTypes from 'prop-types';
import "react-table/react-table.css";

import moment from 'moment';
import 'moment-timezone';

const Counts = ({counts}) => {

        return (
            <div>
                <button type="button" className="btn btn-success" style={{marginRight: '10px'}}>
                    Safe : <span className="badge badge-light">{counts.safe}</span>
                </button>
                <button type="button" className="btn btn-warning" style={{marginRight: '10px'}}>
                    Help : <span className="badge badge-light">{counts.help}</span>
                </button>
                <button type="button" className="btn btn-danger" style={{marginRight: '10px'}}>
                    Emergency : <span className="badge badge-light">{counts.emergency}</span>
                </button>   
        </div>
        );
};

Counts.propTypes = {
    counts: PropTypes.object
};

export default Counts;
