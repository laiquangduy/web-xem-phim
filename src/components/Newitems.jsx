import React from "react";
import { Link } from "react-router-dom";

import "./Movielist.css";
const MovieList = () => {
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      rate: 9.3,
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      imageUrl: "http://flixgo.volkovdesign.com/main/img/covers/cover.jpg",
      category: "Action, Triler",
    },
    {
      id: 2,
      title: "The Godfather",
      rate: 9.2,
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      imageUrl: "http://flixgo.volkovdesign.com/main/img/covers/cover2.jpg",
      category: "Action, Triler",
    },
    {
      id: 3,
      title: "The Dark Knight",
      rate: 9.0,
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      imageUrl: "http://flixgo.volkovdesign.com/main/img/covers/cover3.jpg",
      category: "Action, Triler",
    },
    {
      id: 4,
      title: "12 Angry Men",
      rate: 8.9,
      description:
        "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
      imageUrl: "http://flixgo.volkovdesign.com/main/img/covers/cover4.jpg",
      category: "Action, Triler",
    },
  ];

  return (
    <div className='container'>
      <div className='row'>
        <div className=''></div>
        {movies.map((movie) => (
          <div className='col-md-6' key={movie.id}>
            <div className='card mb-3'>
              <div className='row g-0'>
                <div className='col-md-4'>
                  <Link to='/detail'>
                    <img
                      src={movie.imageUrl}
                      className='img-fluid rounded-start'
                      alt={movie.title}
                    />
                  </Link>
                </div>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <h5 className='card-title'>{movie.title}</h5>
                    <p className='card-category'>{movie.category}</p>
                    <p className='card-text'>
                      <small className='text-muted'>Rating: {movie.rate}</small>
                    </p>
                    <p className='card-text'>{movie.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
