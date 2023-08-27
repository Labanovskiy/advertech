import arrowB from './../../img/Header/fi-sr-arrow-small-right 1.svg'
import arrowW from './../../img/Header/fi-sr-arrow-small-right 1 white.svg'
import banner from './../../img/Header/Banner.png'

import './banner.css'

const Banner = () => {
    return (
        <section className="banner">
                <div className="banner__content">
                    <div className="banner__text">
                        <div className="banner__title">
                            We are <span>awesome team</span> for your business dream
                        </div>
                        <div className="banner__desc">Integrated workflow designed for product teams. We create world-class development and branding</div>
                        <div className="banner__btn">
                                <a href="#!" className="banner__btn--1">
                                    <span>Get Started</span>
                                    <img src={arrowW} alt="arrow" />
                                </a>
                                <a href="#!" className="banner__btn--2">
                                    <span>Learn More</span>
                                    <img src={arrowB} alt="arrow" />
                                </a>
                        </div>
                    </div>
                    <div className="banner__img">
                        <img src={banner} alt="banner" className="banner__img--1" />
                    </div>
                </div>
        </section>
    );
}
 
export default Banner;