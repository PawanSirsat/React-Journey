import React, { useState } from 'react'
import './style.css'

function Replace() {
  const users = {
    pawan: {
      name: 'pawan',
      age: 21,
      city: 'mumbai',
    },
    rahul: {
      name: 'rahul',
      age: 25,
      city: 'Pune',
    },
  }

  const [inputValue, setInputValue] = useState('') // State to store the user's input
  const [userData, setUserData] = useState(null) // State to store the retrieved user data

  const handleInputChange = (e) => {
    setInputValue(e.target.value) // Update the input value as the user types
  }

  const handleSubmit = () => {
    // Determine which user object to retrieve based on the input value
    const inputName = inputValue.toLowerCase()
    if (users[inputName]) {
      setUserData(users[inputName])
    } else {
      setUserData(null) // Handle the case where the input doesn't match any user
    }
  }

  return (
    <>
      <div class='container'>
        <div class='left-div'>
          <h2>Enter Name For data</h2>
          <input type='text' value={inputValue} onChange={handleInputChange} />
          <input type='submit' value='Submit' onClick={handleSubmit} />
        </div>

        <div class='right-div'>
          <h5>List Of Student</h5>
          {Object.values(users).map((element, index) => (
            <ul key={index}>
              <li>{element.name}</li>
            </ul>
          ))}
        </div>
      </div>

      {userData && (
        <div>
          <h3>User Data:</h3>
          <p>Name: {userData.name}</p>
          <p>Age: {userData.age}</p>
          <p>City: {userData.city}</p>
        </div>
      )}
    </>
  )
}

export default Replace
