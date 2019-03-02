import React from 'react'
import MaskedInput from 'react-text-mask'
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'
import moment from 'moment'

import EnhancedInput from './EnhancedInput'

const buildMask = format => Array.from(format.toLowerCase()).map(char =>
  ['h', 'm', 's'].includes(char) ? /\d/ : char
)
const buildPipe = format => (console.log({ format }), createAutoCorrectedDatePipe(format.toUpperCase()))
const buildPlaceholder = ({ format, translations: { hourAbbr, minAbbr, secAbbr } }) => format.toLowerCase()
  .replace(/h/g, hourAbbr)
  .replace(/m/g, minAbbr)
  .replace(/s/g, secAbbr)

const MaskedTimeInput = ({ placeholder, translations, format, ...props }) => (
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

  const time = moment(value, inputFormat)

  if (!time.isValid()) {
    return ''
  }

  return time.format(outputFormat)
}

const TimeInput = ({ translations, enhancedProps, ...props }) => (
  <EnhancedInput
    formatValue={formatValue}
    component={MaskedTimeInput}
    enhancedProps={{ translations, ...enhancedProps }}
    updateOnChange={false}
    type="time"
    {...props}
  />
)

TimeInput.defaultProps = {
  allowNative: false,
  displayFormat: 'HH:mm',
  valueFormat: 'HH:mm',
  translations: {
    hourAbbr: 'h',
    minAbbr: 'm',
    secAbbr: 's'
  }
}

export default TimeInput
