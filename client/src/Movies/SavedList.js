import React from 'react';
import { Link } from 'react-router-dom';
import Movie from './Movie';
import MovieList from './MovieList';

export default function SavedList(props) {
  return (
    <div className="saved-list">
      <Link to={`/home ${MovieList}`}>
      <h3>Saved Movies:</h3>
      </Link>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button">Home</div>
    </div>
  );
}
