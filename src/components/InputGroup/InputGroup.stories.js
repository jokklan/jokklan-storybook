import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs/react'

import InputGroup from '.'
import DateInput from '../CustomInput/DateInput'

const inputGroup = {
  name: 'name',
  label: 'Name'
}

export const actions = {
  onChange: action('onChange'),
  onBlur: action('onBlur'),
  onFocus: action('onFocus')
}

storiesOf('InputGroup/InputGroup', module)
  .addDecorator(withKnobs)
  .add('default', () => <InputGroup {...actions} {...object('props', { ...inputGroup })} />)
  .add('with feedback', () => <InputGroup {...actions} {...object('props', { feedback: 'Some feedback', isValid: true, ...inputGroup })} />)
  .add('with customInput', () => <InputGroup {...actions} {...object('props', { inputComponent: DateInput, labelAsPlaceholder: false, ...inputGroup })} />)
