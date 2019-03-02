import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs/react'

import DateFormControl from './DateFormControl'

export const actions = {
  onChange: action('onChange'),
  onBlur: action('onBlur'),
  onFocus: action('onFocus')
}

storiesOf('CustomInput/Date', module)
  .addDecorator(withKnobs)
  .add('default', () => <DateFormControl {...actions} {...object('props', {})} />)
  .add('allow native', () => <DateFormControl {...actions} {...object('props', { allowNative: true })} />)
  .add('with custom format', () => <DateFormControl {...actions} {...object('props', { displayFormat: 'MM/DD YYYY' })} />)
