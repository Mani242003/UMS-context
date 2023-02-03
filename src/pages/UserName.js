import React from 'react'
import { useParams } from 'react-router-dom'

const UserName = () => {
    const {name}=useParams()
  return (
    <div>
    <h1>User name is {name}</h1>
      
    </div>
  )
}

export default UserName
