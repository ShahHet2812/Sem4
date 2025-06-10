import {use, useReducer} from 'react'
function reducer(state,action){
    return state+action;
}
export default function UR1(){
    const [state,dispatch]=useReducer(reducer,20);
    return (
        <>
            <h1>{state}</h1>
            <button onClick={()=>dispatch(2)}>Increment</button>
            <button onClick={()=>dispatch(-2)}>Decrement</button>
            <button onClick={()=>dispatch(0)}>Reset</button>
        </>
    )
}