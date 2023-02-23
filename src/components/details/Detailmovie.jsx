import React from "react";
import "./Detailmovie.css";
const src = "https://www.youtube.com/watch?v=ZlNFpri-Y40";
function Detailmovie() {
  return (
    <>
      <div>I Dream in Another Language</div>
      <div className='card-detail'>
        <img
          src='http://flixgo.volkovdesign.com/main/img/covers/cover.jpg'
          alt=''
        />
        <div>
          <div className='card__wrap'>
            <span>
              <ul>
                <li>HD</li>
                <li>16+</li>
              </ul>
            </span>
          </div>
          <ul>
            <li>Genre: Action Triler</li>
            <li>Release year: 2017</li>
            <li>Running time: 120 min</li>
            <li>Country: USA</li>
          </ul>
          <div>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of
          </div>
        </div>
      </div>
      <video
        controls
        poster='https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg'
      >
        <source src='https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' />
      </video>
    </>
  );
}

export default Detailmovie;
