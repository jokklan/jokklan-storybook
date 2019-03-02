import React, { Component } from 'react'

const extractFromEvent = ({ target: { name, value } }) => ({ name, value })

const withFormattedValue = ({
  formatValue,
  updateOnChange = true,
  extractFromInput = extractFromEvent
}) => WrappedComponent => {
  class WithFormattedValue extends Component {
    handleUpdate = (...args) => {
      const { valueFormat, displayFormat } = this.props
      const { value, name } = extractFromInput(...args)

      const formattedValue = formatValue({ inputFormat: displayFormat, outputFormat: valueFormat, value, display: false })

      return {
        target: { name, value: formattedValue }
      }
    }

    handleChange = (...args) => {
      const { onChange } = this.props

      if (updateOnChange && onChange) {
        const newEvent = this.handleUpdate(...args)

        onChange(newEvent)
      }
    }

    handleBlur = (...args) => {
      const { onBlur, onChange } = this.props

      let newEvent
      if ((!updateOnChange && onChange) || onBlur) {
        newEvent = this.handleUpdate(...args)
      }

      if (!updateOnChange && onChange) {
        onChange(newEvent)
      }

      if (onBlur) {
        onBlur(newEvent)
      }
    }

    render() {
      const {
        onChange: _onChange,
        onBlur: _onBlur,
        value,
        valueFormat,
        displayFormat,
        ...otherProps
      } = this.props

      const formattedValue = formatValue({ inputFormat: valueFormat, outputFormat: displayFormat, value, display: true })

      return (
        <WrappedComponent
          {...otherProps}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={formattedValue}
          format={displayFormat}
        />
      )
    }
  }

  WithFormattedValue.displayName = `withFormattedValue(${WrappedComponent.displayName ||
    WrappedComponent.name}`

  return WithFormattedValue
}

export default withFormattedValue
