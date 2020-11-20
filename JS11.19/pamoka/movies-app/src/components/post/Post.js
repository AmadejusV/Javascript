import React from "react"
import movie from "../../data/MoviesData";

function Post(props) {
    return (
        <div>
            <h3>{props.pavadinimas}</h3>
            <p>{props.tekstas}</p>
            <hr/>
        </div>
    )
}

export default Post