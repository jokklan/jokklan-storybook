import React from 'react'
import { Formik } from 'formik'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import FieldInput from './FieldInput'

storiesOf('InputGroup/FieldInput', module)
  .addDecorator(story => <Formik initialValues={{ name: 'John Doe' }}>{story()}</Formik>)
  .add('default', () => <FieldInput name="name" />)
