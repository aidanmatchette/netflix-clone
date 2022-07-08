import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Browse, Signin, Signup } from './pages/index'
import * as ROUTES from './constants/routes'
import { RequiredAuth } from './helpers/routes'
import { useAuthListener } from './hooks'

export default function App() {
  const { user } = useAuthListener()

  return (
    <Router>
      <Routes>
        <Route path={ROUTES.SIGN_IN} element={<Signin />} />
        <Route path={ROUTES.SIGN_UP} element={<Signup />} />
        <Route
          path={ROUTES.BROWSE}
          element={
            <RequiredAuth user={user}>
              <Browse />
            </RequiredAuth>
          }
        />
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </Router>
  )
}
