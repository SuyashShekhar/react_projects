import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
    // to get that userId we have to use useParams 
  return (
    <div>User : {userId}</div>  // here give that value only which you have written in route
  )
}

export default User