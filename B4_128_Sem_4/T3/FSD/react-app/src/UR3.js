import { useReducer } from "react";
import p from './p.png'
import r from './r.png'
const obj={image:p,bgcolor:'pink'}
function reducer(state,action){
    if(action.type==='display'){
        if(state.image===p){
            return{image:r,bgcolor:'blue'}
        }
        else{
            return{image:p,bgcolor:'pink'}
        }
    }
    return state;
}
export default function UR3(){
    const[state,dispatch]=useReducer(reducer,obj)
    return(<>
        <button onClick={()=>dispatch({type:'display'})}>Change Image and BG color</button>
        <img src={state.image} height='300' width='300'/>
        <div style={{height:'500px',width:'500px',padding:'50px',backgroundColor:state.bgcolor}}>Test</div>
    </>)
}