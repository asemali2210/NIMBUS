import React from 'react'
import img from '../Img/secImg.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BgPattren from './BgPattren'
function HeaderHome() {
    return (
        <div className="header-home">
        <BgPattren />
        <Container fluid={true}>
                <Row className="align-items-center">
                    <Col className="content text-md-left text-center"md={7}  sm={{order: 2}}>
                            <h3 className="name">Hi! I'm Ameli Nimbus -</h3>
                            <h4 className="job">UI / UX Designer</h4>
                            <p className="summry">Product Designer and Digital creative worrking in design field for 13 years so far, specialized, Vranding and digital design</p>
                            <div className="accounts d-md-flex ">
                                <div>
                                    <span className="d-block">Email:</span>
                                    <span className="d-block">nimbuse@e.g.com</span>
                                </div>
                                <div>
                                    <span className="d-block">Behance:</span>
                                    <span className="d-block">behance.net/nimbuse21</span>
                                </div>
                            </div>
                            <div className="button-contact">
                                <button className="cv"><a href="#">Download CV</a></button>
                                <button className="contact"><a href="#">Hire Me Now</a></button>
                            </div>
                        </Col>
                        <Col md={5} >
                            <div className="right-img d-flex justify-content-center">
                                <img src={img} className="img img-fluid"/>
                            </div>
                        </Col>
                </Row>
            </Container>
            </div>
    )
}

export default HeaderHome;
