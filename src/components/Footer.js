import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '../Img/Logo.webp'
function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row className="text-md-left text-center">
                    <Col md={4} >
                        <div className="logo d-flex align-items-center justify-content-md-start justify-content-center">
                            <img src={Logo} />
                            <h4>NIMBUS</h4>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <h3>Follow Me :</h3>
                        <div className="social-links">
                            <ul className="row list-unstyled  justify-content-center justify-content-md-start">
                                <li className="col">
                                    <a href="#">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                </li>
                                <li className="col">
                                    <a href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li className="col">
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="col">
                                    <a href="#">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h2>Discover</h2>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/blog">Blog</a>
                            </li>
                            <li>
                                <a href="/protfolio">Protfolio</a>
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h2>Help</h2>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#">Terms</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
