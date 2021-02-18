import React, {useEffect} from "react-dom"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BgPattren from './BgPattren'
function Features() {
    /* Feature comp */
    function Feature({featName, description, colorIcon, iconBgColor, to}) {
        return (
            <div className="feature d-flex align-items-center justify-content-center flex-column text-center">
                <i className="fa fa-check icon-1"
                /* Icon style */
                    style={{color: `${colorIcon}`,
                                background: `${iconBgColor}`
                            }}
                ></i>
                <div>
                    <h5>{featName}</h5>
                    <h6>{description}</h6>
                </div>
                <a href={to}>
                    <button className="btn">
                        <i className="far fa-long-arrow-alt-right icon-2"></i> 
                    </button>
                </a>
            </div>
        )
    }
    return (
        <div className="features">
            <BgPattren />
            <Container>
                <Row className="justify-content-around">
                    <Col md={12}sm={12} className="d-flex">
                        <Feature 
                            featName="UI / UX designer"
                            description="Creative website for you"
                            colorIcon="white"
                            iconBgColor="black"
                            to="/protfolio"
                        />
                    </Col>
                    <Col md={12}sm={12} className="d-flex justify-content-md-center ">
                        <Feature 
                            featName="Photographer"
                            description="Awsome photo & video"
                            colorIcon="white"
                            iconBgColor="#f9b429"
                            to="/protfolio"
                        />
                    </Col>
                    <Col md={12}sm={12} className="d-flex justify-content-md-end ">
                        <Feature 
                            featName="Freelancer"
                            description="You can hire me now"
                            colorIcon="black"
                            iconBgColor="#e6e6e6"
                            to="/protfolio"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}




export default Features
