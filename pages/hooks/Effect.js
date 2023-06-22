

import {useState , useEffect }  from "react"



function Effect() {

    
    const [users , setUsers] = useState([]);
    const [filteredUsers , setFilteredUsers] = useState([]);
    const [inputValue , setInputValue ] = useState('')




    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data) )

        return () => {return false ;}
    } , [] )


    useEffect(()=> {
        setFilteredUsers(users)
    } , [users])


    useEffect(()=> {
        const filter = users.filter(
            user => user.name.toLowerCase().includes(e.target.value)
        )

        setFilteredUsers(filter)

    }, [inputValue])



    const handleChange = (e) => {
        setInputValue(e.target.value)

    }


/*     useEffect(() => {
        if(users.lenght > 0){

        }
    },[users] ) */

    return (
        <>
        
            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" onInput={handleChange} />

        {
            filteredUsers.map(
                user => 
                <h3 key={user.id}>
                    {user.name}
                </h3>
            )
        }


        </>
    )
}

export default Effect 
