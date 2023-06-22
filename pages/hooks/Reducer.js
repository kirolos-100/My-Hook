import React, { useReducer } from 'react'

function Reducer() {


    const initState = {count : 0}

    const reducer = ( state , action  ) => {


        switch(action.type) {
            case 'up' : return {count : state.count + 1}
            case 'down' : return {count : state.count - 1}
            case 'reset' : return {count : 0}
            default : return state
        }


/*         if(action.type === 'up'){
            return {count : state.count + 1}
        }
        if(action.type === 'down'){
            return {count : state.count - 1}
        }
        if(action.type === 'reset'){
            return {count : 0}
        }


        return state */


    }



    const [state , dispatch] = useReducer(reducer , initState  )

    return (
        <div>
            <h1> {state.count} </h1>

            <button className="btn btn-outline m-3 " onClick={ () => {dispatch({type:'up'})} }> UP </button>
            <button className="btn btn-outline m-3 "  onClick={ () => {dispatch({type:'down'})} }> DOWN </button>
            <button className="btn btn-outline m-3 "  onClick={ () => {dispatch({type:'reset'})} }> RESET </button>


        </div>
    )
}

export default Reducer
