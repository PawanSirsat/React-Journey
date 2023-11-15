import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { account } from '../Config/Appwrite'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await account.createEmailSession(email, password)
      console.log(response)
      alert('Login successful!')
      navigate('/welcome')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='login'>
      <h2>Login</h2>
      <br />

      <form onSubmit={handleSubmit}>
        <input
          placeholder='Email'
          type='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />

        <input
          placeholder='Password'
          type='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
