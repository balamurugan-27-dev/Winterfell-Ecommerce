import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import api from './AxiosInstance'
import '../css/Register.css'

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', mail: '', password: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      await api.post('/auth/register', { ...form })
      navigate('/login', { state: { registered: true } })
    } catch (requestError) {
      setError(requestError.response?.data?.message || 'Unable to create your account. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className='register-page'>
      <section className='register-message' aria-label='WinterFell welcome message'>
        <p>Good Styles.</p>
        <p>Better Days.</p>
      </section>

      <section className='register-form-container'>
        <form className='register-form' onSubmit={handleSubmit}>
          <p className='register-brand'>WinterFell</p>
          <h1>Create your account</h1>
          <p className='register-intro'>Join us for pieces made to become favourites.</p>

          <label htmlFor='name'>Name</label>
          <input id='name' className='register-input' type='text' name='name' placeholder='Enter your name' value={form.name} onChange={handleChange} required />

          <label htmlFor='mail'>Email</label>
          <input id='mail' className='register-input' type='email' name='mail' placeholder='Enter your email' value={form.mail} onChange={handleChange} required />

          <label htmlFor='password'>Password</label>
          <input id='password' className='register-input' type='password' name='password' placeholder='Create a password' value={form.password} onChange={handleChange} minLength='6' required />

          {error && <p className='register-error' role='alert'>{error}</p>}

          <button className='register-button' type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Creating account...' : 'Create account'}
          </button>

          <p className='register-login-link'>Already have an account? <Link to='/login'>Sign in</Link></p>
        </form>
      </section>
    </main>
  )
}
