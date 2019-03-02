import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs/react'

import DateInput from './DateInput'

export const actions = {
  onChange: action('onChange'),
  onBlur: action('onBlur'),
  onFocus: action('onFocus')
}

storiesOf('CustomInput/DateInput', module)
  .addDecorator(withKnobs)
  .add('default', () => <DateInput {...actions} {...object('props', {})}/>)
  .add('allow native', () => <DateInput {...actions} {...object('props', { allowNative: true })} />)
  .add('with custom format', () => <DateInput {...actions} {...object('props', { displayFormat: 'MM/DD YYYY' })}/>)
