import React from 'react'
import { Field } from 'formik'
import FormControl from 'react-bootstrap/FormControl'

const FieldInput = ({ name, component: Component, ...props }) => (
  <Field name={name}>
    {({ field, form }) => {
      const isTouched = form.touched[name]
      const hasError = !!form.errors[name]

      return (
        <Component
          {...props}
          isValid={isTouched && !hasError}
          isInvalid={isTouched && hasError}
          {...field}
        />
      )
    }}
  </Field>
)

FieldInput.defaultProps = {
  component: FormControl
}

export default FieldInput
