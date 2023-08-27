import img1 from './../../img/Body/icon1.svg'
import img2 from './../../img/Body/icon2.svg'
import img3 from './../../img/Body/icon3.svg'
import './about.css';

const About = () => {
    return (
    <section>
            <div className="about">
                <div className="about__title">
                    Built exclusively for you
                </div>
                <div className="about__desc">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.
                </div>
                <div className="about__faq">
                    <div className="about__faq--1">
                        <div className="about__faq--img">
                            <img src={img1} alt="icon" />
                        </div>
                        <div>
                            <div className="about__faq--title">
                                1. Acquisition
                            </div>
                            <div className="about__faq--desc">
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. 
                            </div>
                        </div>
                    </div>
                    <div className="about__faq--1">
                        <div className="about__faq--img">
                            <img src={img2} alt="icon" />
                        </div>
                        <div>
                            <div className="about__faq--title">
                                2. Activation
                            </div>
                            <div className="about__faq--desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </div>
                        </div>
                    </div>
                    <div className="about__faq--1">
                        <div className="about__faq--img">
                            <img src={img3} alt="icon" />
                        </div>
                        <div>
                            <div className="about__faq--title">
                                3. Retention
                            </div>
                            <div className="about__faq--desc">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    );
}
 
export default About;