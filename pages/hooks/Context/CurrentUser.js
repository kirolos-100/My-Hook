import React, { useContext } from 'react'
import UserContext from './UserContext'



function CurrentUser() {

    const {userOne}  = useContext(UserContext)

    return (
        <div>
            {userOne}
        </div>
    )
}

export default CurrentUser
