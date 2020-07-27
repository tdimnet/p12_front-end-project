import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const Fieldset = ({ children, legend }) => (
    <fieldset className='form-fieldset'>
        <legend>{legend}</legend>
        {children}
    </fieldset>
)

Fieldset.propTypes = {
    children: PropTypes.node.isRequired,
    legend: PropTypes.string.isRequired
}

export default Fieldset
