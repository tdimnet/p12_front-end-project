import React from 'react'
import './style.css'

const Select = ({ label, htmlFor, htmlName, options }) => (
    <div className='form-group'>
        {label && <label className='form-label' htmlFor={htmlFor}>{label}</label>}
        <select className='form-select' name={htmlName} id={htmlFor}>
            <option value="">--Please choose an option--</option>
            {
                options.map(option => (
                    <option value={option.abbreviation}>{option.name}</option>
                ))
            }
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
        </select>
    </div>
)

export default Select