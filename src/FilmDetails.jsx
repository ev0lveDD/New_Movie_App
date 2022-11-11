import React from "react";
import Icons from "./Icons";
import FilmLeftDetails from "./FilmLeftDetails";
import FilmRightDetails from "./FilmRightDetails";
import FilmMainDetails from "./FilmMainDetails";

function FilmDetails(props){
    return(
        <div className="film-details">
            <FilmMainDetails filmName={props.filmName} filmTagLine={props.filmTagLine} description={props.description}/>
            <div className="film-details-info">
                <FilmLeftDetails />
                <FilmRightDetails director= {props.director} actors={props.actors} releaseDate={props.releaseDate} studio={props.studio}/>
            </div>
            <hr></hr>
            <Icons runtime={props.runtime} genre={props.genre} popularity={props.popularity}/>
        </div>
    );
}

export default FilmDetails;