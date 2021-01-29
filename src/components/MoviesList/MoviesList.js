import React from 'react'
import MovieCard from "../MoviesCard/MoviesCard" ;
const MovieList = ({movieList, nameSearch, ratingSearch}) => {
    return (
        <div className='moviesList'>
            
            {movieList.filter(
          (el) =>
            el.name.toLowerCase().includes(nameSearch.toLowerCase().trim()) &&
            el.rating >= ratingSearch
        ).map ((movie,i) => ( <MovieCard key ={i} movie={movie}/>))}
        </div>

    )
}
export default MovieList;