import { useState } from "react";

export default function US4(){
    const[data,setData]=useState({});
    function handleChange(e){
        const {name,value}=e.target;
        setData({...data,[name]:value})
    }
    return(
        <div>
            <input name="fname" placeholder="First Name" onChange={handleChange}></input>
            <input name="lname" placeholder="Last Name" onChange={handleChange}></input>
            <h1>Welcome {data.fname} {data.lname}</h1>
        </div>
    )
}