export default function Date(){
    return(
        <>
            <h1>{new Date().toLocaleDateString()}</h1>
        </>
    )
}