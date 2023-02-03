import React,{useContext} from 'react'
import User from "./User";
import { GlobalContext } from "../../context/GlobalState";
import { Link } from 'react-router-dom';
import "./Users.css";

const Users = () => {

  const {users, deleteUser} = useContext(GlobalContext)

  console.log(users);

  return (
   
    <div className='UsersContainer' >    
    {
      users.length===0?
     ( <div>
        <h1>No User Found</h1>
        <Link to="/"> add user</Link>

        </div>
     
     )
      :
     users.map((user)=>{
        return(
            <User 
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            age={user.age}
            phone={user.phone}
            deleteUser={()=>{ deleteUser(user.id)}}

             />
        
        )
      })
      }

    </div>
  )
}

export default Users
