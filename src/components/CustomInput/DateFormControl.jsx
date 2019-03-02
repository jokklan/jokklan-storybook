import React from 'react'
import FormControl from 'react-bootstrap/FormControl'

import DateInput from './DateInput'

const DateFormControl = props => (
  <FormControl {...props} as={DateInput} />
)

export default DateFormControl
