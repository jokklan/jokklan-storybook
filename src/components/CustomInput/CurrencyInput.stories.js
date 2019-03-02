import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs/react'

import CurrencyInput from './CurrencyInput'

export const actions = {
  onChange: action('onChange'),
  onBlur: action('onBlur'),
  onFocus: action('onFocus')
}

storiesOf('CustomInput/CurrencyInput', module)
  .addDecorator(withKnobs)
  .add('default', () => <CurrencyInput {...actions} {...object('props', {})} />)
  .add('allow native', () => <CurrencyInput {...actions} {...object('props', { allowNative: true })} />)
  .add('with custom format', () => <CurrencyInput {...actions} {...object('props', { displayFormat: '0.0000' })} />)
