import { useContext } from "react";
import {Uname,Email} from './Parent'
export default function Child2(){
    const un=useContext(Uname)
    const eid=useContext(Email)
    return(<>
        <h1>Welcome {un}</h1>
        <h2>Email is {eid}
        </h2>
    </>)
}