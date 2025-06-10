import { useState } from "react";
export default function US1(){
    const[count,setCount]=useState(0);
    return(<>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <h1>{count}</h1>
        </>
    )
}