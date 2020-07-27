import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const Select = ({ label, htmlFor, htmlName, options }) => (
    <div className='form-group'>
        {label && <label className='form-label' htmlFor={htmlFor}>{label}</label>}
        <select className='form-select' name={htmlName} id={htmlFor}>
            <option value="">--Please choose an option--</option>
            {
                options.map(option => (
                    <option key={option.name} value={option.abbreviation}>{option.name}</option>
                ))
            }
        </select>
    </div>
)

Select.propTypes = {
    label: PropTypes.string,
    htmlFor: PropTypes.string.isRequired,
    htmlName: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Select