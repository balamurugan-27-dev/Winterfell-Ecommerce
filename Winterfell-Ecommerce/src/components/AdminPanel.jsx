
import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import '../css/AdminPanel.css'

export default function AdminPanel() {

  const [active, setActive] = useState('Dashboard')
  const navigate = useNavigate()

  const menuItems = [
    { name: 'Dashboard', icon: 'bi-grid' },
    { name: 'Add Product', icon: 'bi-plus-square' },
    { name: 'Remove Product', icon: 'bi-trash' },
    { name: 'Orders', icon: 'bi-bag' },
    { name: 'Users', icon: 'bi-people' }
  ]

  const handleNavigation = (name) => {
    setActive(name)

    const routes = {
      'Dashboard': '/admin',
      'Add Product': '/addproduct',
      'Remove Product': '/removeproduct',
      'Orders': '/admin/orders',
      'Users': '/admin/users'
    }

    navigate(routes[name])
  }

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/login', { replace: true })
  }

  return (
    <div className="admin-layout">

      <aside className="admin-sidebar">

        <div className="admin-brand">
          <h2>WINTERFELL</h2>
          <span>ADMIN PANEL</span>
        </div>

        <div className="admin-menu">
          <p className="menu-heading">MAIN MENU</p>

          {menuItems.map(item => (
            <button
              key={item.name}
              className={`admin-menu-item ${
                active === item.name ? 'active' : ''
              }`}
              onClick={() => handleNavigation(item.name)}
            >
              <i className={`bi ${item.icon}`}></i>
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        <button className="admin-logout" onClick={logout}>
          <i className="bi bi-box-arrow-left"></i>
          Logout
        </button>

      </aside>

      <main className="admin-main">

        <header className="admin-header">
          <div>
            <h3>{active}</h3>
            <p>Welcome to WinterFell administration</p>
          </div>

          <div className="admin-profile">
            <i className="bi bi-person-circle"></i>
            <span>Administrator</span>
          </div>
        </header>

        <section className="admin-content">
          <Outlet />
        </section>

      </main>

    </div>
  )
}
