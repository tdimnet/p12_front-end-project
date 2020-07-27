import React from 'react'

import TextInput from '../TextInput'
import Fieldset from '../Fieldset'
import Button from '../Button'
import Select from '../Select'

import { DEPARTMENTS, STATES } from './data'

export default class Form extends React.PureComponent {
    render() {
        return (
            <form>
                <TextInput
                    label='First Name'
                />
                <TextInput
                    label='Last Name'
                />
                <TextInput
                    label='Date of Birth'
                    type='date'
                />
                <TextInput
                    label='Start Date'
                    type='date'
                />
                <Fieldset legend='Address'>
                    <TextInput
                        label='Street'
                    />
                    <TextInput
                        label='City'
                    />
                    <Select
                        label='State'
                        htmlFor='stateButton'
                        htmlName='state'
                        options={STATES}
                    />
                    <TextInput
                        label='Zip Code'
                        type='number'
                    />
                </Fieldset>
                <Select
                    label='Departement'
                    htmlFor='departementButton'
                    htmlName='departement'
                    options={DEPARTMENTS}
                />
                <Button label='Save' />
            </form>
        )
    }
}
