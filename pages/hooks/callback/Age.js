import React from 'react'

function Age({age}) {


    console.log("Render age Compenent")

    return (
        <div>
            {age}
        </div>
    )
}

export default React.memo(Age)
