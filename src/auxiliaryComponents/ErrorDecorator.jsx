import React, { Component } from 'react'
import { Formik } from 'formik'

class ErrorDecorator extends Component {
  constructor(props) {
    super(props)

    this.formikRef = React.createRef()
  }

  componentDidMount() {
    const { initialError, initialTouched } = this.props
    const formik = this.formikRef.current.getFormikBag()

    formik.setFieldError('name', initialError)
    formik.setFieldTouched('name', initialTouched, false)
  }

  render() {
    const { children, initialError: _initialError, initialTouched: _initialTouched, ...props } = this.props

    return (
      <Formik
        ref={this.formikRef}
        {...props}
      >
        {children}
      </Formik>
    )
  }
}

export default ErrorDecorator
