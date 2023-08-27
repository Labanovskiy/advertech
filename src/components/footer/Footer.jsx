import React, { useState } from 'react';
import axios from 'axios';
import './footer.css'
import imgHouse from './../../img/Footer/fi-sr-home 1.png'
import imgArr from './../../img/Header/fi-sr-arrow-small-right 1 white.svg'

const Footer = () => {
    const url = "https://api.byteplex.info/api/test/contact/"
    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    })

    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            name: data.name,
            email: data.email,
            message: data.message
        })
        .then(res =>{
            console.log(res.data)
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }
    return ( 
        <section>
            <div className="footer">
                    <div className="footer_name">Contact us</div>
                    <div className="footer__title">Have an prject in mind?</div>
                    <div className="footer__desc">The right move at the right time saves your investment.<br></br> live the dream of expanding your business.</div>
                    <div className="contacts">
                        <div className="adress">
                            <div className="adress__adress">
                                <img src={imgHouse} alt="house" />
                                <span>Corporation</span>
                            </div>
                            <div className="adress__house">
                                4517 Washington Ave. <br></br>
                                Manchester, Kentucky 39495
                            </div>
                            <div className="adress__phone">
                                <a href="callto:(239) 555-0108">(239) 555-0108</a>
                            </div>
                            <div className="adress__email">
                                <a href="mailto:contact@company.com">contact@company.com</a>
                            </div>
                        </div>
                        <form onSubmit={(e) => submit(e)} className="form">
                            <div className="form__name">
                                <input onChange={(e) => handle(e)} id="name" value={data.name} type="text" placeholder='Name'/>
                            </div>
                            <div className="form__mail">
                                <input onChange={(e) => handle(e)} id="email" value={data.email} type="email" placeholder='Email'/>
                            </div>
                            <div className="form__massage">
                                <input onChange={(e) => handle(e)} id="message" value={data.message} type="text" placeholder='Message'/>
                            </div>
                            <div className="submit">
                                <button className="submit__btn">
                                    Send Message
                                    <img src={imgArr} alt="arrow" />
                                </button>
                                <span>By clicking contact us button, you agree our terms and policy.</span>
                            </div>
                        </form>
                    </div>
            </div>
        </section>
     );
}
 
export default Footer;