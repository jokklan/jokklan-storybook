import React from 'react'
import FormControlGroup from 'react-bootstrap/FormGroup'
import FormControl from 'react-bootstrap/FormControl'
import FormLabel from 'react-bootstrap/FormLabel'
import Col from 'react-bootstrap/Col'

import FormFeedback from './FormFeedback'
import InputGroup from './InputGroup'

const FormGroup = ({
  name,
  label,
  placeholder,
  labelAsPlaceholder,
  col,
  children,
  className,
  feedback,
  isValid,
  isInvalid,
  ...props
}) => {
  const validationProps = {
    name,
    isValid,
    isInvalid
  }

  return (
    <InputGroup
      labelProps={{ name }}
      feedbackProps={validationProps}
      containerProps={{
        controlId: name,
        as: col ? Col : 'div',
        className,
        ...col
      }}
      {...validationProps}
      {...props}
    />
  )
}

FormGroup.defaultProps = {
  labelAsPlaceholder: true,
  feedback: true,
  labelComponent: FormLabel,
  inputComponent: FormControl,
  feedbackComponent: FormFeedback,
  containerComponent: FormControlGroup
}

export default FormGroup
