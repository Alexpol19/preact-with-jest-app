// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'

import {h} from 'preact'
import {render} from '@testing-library/preact'
import App from '.'
import Header from './Header'


test('renders the App component', () => {
  const testMessage = 'Hello, World!'

  const {getByText} = render(
    <App />,
  )

  expect(getByText(testMessage)).toBeInTheDocument()
})

test('renders the Header component with title prop', () => {
  const testMessage = 'Head'

  const {getByText} = render(
    <Header title={testMessage} />,
  )

  expect(getByText(testMessage)).toBeInTheDocument()
})
