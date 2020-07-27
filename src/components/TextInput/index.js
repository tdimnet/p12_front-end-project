import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const TextInput = ({ type = 'text', label, value, onChange }) => (
    <div className='form-group'>
        {label && <label className='form-label'>{label}</label>}
        <input
            className='form-input'
            type={type}
            value={value}
            onChange={e => onChange && onChange(e.target.value)}
        />
    </div>
)

TextInput.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default TextInput
