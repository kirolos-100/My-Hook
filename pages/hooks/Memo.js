import React, { useMemo, useState } from 'react'

function Memo() {

    const [counterOne , setCounterOne] = useState(0)
    const [counterTwo , setCounterTwo] = useState(0)

    const changeOne = () => {setCounterOne(prev => prev + 1)}
    const changeTwo = () => {setCounterTwo(prev => prev + 1)}


    // just effect in button one 
    const isEven = useMemo( () => {
        let i = 0
        while (i < 200000000) i++
        return counterOne % 2 == 0

    }, [ counterOne])


    // effect on two buttons 
    /* const isEven = () => {
        let i = 0
        while (i < 2000000) i++
        return counterOne % 2 == 0 
    } */

    return (
        <div>

            <button className="btn btn-lg " onClick={changeOne} > { counterOne } </button>

            <br/>

            {isEven ? "even" : "odd"}

            <br/>

            <button className="btn btn-lg " onClick={changeTwo} > { counterTwo } </button>


        </div>
    )
}

export default Memo
