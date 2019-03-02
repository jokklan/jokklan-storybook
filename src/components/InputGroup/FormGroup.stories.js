import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs/react'

import FormGroup from './FormGroup'
import CustomInput from '../CustomInput'

const formGroup = {
  name: 'name',
  label: 'Name'
}

export const actions = {
  onChange: action('onChange'),
  onBlur: action('onBlur'),
  onFocus: action('onFocus')
}

storiesOf('InputGroup/FormGroup', module)
  .addDecorator(withKnobs)
  .add('default', () => <FormGroup {...actions} {...object('props', { ...formGroup })}/>)
  .add('with feedback', () => <FormGroup {...actions} {...object('props', { feedback: 'Some feedback', isValid: true, ...formGroup })} />)
  .add('with customInput', () => <FormGroup {...actions} {...object('props', { inputComponent: CustomInput.Date, ...formGroup })} />)
