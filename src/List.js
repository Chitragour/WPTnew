export default function List()
{
    let items=['Seychells','Paris','Chicago','New York','Prague'];
    items=[];

    return(
        <>
        <h2>Let's Go to !</h2>
        {items.length===0 && <p>No item found</p>}
        <ul>
        {items.map((item)=>(<li key={item}>{item}</li>))}
        </ul>
        </>
    )
}