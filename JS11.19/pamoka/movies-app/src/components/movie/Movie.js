import "./movie.scss";

function Movie(props){
    return(
        <div className="col-sm-6">
            <div className="card">
                <div className="card-body">
                    <img className="imgCards" src={props.imgUrl}/>
                    <h5 className="card-title">{props.pavadinimas}</h5>
                    <p className="card-text">{props.aprasymas}</p>
                    <p className="card-text">{props.plot}</p>
                    <a href="#" className="btn btn-primary">Placiau</a>
                </div>
            </div>
        </div>
    )
}

export default Movie;