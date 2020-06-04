import React from 'react';
import sprite from "../../res/img/sprite.svg";
import Photo1 from "../../res/img/h1.jpg";
import Photo2 from "../../res/img/h2.jpg";
import Photo3 from "../../res/img/h3.jpg";
import User1 from "../../res/img/user.png";
import User2 from "../../res/img/user-2.jpg";
import User3 from "../../res/img/user-3.jpg";
import User4 from "../../res/img/user-4.jpg";
import User5 from "../../res/img/user-5.jpg";

const Template = () => {
    return (
        <div className="hotel-view">
            <div className="gallery">
                <figure className="gallery__item">
                    <img src={Photo1} alt="Photo of Hotel 1" className="gallery__photo"/>
                    {/* <caption>This is test 1</caption> */}
                </figure>
                <figure className="gallery__item">
                    <img src={Photo2} alt="Photo of Hotel 2" className="gallery__photo" />
                    {/* <caption>This is test 2</caption> */}
                </figure>
                <figure className="gallery__item">
                    <img src={Photo3} alt="Photo of Hotel 3" className="gallery__photo" />
                    {/* <caption>This is test 3</caption> */}
                </figure>      
            </div>

            <div className="overview">
                <h1 className="overview__heading">
                    The H hotel
                </h1>

                <div className="overview__stars">
                    <svg className="overview__icon-star">
                        <use href={sprite + "#icon-star"} />
                    </svg>
                    <svg className="overview__icon-star">
                        <use href={sprite + "#icon-star"} />
                    </svg>
                    <svg className="overview__icon-star">
                        <use href={sprite + "#icon-star"} />
                    </svg>
                    <svg className="overview__icon-star">
                        <use href={sprite + "#icon-star"} />
                    </svg>
                    <svg className="overview__icon-star">
                        <use href={sprite + "#icon-star"} />
                    </svg>
                </div>

                <div className="overview__location">
                    <svg className="overview__icon-location">
                        <use href={sprite + "#icon-location-pin"} />
                    </svg>
                    <button className="btn-inline">Dubai, UAE</button>
                </div>

                <div className="overview__rating">
                    <div className="overview__rating-average">5.5</div>
                    <div className="overview__rating-count">555 votes</div>
                </div>
            </div>

            <div className="hotel-details">
                <div className="description">
                    <p className="paragraph">
                        The best H hotel in the world is the doofi hotel bicaz it is very important for them to have aftofl as their best guest of all five guests. Aftofl is the best in best in best five of all travellers to doofi.
                    </p>
                    <p className="paragraph">
                        Shaja baja and doofi ma is very closen disch to The H hotel that is very good . also Bajij and Panke are the best of all babas in The H breakfast only fort aftofl.
                    </p>
                    <ul className="list">
                        <li className="list__item">Close to Shaja Baja</li>
                        <li className="list__item">Close to Melto</li>
                        <li className="list__item">The best hotel ever made</li>
                        <li className="list__item">Biggest breakfast in the world</li>
                        <li className="list__item">Full of Red Qa'amz</li>
                        <li className="list__item">Stay at least 5days</li>
                        <li className="list__item">Specially made for AftoflBig5</li>
                        <li className="list__item">And mama is jiba <span> &hearts; </span> </li>
                    </ul>
                    <div className="recommend">
                        <p className="recommend__count">
                            Aftofl and 5 other friends recommend this hotel.
                        </p>
                    
                        <div className="recommend__friends">
                            <img src={User1} alt="Friend 1" class="recommend__photo"/>
                            <img src={User2} alt="Friend 2" class="recommend__photo"/>
                            <img src={User3} alt="Friend 3" class="recommend__photo"/>
                            <img src={User4} alt="Friend 4" class="recommend__photo"/>
                            <img src={User5} alt="Friend 5" class="recommend__photo"/>
                        </div>
                    </div>
                </div>

                <div className="user-reviews">
                    <figure className="review">
                        <blockquote class="review__text">
                            ICH LOVENEN MUSH MOMENEN FIVE IN FIVE IN FIVEN. Doofi ma and felal are THE MOST BEST SHAJA BEFORE DIJI IN LA.
                        </blockquote>
                        <figcaption className="review__user">
                            <img src={User1} alt="User 1" className="review__photo"/>
                            <div className="review__user-box">
                                <p className="review__user-name">AFTOFLBIG5</p>
                                <p className="review__user-date">5 May </p>
                            </div>
                            <div className="review__rating">5.5</div>
                        </figcaption>
                    </figure>

                    <figure className="review">
                        <blockquote class="review__text">
                            I love this hotel because the guests -especially AftoflBig5- were very amazing and handsome.
                        </blockquote>
                        <figcaption className="review__user">
                            <img src={User2} alt="User 2" className="review__photo" />
                            <div className="review__user-box">
                                <p className="review__user-name">DUJDIMA</p>
                                <p className="review__user-date">25 May </p>
                            </div>
                            <div className="review__rating">9.5</div>
                        </figcaption>
                    </figure>

                    <button className="btn-inline">Show all <span>&rarr;</span></button>
                </div>
            </div>

            <div className="cta">
                <h2 className="cta__book-now">We Have special rooms for free!</h2>
                <button className="btn-changing">
                    <span className="btn-changing__visible">Book Now!</span>
                    <span className="btn-changing__invisible">Only 5 rooms left</span>
                    
                </button>
            </div>

        </div>
    );
};

export default Template;