import React, { createContext, useState } from 'react'
import User from './User';
import UserContext from './UserContext';

function Context() {
    
    const [userOne , setUserOne] = useState("Mark") ;
    

    const userValues = {userOne , setUserOne}


    return (

        <UserContext.Provider value={userValues}>
        <User  />   
        </UserContext.Provider>
    )
}



export default Context
