import { createContext } from "react"
import Child1 from './Child1'
const Uname=createContext()
const Email=createContext()
export default function Parent(){
    return(<>
        <Uname.Provider value='ABC XYZ'>
            <Email.Provider value='abc@gmail.com'>
                <Child1/>
            </Email.Provider>
        </Uname.Provider>
            
    </>)
}export{Uname,Email}