import React, { useState } from 'react'
import { account } from '../Config/Appwrite'
import { ID } from 'appwrite'

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const signPromis = account.create(
      ID.unique,
      formData.username,
      formData.email,
      formData.password
    )

    signPromis.then(
      function (res) {
        console.log(res)
      },
      function (err) {
        console.log(err)
      }
    )
    // Add your form submission logic here
    console.log('Form submitted:', formData)
    // You can send the form data to your backend, perform validation, etc.
  }

  return (
    <div className='signup-container'>
      <h2>Signup Form</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          name='username'
          value={formData.username}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor='email'>User Email:</label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input type='submit' value='Signup' />
      </form>
    </div>
  )
}

export default Signup
