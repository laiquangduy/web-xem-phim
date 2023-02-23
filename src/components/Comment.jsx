import React from "react";
import "./Comment.css";
function Comment() {
  return (
    <>
      <div className='container'>
        <h2>Discover</h2>
        <ul className='content__tab'>
          <li className='nav-item'>COMMENTS</li>
          <li className='nav-item'>REVIEWS</li>
          <li className='nav-item'>PHOTOS</li>
        </ul>
        <div className='row'>
          <div className='col-12 col-lg-8 col-xl-8'>
            <div className='comments'>
              <ul className='comments__list'>
                <li className='comments__item'>
                  <div className='comments__autor'>
                    <img
                      className='comments_avatar'
                      src='http://flixgo.volkovdesign.com/main/img/user.svg'
                      alt=''
                    />
                    <span className='comments__name'>John Doe</span>
                    <span className='comments__time'>30.08.2018, 17:53</span>
                    <p className='comments__text'>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                    <div className='comments__actions'>
                      <div className='comments__rate'>
                        <button>
                          <i class='fa-regular fa-thumbs-up'></i>
                        </button>
                        <button>
                          <i class='fa-regular fa-thumbs-down'></i>
                        </button>
                      </div>
                      <button>
                        <i class='fa-solid fa-share'></i>
                      </button>
                      <button>
                        <i class='fa-regular fa-comment'></i>
                      </button>
                    </div>
                  </div>
                </li>
                <li className='comments__item'></li>
              </ul>
            </div>
          </div>
          <div className='col-12 col-lg-4 col-xl-4'>
            <h2>You may also like...</h2>
            <div className='col-6 col-sm-4 col-lg-6'>
              <div className='card'>
                <a href=''>
                  <img
                    clasName='card__cover'
                    src='http://flixgo.volkovdesign.com/main/img/covers/cover.jpg'
                    alt=''
                  />
                </a>
                <div className='card__content'>
                  <h3 className='card__title'>I Dream in Another Language</h3>
                  <span className='card__category'>Action, Triler</span>
                  <span className='card_rate'>
                    <i class='fa-solid fa-star'></i>8.4
                  </span>
                </div>
              </div>
            </div>
            <div className='col-6 col-sm-4 col-lg-6'>
              <div className='card'>
                <a href=''>
                  <img
                    clasName='card__cover'
                    src='http://flixgo.volkovdesign.com/main/img/covers/cover.jpg'
                    alt=''
                  />
                </a>
                <div className='card__content'>
                  <h3 className='card__title'>I Dream in Another Language</h3>
                  <span className='card__category'>Action, Triler</span>
                  <span className='card_rate'>
                    <i class='fa-solid fa-star'></i>8.4
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
