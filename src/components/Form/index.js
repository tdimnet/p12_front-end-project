import React from 'react'

import TextInput from '../TextInput'

export default class Form extends React.PureComponent {
    render() {
        return (
            <form>
                <TextInput
                    label='First Name'
                />
            </form>
        )
    }
}
