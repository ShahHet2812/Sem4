export default function Events(){
    function handleClick(){
        alert("Single Click")
    }
    function handledblClick(){
        alert("Doucle Click")
    }
    function handleChange(e){
        console.log(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        alert("Thank You")
    }
    return(
        <>
            <button onClick={handleClick}>Single Click</button>
            <button onDoubleClick={handledblClick}>Double Click</button>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} onClick={handleClick}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}