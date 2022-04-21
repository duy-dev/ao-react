import React from 'react'
import { Outlet } from 'react-router-dom'
import './style.scss'

const AuthLayout: React.FC = () => {
  return (
    <section id="ao-auth-layout">
      <div className="test"><h1>Auth Layout</h1></div>
      <Outlet />
    </section>
  )
}

export default AuthLayout
