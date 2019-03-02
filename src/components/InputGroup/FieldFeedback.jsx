import React from 'react'
import { ErrorMessage } from 'formik'

import FormFeedback from './FormFeedback'

const FieldFeedback = ({ name, component: Component, ...props }) => (
  <ErrorMessage name={name}>
    {error => (
      <Component {...props} isInvalid={true} isValid={false}>{error}</Component>
    )}
  </ErrorMessage>
)

FieldFeedback.defaultProps = {
  component: FormFeedback
}

export default FieldFeedback
