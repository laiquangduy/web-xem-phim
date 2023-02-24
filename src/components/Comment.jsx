import React from "react";
import "./Comment.css";
function Comment() {
  return (
    <><div className="container"><div className='row'>
    <div className='col-12'>
      <h2>Discover</h2>
      <ul className='content__tab'>
        <li className='nav-item'>COMMENTS</li>
        <li className='nav-item'>REVIEWS</li>
        <li className='nav-item'>PHOTOS</li>
      </ul>
    </div>
  </div></div>
      

      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-8 col-xl-8'>
            <div className='comments'>
              <ul className='comments__list'>
                <li className='comments__item'>
                  <div className='comments__autor'>
                    <img
                      className='comments__avatar'
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
                        <button className='comments__like'>
                          <i class='fa-regular fa-thumbs-up'></i>8
                        </button>
                        <button className='comments__dislike'>
                          <i class='fa-regular fa-thumbs-down'></i>3
                        </button>
                      </div>
                      <button className="comments__response">
                        <i class='fa-solid fa-share'></i> REPLY
                      </button>
                      <button className="comments__response">
                        <i class='fa-regular fa-comment'></i> QUOTE
                      </button>
                    </div>
                  </div>
                </li>
                <li className='comments__item comments__item--answer'>
                  <div className='comments__autor'>
                    <img
                      className='comments__avatar'
                      src='http://flixgo.volkovdesign.com/main/img/user.svg'
                      alt=''
                    />
                    <span className='comments__name'>John Doe</span>
                    <span className='comments__time'>30.08.2018, 17:53</span>
                    <p className='comments__text'>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <div className='comments__actions'>
                      <div className='comments__rate'>
                        <button className='comments__like'>
                          <i class='fa-regular fa-thumbs-up'></i>8
                        </button>
                        <button className='comments__dislike'>
                          <i class='fa-regular fa-thumbs-down'></i>3
                        </button>
                      </div>
                      <button className="comments__response">
                        <i class='fa-solid fa-share'></i> REPLY
                      </button>
                      <button className="comments__response">
                        <i class='fa-regular fa-comment'></i> QUOTE
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-12 col-lg-4 col-xl-4'>
            <h2>You may also like...</h2>
            <div className='row'>
              <div className='col-6 col-sm-4 col-lg-6'>
                <div className='card'>
                  <a href='' clasName='card__cover'>
                    <img
                      className='poster__cover'
                      src='http://flixgo.volkovdesign.com/main/img/covers/cover.jpg'
                      alt=''
                    />
                  </a>
                  <div className='card__content'>
                    <h3 className='card__title'>Rengoku</h3>
                    <span className='card__category'>Action, Triler</span>
                    <span className='card_rate'>
                      <i class='fa-solid fa-star'></i>8.4
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-6 col-sm-4 col-lg-6'>
                <div className='card'>
                  <a href='' clasName='card__cover'>
                    <img
                      className='poster__cover'
                      src='http://flixgo.volkovdesign.com/main/img/covers/cover.jpg'
                      alt=''
                    />
                  </a>
                  <div className='card__content'>
                    <h3 className='card__title'>Doraemon</h3>
                    <span className='card__category'>Action, Triler</span>
                    <span className='card__rate'>
                      <i class='fa-solid fa-star'></i>8.4
                    </span>
                  </div>
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
