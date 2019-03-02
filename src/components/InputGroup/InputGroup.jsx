import React from 'react'

const InputGroup = ({
  name,
  label,
  placeholder,
  labelAsPlaceholder,
  children,
  className,
  feedback,
  labelComponent: LabelComponent,
  labelProps,
  inputComponent: InputComponent,
  feedbackComponent: FeedbackComponent,
  feedbackProps,
  containerComponent: ContainerComponent,
  containerProps,
  ...inputProps
}) => {
  const labelContent = label && <LabelComponent {...labelProps}>{label}</LabelComponent>

  let finalPlaceholder = placeholder
  if (labelAsPlaceholder && finalPlaceholder === undefined) {
    finalPlaceholder = label
  }
  const inputContent = (
    <InputComponent
      name={name}
      placeholder={finalPlaceholder}
      {...inputProps}
    />
  )

  const feedbackContent = (
    <FeedbackComponent {...feedbackProps}>
      {feedback}
    </FeedbackComponent>
  )

  const childFunction = children && typeof children === 'function'
  let content
  if (childFunction) {
    content = children({ label: labelContent, input: inputContent, feedback: feedbackContent })
  } else {
    content = (
      <React.Fragment>
        {labelContent}
        {inputContent}
        {feedbackContent}
      </React.Fragment>
    )
  }

  return (
    <ContainerComponent
      {...containerProps}
    >
      {content}
    </ContainerComponent>
  )
}

InputGroup.defaultProps = {
  labelAsPlaceholder: true,
  labelComponent: 'label',
  inputComponent: 'input',
  feedbackComponent: 'div',
  containerComponent: 'div'
}

export default InputGroup
