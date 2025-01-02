

import "../ui/globals.css";
import ItemsList from "./itemsList.jsx";
import Socials from "./socials.jsx";


export default function Introduction(props){

    let socials = ['GitHub', 'LinkedIn'];



    return(
        <div className="introduction">
            <h1 id="jason">Jason Martinez</h1>
            <h3 className="credentials">B.S. Computer Science</h3>
            <Socials />
        </div>


    );
}