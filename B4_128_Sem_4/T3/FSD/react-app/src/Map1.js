export default function Map1(){
    var arr=[10,5,3,7,4,2,6,7,9]
    return(
        <>
        {
            arr.map((v,i)=> {
                return <h3 key={i}>Element is:{v}</h3>       
            })}
        </>
    )
}