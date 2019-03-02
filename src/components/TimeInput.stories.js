import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import TimeInput from './TimeInput'

export const timeInput = {
  displayFormat: 'LT',
  valueFormat: 'HH:mm'
}

export const actions = {
  onChange: action('onChange'),
  onBlur: action('onBlur'),
}

storiesOf('TimeInput', module)
  .add('default', () => <TimeInput {...actions} />)
  .add('allow native', () => <TimeInput allowNative {...actions} />)
  .add('with custom format', () => <TimeInput displayFormat="HH:mm:ss" {...actions} />)
