import React from 'react'
import { storiesOf } from '@storybook/react'

import FormFeedback from './FormFeedback'

storiesOf('InputGroup/FormFeedback', module)
  .add('default', () => (
    <React.Fragment>
      <div className="form-control is-invalid d-none" />
      <FormFeedback isInvalid={true}>Invalid feedback</FormFeedback>
    </React.Fragment>
  ))
