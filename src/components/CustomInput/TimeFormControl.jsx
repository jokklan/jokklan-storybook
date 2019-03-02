import React from 'react'
import FormControl from 'react-bootstrap/FormControl'

import TimeInput from './TimeInput'

const TimeFormControl = props => (
  <FormControl {...props} as={TimeInput} />
)

export default TimeFormControl
