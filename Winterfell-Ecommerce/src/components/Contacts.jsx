import React, { useState } from 'react'
import '../css/Contacts.css'
export default function Contacts() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    console.log(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    alert('Message submitted successfully!')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="contacts" id='contact'>

      <div className="contact-heading">
        <h1>Get In Touch</h1>
        <p>Have questions? We'd love to hear from you.</p>
      </div>

      <div className="contact-container">

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Feel free to contact us. We are always ready to help you.</p>

          <div className="info-item">
            <i className="bi bi-geo-alt-fill"></i>
            <div>
              <h3>Our Location</h3>
              <p>Coimbatore, Tamil Nadu, India</p>
            </div>
          </div>

          <div className="info-item">
            <i className="bi bi-envelope-fill"></i>
            <div>
              <h3>Email Us</h3>
              <p>support@winterfell.com</p>
            </div>
          </div>

          <div className="info-item">
            <i className="bi bi-telephone-fill"></i>
            <div>
              <h3>Call Us</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            value={form.message}
            onChange={handleChange}
            rows="5"
            required
          />

          <button type="submit">Send Message</button>
        </form>

      </div>
    </div>
  )
}