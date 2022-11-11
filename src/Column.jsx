import React, {useState} from "react";
import FilmDetails from "./FilmDetails";
import PlayButton from "./PlayButton";

function Column(props) {

    const [isOpen, setIsOpen] = useState(false);
    
    function checkIsOpen(event) {
        const elementName = event.target.name;
        if (elementName!=="close" && elementName!=="playFilm" && isOpen===true){
            setIsOpen(false)
        } else if (isOpen===false){
            setIsOpen(true)
        } 
    }

    return(
        <details className={props.filmId} onClick={checkIsOpen}>
            <summary>        
                <h1>{props.filmNumber}</h1>
                <div className="right-line">
                    <hr className="title-line"/>
                    <h2>{isOpen ? <PlayButton /> : props.filmName}</h2>
                    <span>+</span>
                </div>
            </summary>
            {isOpen ?  <span name="close" className="close-button" onClick="">&#x2715;</span>: ""}
            {isOpen ? <FilmDetails 
            filmName={props.filmName}
            filmTagLine={props.filmTagLine}
            description={props.description}
            director={props.director}
            actors={props.actors}
            releaseDate={props.releaseDate}
            studio={props.studio}
            runtime={props.runtime} 
            genre={props.genre} 
            popularity={props.popularity}
            /> : ""}
        </details>
    );
}

export default Column;