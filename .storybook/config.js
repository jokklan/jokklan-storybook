import { configure, addParameters } from '@storybook/react'
import '../src/styles/index.scss'

const req = require.context('../src', true, /.stories.js$/)

addParameters({
  options: {
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: '|',
    // theme: themes.dark,
  }
})

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
