import React, { useCallback, useState } from 'react'
import Age from './Age'
import Salary from './Salary'
import Button from './Button'


function Callback() {

    const [age, setAge] = useState(20)
    const [salary, setSalary] = useState(8000)
    

    const ageUp = useCallback(()=>setAge(age+1) , [age]) 
    const salaryUp = useCallback(()=>setSalary(salary + 1000) , [salary])  

    return (
        <>

        <div className=''>
        <Age age={age} />
        <Salary salary={salary} />


        </div>

        <div>
        <Button text={"Age up"} action= {ageUp}/>
        <Button text={"Salary up"} action={salaryUp} />


        </div>

        
        </>
    )
}

export default Callback
