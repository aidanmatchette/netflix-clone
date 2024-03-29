import React, { useState, useContext } from 'react'
/* eslint-disable */
import { useNavigate } from 'react-router-dom'
/* eslint-enable*/
import { FirebaseContext } from '../context/firebase'
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'
import { Form } from '../components'
import * as ROUTES from '../constants/routes'

export default function Signin() {
  const navigate = useNavigate()
  const { firebase } = useContext(FirebaseContext)
  const [emailAddress, setEmailAddress] = useState()
  const [password, setPassword] = useState()
  /* eslint-disable */
  const [error, setError] = useState('')
  /* eslint-enable*/
  const isInvalid = password === '' || emailAddress === ''

  const handleSignIn = (event) => {
    event.preventDefault()
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        //push to the browse page
        navigate(ROUTES.BROWSE)
      })
      .catch((error) => {
        setEmailAddress('')
        setPassword('')
        setError(error.message)
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignIn} method='POST'>
            <Form.Input
              placeholder='Email address'
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type='password'
              autoComplete='off'
              placeholder='Password'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type='submit'>
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to='/signup'>Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure that you are
            not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />;
    </>
  )
}
