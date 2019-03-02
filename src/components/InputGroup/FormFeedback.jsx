import React from 'react'
import Feedback from 'react-bootstrap/Feedback'

const FormFeedback = ({ isValid, isInvalid, children }) => (
  <Feedback type={isValid ? 'valid' : (isInvalid && 'invalid')}>
    {children}
  </Feedback>
)

export default FormFeedback
