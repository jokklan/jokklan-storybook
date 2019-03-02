import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import CurrencyInput from './CurrencyInput'

export const actions = {
  onChange: action('onChange'),
  onBlur: action('onBlur'),
}

storiesOf('CurrencyInput', module)
  .add('default', () => <CurrencyInput {...actions} />)
  .add('allow native', () => <CurrencyInput allowNative {...actions} />)
  .add('with custom format', () => <CurrencyInput displayFormat="0.0000" {...actions} />)
