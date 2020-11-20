import "./main.scss";
import Movie from "../movie/Movie";
import movies from "../../data/MoviesData";
import {Container, Row, Col, InputGroup, FormControl, Card, BreadCrumb, ListGroup, ListGroupItem, Image} from 'react-bootstrap';

function Main(){
    const Movies = movies.map(movie => <Movie key={movie.id} pavadinimas={movie.pavadinimas} aprasymas={movie.aprasymas} imgUrl={movie.url} />)
    return(
        <main>
            <div>
                <div className="row">
                    {Movies}
                </div>
            </div>
        </main>
    )
}

export default Main;