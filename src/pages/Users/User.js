import React from 'react'
import "./user.css"

const User = ({id,name,email,age,phone,deleteUser}) => {
  return (
    <div className='userContainer'>
    <h4 className='labelTag'>ID:<small >{id}</small></h4>
    <h4>NAME:<small>{name}</small></h4>
    <h4>E-mail:<small>{email}</small></h4>
    <h4>Age:<small>{age}</small></h4>
    <h4>PHONE:<small>{phone}</small></h4>
    <button className='deleteButton' onClick={deleteUser}>DELETE</button>
    <br />
    </div>
  )
}

export default User
