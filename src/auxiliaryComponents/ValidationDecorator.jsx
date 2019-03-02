
import React from 'react'
import { Formik } from 'formik'

const validate = values => {
  if (values.name.split(' ').length <= 1) {
    return { name: 'Must include both first and last name.' }
  }

  return {}
}

const ValidationDecorator = ({ initialValue, children, ...props }) => (
  <Formik
    initialValues={{ name: initialValue }}
    validate={validate}
    {...props}
  >
    {children}
  </Formik>
)

ValidationDecorator.defaultProps = {
  initialValue: 'John Doe'
}

export default ValidationDecorator
