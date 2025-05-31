export default function Table(){
var arr=[10,5,3,7,4,2,6,7]
return(
<>
    {
        arr.map((v,i)=>{
           return <h3 key={i}>
                {v}*5={v*5}
            </h3>
        })
    }
</>
)
}