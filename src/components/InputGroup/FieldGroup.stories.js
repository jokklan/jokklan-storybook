import React from 'react'
import { Formik } from 'formik'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs/react'

import FieldGroup from './FieldGroup'
import ValidationDecorator from '../../auxiliaryComponents/ValidationDecorator'

const fieldGroup = {
  label: 'Name'
}

export const actions = {
  onChange: action('onChange'),
  onBlur: action('onBlur'),
  onFocus: action('onFocus')
}

storiesOf('InputGroup/FieldGroup', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Formik
      initialValues={{ name: 'John Doe' }}
    >
      <FieldGroup name="name" {...actions} {...object('props', { ...fieldGroup })} />
    </Formik>
  ))
  .add('with validations', () =>
    <ValidationDecorator initialValue="John">
      <FieldGroup name="name" {...actions} {...object('props', { ...fieldGroup })} />
    </ValidationDecorator>
  )
