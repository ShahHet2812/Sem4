export default function Productsata(props){
    return(
        <>
            {
                props.data.filter((p)=>p.price<=6000).map((p)=>{
                    return(
                        <div key={p.id}>
                            <img src={p.image} alt={p.name} height='300' width='300'/>
                            <h1>{p.name}</h1>
                            <h3>{p.price}</h3>
                        </div>
                    )
                })
            }
        </>
    )
}