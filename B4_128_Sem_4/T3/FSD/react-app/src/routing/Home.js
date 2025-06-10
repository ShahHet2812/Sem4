import p from './p.png'
export default function Home(){
    return(
        <div>
            <h1 style={{color:'blue',textAlign:'center'}}>Welcome to the Page</h1>
            <img src={p} style={{display:'block',margin:'0 auto',height:'500px', width:'800px'}}></img>
        </div>
    )
}