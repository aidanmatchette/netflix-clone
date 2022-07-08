import React from 'react'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as ROUTES from '../constants/routes'

export const RequiredAuth = ({ children, user }) => {
  console.log(user)
  if (user) {
    console.log(children)
    return children
  }
  if (!user) {
    console.log(children)
    return <Navigate to={ROUTES.SIGN_IN} />
  }
  return null
}
RequiredAuth.propTypes = {
  user: PropTypes.object,
  children: PropTypes.object.isRequired,
}
