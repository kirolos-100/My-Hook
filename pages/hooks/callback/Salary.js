import React from 'react'

function Salary({salary}) {


    console.log("Render salary Compenent")


  return (
    <div>
      {salary}
    </div>
  )
}

export default React.memo(Salary)
