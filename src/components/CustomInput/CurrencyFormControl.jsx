import React from 'react'
import FormControl from 'react-bootstrap/FormControl'

import CurrencyInput from './CurrencyInput'

const CurrencyFormControl = props => (
  <FormControl {...props} as={CurrencyInput} />
)

export default CurrencyFormControl
