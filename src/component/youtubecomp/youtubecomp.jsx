import React from "react";
import "./youtubecomp.css";

const YoutubeComp = (props) => {
    return(
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/MBXEbaWQSuY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCK4LkTOghIlNKnsGFet-zVX-w0Kg" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>

    )
}

YoutubeComp.defaultProps = {
    time:"00.00",
    title:"Judul Default",
    desc:"No Description"
}

export default YoutubeComp;