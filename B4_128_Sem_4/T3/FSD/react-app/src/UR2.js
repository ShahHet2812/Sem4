import {use, useReducer} from 'react'
function reducer(state,action){
    if(action.type==='increment'){
        return state+1;
    }
    else if(action.type==='decrement'){
        if(state<=0){
            return 0
        }
        return state-1
    }
    else if(action.type==='reset'){
        return 0
    }
    else{ return state }
}
export default function UR2(){
    const [state,dispatch]=useReducer(reducer,20);
    return (
        <>
            <h1>{state}</h1>
            <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </>
    )
}