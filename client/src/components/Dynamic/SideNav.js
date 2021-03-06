import React from 'react';
import sprite from "../../res/img/sprite.svg";

const Template = () => {
    return (
        <div className="sidebar">
            <ul className="side-nav">
                <li className="side-nav__item side-nav__item--active">
                    <a href="#" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use href={sprite + "#icon-home"} />
                        </svg>
                        <span>Hotel</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use href={sprite + "#icon-aircraft-take-off"} />
                        </svg>
                        <span>Flight</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use href={sprite + "#icon-key"} />
                        </svg>
                        <span>Car Rental</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use href={sprite + "#icon-map"} />
                        </svg>
                        <span>Tours</span>
                    </a>
                </li>
            </ul>
            <div className="legal">
                &copy; 2020 by AftoflBIG5
            </div>   
        </div>
    );
};

export default Template;