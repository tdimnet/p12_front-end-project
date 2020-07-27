import React from 'react'

import TextInput from '../TextInput'
import Fieldset from '../Fieldset'
import Button from '../Button'

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
                />
                <TextInput
                    label='Start Date'
                />
                <Fieldset legend='Address'>
                    <TextInput
                        label='Street'
                    />
                    <TextInput
                        label='City'
                    />
                    <TextInput
                        label='Zip Code'
                        type='number'
                    />
                </Fieldset>
                <TextInput
                    label='Department'
                />
                <Button label='Save' />
            </form>
        )
    }
}
