import React,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";

export const GlobalContext=createContext();

const initialState={
    users:[],   
}

export const GlobalProvider=({children})=>{

    const [state, dispatch] = useReducer( AppReducer,initialState)

    const addUser=(user)=>{

        const actionObj={
            type:"ADD_USER",
            user,
        }
        dispatch(actionObj)
    }

    const deleteUser=(id)=>{
        dispatch({
            type:"DELETE_USER",
            id,
        })
    }

    return(
        <GlobalContext.Provider value={ { users:state.users, addUser: addUser, deleteUser:deleteUser  }}>
            {children}
        </GlobalContext.Provider>
        

    )

}
