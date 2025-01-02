

import "../ui/globals.css";
import ImageAndCaption from "./imageAndCaption";

import githubimage from "../images/githublogo_neutral.png";
import linkedinimage from "../images/linkedinlogo_neutral.png";
import mailimage from "../images/maillogo_neutral.png";


export default function Socials(){

    let githuburl = "https://github.com/jdmj011905";
    let linkedinurl = "https://www.linkedin.com/in/jmj0119/";
    let mailurl = "mailto: jdmj011905@gmail.com";



    return(


        <div className="socials">
            <ImageAndCaption source={githubimage} platform="Github" hyperref={githuburl} />
            <ImageAndCaption source={linkedinimage} platform="LinkedIn" hyperref={linkedinurl}/>
            <ImageAndCaption source={mailimage} platform="Mail" hyperref={mailurl}/>
        </div>

    );
}