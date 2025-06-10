import { useState } from "react";
export default function US2(){
    const [num,setNum]=useState(10);
    const[txtcolor,settxtcolor]=useState("red");
    function Increment(){
        if(num<20){
            setNum(num+1);
        }
        else{
            return false
        }

    }
    function Decrement(){
        if(num<=0){
            return false
        }
        else{
            setNum(num-1);
        }
    }
    function changeColor(){
        if(txtcolor==="red"){
            settxtcolor("blue")
        }
        else{
            settxtcolor('red')
        }
    }
    return(
        <div>
            <h1 style={{color:txtcolor}}>{num}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onDoubleClick={changeColor}>Change Color</button>
        </div>
    )
}