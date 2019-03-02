import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs/react'

import CurrencyFormControl from './CurrencyFormControl'

export const actions = {
  onChange: action('onChange'),
  onBlur: action('onBlur'),
  onFocus: action('onFocus')
}

storiesOf('CustomInput/Currency', module)
  .addDecorator(withKnobs)
  .add('default', () => <CurrencyFormControl {...actions} {...object('props', {})} />)
  .add('allow native', () => <CurrencyFormControl {...actions} {...object('props', { allowNative: true })} />)
  .add('with custom format', () => <CurrencyFormControl {...actions} {...object('props', { displayFormat: '0.0000' })} />)
