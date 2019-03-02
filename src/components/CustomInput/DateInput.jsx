import React from 'react'
import MaskedInput from 'react-text-mask'
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'
import moment from 'moment'

import EnhancedInput from './EnhancedInput'

const buildMask = format => Array.from(format.toLowerCase()).map(char =>
  ['d', 'm', 'y'].includes(char) ? /\d/ : char
)
const buildPipe = format => createAutoCorrectedDatePipe(format.toLowerCase())
const buildPlaceholder = ({ format, translations: { yearAbbr, monthAbbr, dateAbbr } }) => format.toLowerCase()
  .replace(/y/g, yearAbbr)
  .replace(/m/g, monthAbbr)
  .replace(/d/g, dateAbbr)

const MaskedDateInput = ({ placeholder, translations, format, ...props }) => (
  <MaskedInput
    mask={buildMask(format)}
    pipe={buildPipe(format)}
    placeholder={placeholder || buildPlaceholder({ format, translations })}
    {...props}
  />
)

const formatValue = ({ inputFormat, outputFormat, value }) => {
  if (!value || value.length === 0) {
    return ''
  }

  const date = moment(value, inputFormat)

  if (!date.isValid()) {
    return ''
  }

  return date.format(outputFormat)
}

const DateInput = ({ translations, enhancedProps, ...props }) => (
  <EnhancedInput
    formatValue={formatValue}
    component={MaskedDateInput}
    enhancedProps={{ translations, ...enhancedProps }}
    type="date"
    updateOnChange={false}
    {...props}
  />
)

DateInput.defaultProps = {
  displayFormat: moment.localeData().longDateFormat('L'),
  valueFormat: 'YYYY-MM-DD',
  translations: {
    yearAbbr: 'y',
    monthAbbr: 'm',
    dateAbbr: 'd'
  }
}

export default DateInput
