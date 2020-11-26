import "./main.scss";
import Movie from "../movie/Movie";
import movies from "../../data/MoviesData";
import React, { Component } from 'react';


class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            count:0,
            moviesData:[]
}
    this.handleClick=this.handleClick.bind(this)
    }
    // componentDidMount(){
    //     fetch("http://www.omdbapi.com/?i=tt3896198&apikey=ee40dda6&s=terminator")
    //     .then(response=>response.json())
    //     .then(
    //         data=>{
    //             this.setState({
    //                 moviesData: data
    //             })
    //             console.log(this.state.moviesData);
    //         }
    //     )
    // }


    

    handleClick(){
        this.setState(prevState=>{
            return {
                count:prevState.count+1
            }
        })
    }

    async componentDidMount() {
        let res = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=ee40dda6&s=terminator");
        let data = await res.json()
        let movies = data.Search;
        for (let index = 0; index < movies.length; index++) {
            let path = "http://www.omdbapi.com/?i=tt3896198&apikey=ee40dda6&s=" + movies[index].Title;
            let response = await fetch(path);
            let movieWithPlot = await response.json();
            movies[index].Plot = movieWithPlot.Plot;
        }
        this.setState({moviesData: movies})
    }  

    
    render() {
        // const Movies = movies.map(movie => <Movie key={movie.id} pavadinimas={movie.pavadinimas} aprasymas={movie.aprasymas} imgUrl={movie.imgUrl} />)
        const movies = this.state.moviesData.map((movie, index)=>
            <Movie key={index}
                pavadinimas={movie.Title}
                aprasymas={movie.Year}
                plot={movie.Plot}
                imgUrl={movie.Poster} />)
        return (
            <main>
                <div>
                    <div className="row">
                        {movies}
                    </div>
                </div>
                <div>
                    <div><h2 style={{textAlign:+"center"}}>{this.state.count}</h2></div>
                    <button onClick={this.handleClick}>Click me</button>
                </div>
            </main>
        )
    }
}

export default Main;