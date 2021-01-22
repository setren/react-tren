// import { render } from "@testing-library/react";
import React from "react";

const Post = (props) =>{
    return(
        <div className="post">
        <div className="img-thumb">
            <img src="https://placeimg.com/200/200/any" alt="Boneka Gambar"/>
        </div>
        <div className="content">
            <p className="title">{props.data.title}</p>
            <p className="desc">{props.data.body}</p>
            <button className="update" onClick={()=>props.update(props.data)}>UPDATE</button>
            <button className="remove" onClick={()=>props.remove(props.data.id)}>REMOVE</button>
        </div>
        </div> 
    )
}

export default Post;