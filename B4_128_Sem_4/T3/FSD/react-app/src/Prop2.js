export default function Prop2(props){
    return(
        <>
            {
                props.data.filter((p)=>p.price<10000).map((p,i)=>{
                    return(<div key={i}>
                        <img src={p.image} alt={p.name} height="200" width="200"/>
                        <h3 style={{color:"green"}}>{p.name}</h3>
                        <h4>{p.price}</h4>
                    </div>)
                })
            }
        </>
    )
}