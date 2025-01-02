

export default function imageAndCaption(props){





    return (


        <div className="imageAndCaption" space->

            <a target="_blank" href={props.hyperref}>
                <img className="clipArt" src={props.source} width={16} height={16} align="middle"/>
                <span className="spacer"></span>
                <p className="caption">{props.platform}</p>
            </a>

        </div>
    );
}
    




