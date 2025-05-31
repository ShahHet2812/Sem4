import Child from './Child'
export default function Parent(){
    var n='ABC'
    return(
        <>
        <Child name='XYZ' age='20'/>
        <Child name={n} age='30'/>
        </>
    )
}