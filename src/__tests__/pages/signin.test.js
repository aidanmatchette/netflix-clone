import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import { Signin } from '../../pages'
import { FirebaseContext } from '../../context/firebase'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  navigate : () => ({}),
}))

const firebase = {
  auth: jest.fn(() => ({
    signInWithEmailAndPassword: jest.fn(() =>
      Promise.resolve('I am signed in!')
    ),
  })),
}

describe('<Signin />', () => {
  it('renders the sign in page with a form submission', async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <Signin />
        </FirebaseContext.Provider>
      </Router>
    )

    await act(async () => {
      await fireEvent.change(getByPlaceholderText('Email address'), {
        target: { value: 'test@gmail.com' },
      })
      await fireEvent.change(getByPlaceholderText('Password'), {
        target: { value: 'test123' },
      })
      fireEvent.click(getByTestId('sign-in'))

      expect(getByPlaceholderText('Email address').value).toBe('test@gmail.com')
      expect(getByPlaceholderText('Password').value).toBe('test123')
      expect(queryByTestId('error')).toBeFalsy()
    })
  })
})
