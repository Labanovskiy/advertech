import logo from './../../img/Header/Favicon.svg'
import arrowR from './../../img/Header/fi-sr-arrow-small-right 1.svg'
import './header.css'

function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logo} alt="logo" />
                        <span>Logo</span>
                    </div>
                    <div className="header__nav">
                        <ul>
                            <li><a href="#!">Home</a></li>
                        </ul>
                        <ul>
                            <li><a href="#!">About</a></li>
                        </ul>
                        <ul>
                            <li><a href="#!">Services</a></li>
                        </ul>
                        <ul>
                            <li><a href="#!">Company</a></li>
                        </ul>
                        <ul>
                            <li><a href="#!">Blog</a></li>
                        </ul>
                        <ul>
                            <li><a href="#!">Contact</a></li>
                        </ul>
                    </div>
                    <div className="header__btn">
                        <a href="#!">
                            <span>Get Started</span>
                            <img src={arrowR} alt="arrow" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;