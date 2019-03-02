import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs/react'

import TimeInput from './TimeInput'

export const timeInput = {
  displayFormat: 'LT',
  valueFormat: 'HH:mm'
}

export const actions = {
  onChange: action('onChange'),
  onBlur: action('onBlur'),
  onFocus: action('onFocus')
}

storiesOf('CustomInput/TimeInput', module)
  .addDecorator(withKnobs)
  .add('default', () => <TimeInput {...actions} {...object('props', {})}  />)
  .add('allow native', () => <TimeInput {...actions} {...object('props', { allowNative: true })}  />)
  .add('with custom format', () => <TimeInput {...actions} {...object('props', { displayFormat: 'HH:mm:ss' })}  />)
