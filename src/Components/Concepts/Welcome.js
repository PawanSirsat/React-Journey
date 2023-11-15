import React, { useEffect, useState } from 'react'
import { account } from '../Config/Appwrite'
import { Link, useNavigate } from 'react-router-dom'

const Welcome = () => {
  const navigate = useNavigate()

  const [userInfo, setUserInfo] = useState()
  const handleLogout = async () => {
    try {
      await account.deleteSession(
        'eyJpZCI6IjY1NGY0YjhjNWQ1MDdkMDM1M2FiIiwic2VjcmV0IjoiYzk3Y2E4OWVjOTg3YmE2MTgyOGE0MmFhZjY3NTFiN2U1ODI3ZWQyYTlkY2ZlNWE5ZThiZDlkYjc1MjZhMTA2MGQyNDI2MjA1Zjg1MjBjNWYzZDYwYjc4YTI0MWZkYjEwMmM3YzZjMGJhZTZhOGNjOTA0OWZhMTc0N2NhMGIwM2I5ZjI3NTRhZmZmMGJmZDg5MGRmMzQ0YzI4NjJhMTcwNWRlZWY0N2RiMjYxMWUxZDY2OTIwMzU0YzNjMGI0NDM3NGQ4ODUxOWJjNDk2NGM2YTVjZWMxMzM0MzQ1Njc5MWQ2M2MxY2I3ZTgwYzU2MDdhYTQ5MzJiNzg4YWJkODE2OSJ9'
      )
      console.log('Logout successful!')
      navigate('/login')
    } catch (error) {
      console.error(error)
      console.log('Logout failed. Please try again later.')
    }
  }
  useEffect(() => {
    const response = account.get()
    response.then(function (res) {
      setUserInfo(res)
    }),
      function (err) {
        console.log(err)
      }
  })
  return (
    <div className='welcome'>
      <h3>Welcome</h3>
      {userInfo ? (
        <>
          <i>Email : {userInfo.email}</i>
          <br />
          <i>Name : {userInfo.name}</i>
        </>
      ) : (
        <span>Loading...</span>
      )}

      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Welcome
