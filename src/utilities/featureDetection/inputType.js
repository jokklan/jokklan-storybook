const invalidValues = {
  date: 'not-a-date',
  number: 'not-a-number'
}

const inputType = (type, invalidValue) => {
  const input = document.createElement('input')
  input.setAttribute('type', type)

  if (input.type !== type) {
    return false
  }

  const finalInvalidValue = invalidValue || invalidValues[type]
  if (finalInvalidValue) {
    input.setAttribute('value', finalInvalidValue)

    return input.value !== finalInvalidValue
  }

  return true
}

export default inputType
