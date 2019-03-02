import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import DateInput from './DateInput'

export const actions = {
  onChange: action('onChange'),
  onBlur: action('onBlur'),
}

storiesOf('DateInput', module)
  .add('default', () => <DateInput {...actions} />)
  .add('allow native', () => <DateInput allowNative {...actions} />)
  .add('with custom format', () => <DateInput displayFormat="MM/DD YYYY" {...actions} />)
