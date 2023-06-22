import React, { useContext } from 'react'
import UserContext from './UserContext'


function Button() {

    const { setUserOne } = useContext(UserContext)

    return (
        <div>

            <button className="btn btn-outline mt-5" onClick={() => {
                setUserOne("Mario")
            }} >
                Update User
            </button>
        </div>
    )
}

export default Button
