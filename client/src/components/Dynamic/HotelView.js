import React from 'react';
import sprite from "../../res/img/sprite.svg";
import Photo1 from "../../res/img/hotel-1.jpg";
import Photo2 from "../../res/img/hotel-2.jpg";
import Photo3 from "../../res/img/hotel-3.jpg";

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
        </div>
    );
};

export default Template;