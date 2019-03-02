import React from 'react'
import { connect } from 'formik'

import FormGroup from './FormGroup'
import FieldFeedback from './FieldFeedback'
import FieldInput from './FieldInput'

const FieldGroup = ({
  name,
  inputComponent,
  formik: _formik,
  ...props
}) => {

  return (
    <FormGroup
      name={name}
      feedbackComponent={FieldFeedback}
      {...props}
    />
  )
}

FieldGroup.defaultProps = {
  labelAsPlaceholder: true,
  inputComponent: FieldInput,
  feedbackComponent: FieldFeedback
}

export default connect(FieldGroup)
