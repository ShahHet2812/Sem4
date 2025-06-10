import { useState } from "react"

export default function US3(){
    const [txt,settxt]=useState("Welcome Students")
    const [hstxt,sethstxt]=useState("React JS")
    const [btntxt,setbtntxt]=useState("Hide");
    function changeTxt(){
        if(txt==="Welcome Students"){
            settxt("Good Morning")
        }else{settxt("Welcome Students")}
    }
    function handleHideShow(){
        if(hstxt==="React JS"){
            sethstxt(" ")
            setbtntxt("Show")
        }else{sethstxt("React JS");setbtntxt("Hide")}
    }
    return(
        <div>
            <button onClick={changeTxt}>hange Text</button>
            <button onClick={handleHideShow}>{btntxt}</button>
            <h1>{txt}</h1>
            <h2>{hstxt}</h2>
        </div>
    )
}