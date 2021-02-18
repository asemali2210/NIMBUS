import React, {useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Divider from './Divider'
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css'
import BgPattren from './BgPattren'
function ContactForm() {
    /* setup int-tell */
        useEffect(()=>{
            const input = document.querySelector("#phone");
        intlTelInput(input);
        })
    return (
        <div className="contact-form">
            <BgPattren />
            <Container>
                <Row className="align-items-center">
                    <Col md={5}>
                        <div className="form-description text-center">
                            <Divider cy={100}/>
                                <h2>Get In Touch</h2>
                                <p>Lets sstart Your Project Now</p>
                            <Divider cy={7}/>
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className="form-container">
                            <form>
                                <Row className="d-flex flex-column align-items-center">
                                    <Col className="input-col" lg={8}>
                                        <input type="text" placeholder="Enter Your Name" />
                                    </Col>
                                    <Col className="input-col" lg={8}>
                                        <input type="Email" placeholder="Enter Your Email" />
                                    </Col>
                                    <Col className="input-tel" lg={8}>
                                        <div className="phon-number-country">
                                            <div className="country-select">
                                                <div className="iti-flag eg"></div>
                                            </div>
                                            <input type="tel" placeholder="Enter Your Phone" id="phone"/>
                                        </div>
                                    </Col>
                                    <Col className="text-area" lg={8}>
                                        <textarea row="8" col="50" placeholder="Massage"></textarea>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactForm
