export default function Icard(props)
{
    let {p, n}=props.obj;
    const myname="Betu";

    return(
        <div>
            <p>{myname}</p>
            <p>Name:{n}</p>
            <p>Phone:{p}</p>
        </div>
    )
}