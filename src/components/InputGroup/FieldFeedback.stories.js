import React from 'react'
import { storiesOf } from '@storybook/react'

import FieldFeedback from './FieldFeedback'
import FieldInput from './FieldInput'
import ErrorDecorator from '../../auxiliaryComponents/ErrorDecorator'
import ValidationDecorator from '../../auxiliaryComponents/ValidationDecorator'

storiesOf('InputGroup/FieldFeedback', module)
  .add('default', () =>
    <ErrorDecorator
      initialError="Is invalid"
      initialTouched={true}
    >
      <React.Fragment>
        <div className="form-control is-invalid d-none" />
        <FieldFeedback name="name" />
      </React.Fragment>
    </ErrorDecorator>
  )
  .add('with input', () =>
    <ValidationDecorator>
      <React.Fragment>
        <FieldInput name="name" />
        <FieldFeedback name="name" />
      </React.Fragment>
    </ValidationDecorator>
  )
