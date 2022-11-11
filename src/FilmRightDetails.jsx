import React from "react";


function FilmRightDetails(props){
    return(
        <div className="film-right-details">
            <p>{props.director}</p>
            <p>{props.actors}</p>
            <p>{props.releaseDate} </p>
            <p>{props.studio}</p>
        </div>
    );
}

export default FilmRightDetails;