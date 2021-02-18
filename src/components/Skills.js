import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProgressBar from 'react-bootstrap/ProgressBar'
function Skills() {
    /* Icon Comp */
    function Skill({iconName,skillName}){
        return(
            <div className="skill text-center">
                {/* Icon Name */}
                <i className={`fa fa-${iconName} icon`}></i>
                <h4>{skillName}</h4>
            </div>
            
        )
    }
    /* Progress Copm */
    function ProgressSkill({skillName, now}){
        return(
            <div className="skill-progress">
                <div className="d-flex justify-content-between align-items-center">
                    <h6>{skillName}</h6>
                    <span>{now}%</span>
                </div>
                <ProgressBar now={now} />
            </div>
        )
    }
    return (
        <div className="skills">
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col lg={5}>
                        <div className="content-left">
                        <div className="heading d-md-flex align-items-center d-none">
                                <span className="hr"></span>
                                <span>My Skills</span>
                            </div>
                            <div className="content">
                                <h2>What My Design <br />Skills included</h2>
                                <p>
                                    Thes are words we live by in everything  we do. Every story we tell, ecery brand we build, and every interaction we create must only look beautiful
                                </p>
                            </div>
                            <div className="myProgress">
                                <ProgressSkill skillName="PHOTOSHOP" now="80" />
                                <ProgressSkill skillName="ILLUSRTRATOR" now="90"/>
                                <ProgressSkill skillName="SKETCH" now="70"/>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Row className="right">
                            <Col sm={12} md={true}>
                                <Col>
                                    <Skill 
                                        iconName="palette"
                                        skillName="UI / UX design"
                                    />
                                </Col>
                                <Col>
                                    <Skill 
                                        iconName="pen"
                                        skillName="Graphic Design"
                                    />
                                </Col>
                                </Col>
                            <Col sm={12} md={true}>
                                <Col>
                                    <Skill 
                                        iconName="object-ungroup"
                                        skillName="Motion Graphic"
                                    />
                                </Col>
                                <Col>
                                    <Skill 
                                        iconName="photo-video"
                                        skillName="Photo Retouch"
                                    />
                                </Col>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Skills
