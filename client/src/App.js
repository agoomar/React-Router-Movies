import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SavedList from './Movies/SavedList';
import { Route, Link } from 'react-router-dom';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          console.log(response.data);
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <nav className = 'nav-title'>
        <div> Movie List </div>
        <div className = 'nav-links'>

        <Route exact path = '/'>
          <MovieList movies = {movieList}/>
        </Route>

        <Link to ='/'>Home</Link>

        <Route path = '/movies/:id'>
          <Movie movies={movieList}/>
        </Route>

        <Link to = '/movies/'>Movie</Link>
        </div>
      </nav>
    </div>
  );
}
