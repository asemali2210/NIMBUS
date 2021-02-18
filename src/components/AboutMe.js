import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import secImage from '../Img/firstImg.png'
function AboutMe() {
    /* apps links  copm*/
    function FollowApps({appName, bgColor, color,iconName}){
        return(
        <a href="#" className="app d-flex align-items-center"
        /* icon and text style */
        style={{
            background: `${bgColor}`,
            color: `${color}`
        }}>
        <i className={`fab fa-${iconName} icon`}></i>
        <span >{appName}</span>
        </a>
    )
    }
    return (
        <div className="about-me">
            <Container >
                <Row className="align-items-center">
                    <Col lg={7}>
                        <div className="img-left d-flex justify-content-center">
                            <img src={secImage} className="img-fluid"  />
                            <div className="text">
                                <span className="d-block">Who </span>
                                <span>I Am</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="right">
                            <div className="heading d-md-flex align-items-center d-none">
                                <span className="hr"></span>
                                <span>about me</span>
                            </div>
                            <div className="content text-lg-left text-center">
                                <h2>Need CreativeDesign? <br />
                                    I can Help You!
                                </h2>
                                <p>
                                    Product Designer and Digital creative worrking in design field for 13 years so far, specialized, Vranding and digital design. These are the words we live by every interaction we create must not only look beautiful. too
                                </p>
                                <div className="follow-apps">
                                    <h5 className="text-center">You Can Follow Me also Here</h5>
                                    <div className="d-flex justify-content-center">
                                    <FollowApps 
                                        appName="BEHANCE"
                                        color="#1567f8"
                                        iconName="behance-square"
                                    />
                                    <FollowApps 
                                        appName="DRIBBBLE"
                                        color="#ea4788"
                                        iconName="dribbble-square"
                                    />
                                    <FollowApps 
                                        appName="INSTA"
                                        color="#f9b429"
                                        iconName="instagram"
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutMe
