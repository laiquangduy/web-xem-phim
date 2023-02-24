import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slidemovie() {
  const [moviePosters, setMoviePosters] = useState([
    {
      id: 1,
      image: "http://flixgo.volkovdesign.com/main/img/covers/cover.jpg",
    },
    {
      id: 2,
      image: "http://flixgo.volkovdesign.com/main/img/covers/cover2.jpg",
    },
    {
      id: 3,
      image: "http://flixgo.volkovdesign.com/main/img/covers/cover3.jpg",
    },
    {
      id: 4,
      image: "http://flixgo.volkovdesign.com/main/img/covers/cover4.jpg",
    },
    // Add more posters as needed
  ]);
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className='fa fa-chevron-left'></i>
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className='fa fa-chevron-right'></i>
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],}
  return (
    <>
      <div className='container'>
        <div className='col-12'>
          <h1 className='home__title'>
            <b>NEW ITEMS </b>
            OF THIS SEASON
          </h1>
          
          <Slider
            {...settings}
            prevArrow={<CustomPrevArrow />}
            nextArrow={<CustomNextArrow />}
            
          >
            {moviePosters.map((poster) => (
              <div key={poster.id}>
                <img src={poster.image} alt='Movie poster' />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Slidemovie;
