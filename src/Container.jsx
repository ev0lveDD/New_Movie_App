import React from "react";
import Column from "./Column";
import MovieInfo from "./MovieInfo";

function createColumn(movie) {
    return <Column 
    key={movie.filmId}
    filmId={movie.filmId}
    fId={movie.fId}
    filmName={movie.filmName} 
    filmTagLine={movie.filmTagLine}
    filmNumber={movie.filmNumber} 
    description={movie.description}
    director={movie.director}
    actors={movie.actors}
    releaseDate={movie.releaseDate}
    studio={movie.studio}
    runtime={movie.runtime}
    genre={movie.genre}
    popularity={movie.popularity} />;
}

function Container(props) {
    return(
        <div className="container">
        {MovieInfo.map(createColumn)}
        </div>
    );
};

export default Container;