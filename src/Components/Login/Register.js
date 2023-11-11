import React, { useState } from 'react'
import { account } from '../Config/Appwrite'
import { ID } from 'appwrite'

const SignupPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await account.create(ID.unique(), email, password, name)
      console.log(response)
      alert('Signup successful!')
    } catch (error) {
      console.error(error)
      alert('Signup failed. Please check your input and try again.')
    }
  }

  return (
    <div className='signup'>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Name'
          type='text'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
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
        <button type='submit'>Signup</button>
      </form>
    </div>
  )
}

export default SignupPage
