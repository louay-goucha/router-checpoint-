import './App.css';
import  React, { useState } from 'react';
import {MovieData} from "./components/MovieData";
import MoviesList from "./components/MoviesList/MoviesList";
import AddMovie from "./components/AddMovies/AddMovies"
import SearchMovie from "./SearchMovie"
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Moviesdescription from './components/moviesdescription';



function App() {
  const [movieList, setMovieList] = useState(MovieData); 
  const [ratingSearch, setRatingSearch] = useState(1);
  const [nameSearch, setNameSearch] = useState('');
  
 
  const addNewMovie = (e, NewMovie) => {
    e.preventDefault();
    setMovieList([...movieList, NewMovie]);
  } 
 return (
    <div className="App">
     <Router>
    
       <Link className="home" to="/"><button>Home</button></Link>
       
         <Route exact path ="/" component={MoviesList}>
     <SearchMovie
     ratingSearch={ratingSearch}
       setRatingSearch={setRatingSearch}
       setNameSearch={setNameSearch}
     />
     <MoviesList
       movieList={movieList}
       nameSearch={nameSearch}
       ratingSearch={ratingSearch}
       />
     <div style={{ display: 'felx', JustifyContent: 'center' }}>
       <AddMovie addNewMovie={addNewMovie }/>
           </div>
           </Route>
         <Route exact path="/discription/:moviesId" component={Moviesdescription}/>
      
       </Router> 
    </div>
  );
}
export default App;