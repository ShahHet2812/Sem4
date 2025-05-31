export default function Filter1(){
    const arr=[5,3,4,1,7,4,8,3,2];
    var t=arr.map((v,i)=>{
        if (v>=4){
            return <h2>{v}*3={v*3}</h2>
        }
        else{
            return false;
        }
    })
    console.log(t)
    var t1=arr.filter((v,i)=>{
        if(v>=4){
            return <h2>{v}*3={v*3}</h2>
        }
    })
    console.log(t1)
    return(<>
        {t}
        {t1.join(',')}
    </>)
}