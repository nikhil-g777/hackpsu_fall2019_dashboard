import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({name, label, onChange, defaultOption, placeholder, value, error, options}) => {
    let wrapperClass = 'form-group';
    if(error && error.length > 0) {
        wrapperClass += " " + "has-error";
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="form-control" >
                    {options.map((option)=>{
                        return <option key={option.value} value={option.value}>{option.text}</option>;
                    })
                    }
                </select>
                {error && <div className="alert alert-danger">{error}</div>}  
            </div>
        </div>
    );
};

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultOption: PropTypes.string,
    placeholder: PropTypes.number,
    value: PropTypes.number,
    error: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
