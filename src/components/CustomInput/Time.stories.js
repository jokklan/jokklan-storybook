import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs/react'

import TimeFormControl from './TimeFormControl'

export const timeInput = {
  displayFormat: 'LT',
  valueFormat: 'HH:mm'
}

export const actions = {
  onChange: action('onChange'),
  onBlur: action('onBlur'),
  onFocus: action('onFocus')
}

storiesOf('CustomInput/Time', module)
  .addDecorator(withKnobs)
  .add('default', () => <TimeFormControl {...actions} {...object('props', {})} />)
  .add('allow native', () => <TimeFormControl {...actions} {...object('props', { allowNative: true })} />)
  .add('with custom format', () => <TimeFormControl {...actions} {...object('props', { displayFormat: 'HH:mm:ss' })} />)
