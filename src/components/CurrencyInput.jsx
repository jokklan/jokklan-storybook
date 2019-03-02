import React from 'react'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import numeral from 'numeral'

import EnhancedInput from './EnhancedInput'

const localeData = numeral.localeData()

const buildMask = format => {
  let decimalLimit = 2
  const decimalFormat = format.split('.')[1]
  if (decimalFormat) {
    decimalLimit = decimalFormat.length
  }

  const includeThousandsSeparator = format.includes(',')

  return createNumberMask({
    allowDecimal: true,
    prefix: '',
    suffix: '',
    includeThousandsSeparator,
    thousandsSeparatorSymbol: localeData.delimiters.thousands,
    decimalSymbol: localeData.delimiters.decimal,
    decimalLimit
  })
}

const MaskedCurrencyInput = ({ format, ...props }) => (
  <MaskedInput mask={buildMask(format)} {...props} />
)

const formatValue = ({ inputFormat, outputFormat, value, display }) => {
  if (display) {
    return numeral(parseFloat(value)).format(outputFormat)
  }

  return `${numeral(value).value()}`
}

const CurrencyInput = ({ nativeProps, min, max, step, ...props }) => (
  <EnhancedInput
    formatValue={formatValue}
    component={MaskedCurrencyInput}
    type="number"
    updateOnChange={false}
    nativeProps={{
      min,
      max,
      step,
      ...nativeProps
    }}
    {...props}
  />
)

CurrencyInput.defaultProps = {
  displayFormat: '0,0.00',
  valueFormat: '0.00',
  min: 0,
  step: 0.01
}

export default CurrencyInput
