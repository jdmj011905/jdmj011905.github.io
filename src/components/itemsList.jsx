

export default function ItemsList(props){

    let listElements = props.items.map(item => <li>{item}</li>);


    return(

    
        <div className={props.myClass}>
            <h2 className="header">{props.heading}</h2>
            <ul>
                <li>{listElements}</li>
            </ul>
        </div>
    );
}