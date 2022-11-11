import React from "react";

function Icons(props) {
    return(
    <div className="icons">
    <p><i className="fa fa-clock-o fa-lg"></i>{props.runtime}</p>
    <p><i className="fa-solid fa-film fa-lg"></i>{props.genre}</p>
    <p><i className="fa-solid fa-chart-line fa-lg"></i>Popularity {props.popularity}</p>
  </div>)
}

export default Icons;