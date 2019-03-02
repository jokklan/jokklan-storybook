import React from 'react'
import PropTypes from 'prop-types'

import withFormattedValue from './withFormattedValue'
import featureDetection from '../utilities/featureDetection'

const EnhancedInput = ({ allowNative, type, nativeProps, enhancedProps, updateOnChange, component, formatValue, valueFormat, displayFormat, ...props }) => {
  if (allowNative && featureDetection.inputType(type)) {
    return <input type={type} {...props} {...nativeProps} />
  }

  const FormattedInput = withFormattedValue({
    updateOnChange,
    formatValue
  })(component)

  return <FormattedInput {...props} {...enhancedProps} valueFormat={valueFormat} displayFormat={displayFormat} />
}

EnhancedInput.propTypes = {
  allowNative: PropTypes.bool,
  nativeProps: PropTypes.object,
  enhancedProps: PropTypes.object,
  type: PropTypes.string.isRequired,
  updateOnChange: PropTypes.bool,
  formatValue: PropTypes.func
}

EnhancedInput.defaultProps = {
  allowNative: false,
  updateOnChange: true,
  nativeProps: {},
  enhancedProps: {},
  formatValue: ({ value }) => value
}

export default EnhancedInput
