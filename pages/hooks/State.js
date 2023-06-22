

import {useState}  from "react"



function State() {

    const [value , setValue] = useState(0);

    const updateUp = () => { setValue(prev=> prev + 1)}
    const updateDown = () => { setValue(prev=> prev - 1)}




    return (


        <div  className='  pt-10  '>  

            <div className="font-bold text-9xl pb-7" > {value} </div>
            <div className="justify-around gap-3" >

            <button className="btn btn-lg px-6 " onClick={updateDown} >-</button>
            <button className="btn btn-lg" onClick={updateUp} >+</button>

            </div>


        </div>
    )
}

export default State
