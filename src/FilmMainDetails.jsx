import React from "react";


function FilmMainDetails(props){
    return(
    <div>
        <h1>{props.filmName}</h1>
        <h3>{props.filmTagLine}</h3>
        <p className="film-description">{props.description}</p>
    </div>
    );
}

export default FilmMainDetails;