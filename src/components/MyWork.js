import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Divider from './Divider'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import img1 from '../Img/photographer (1).jpg'
import img2 from '../Img/photographer (2).jpg'
import img3 from '../Img/photographer (3).jpg'
import img4 from '../Img/photographer (4).jpg'
import img5 from '../Img/ui-ux (1).jpg'
import img6 from '../Img/ui-ux (2).jpg'
import img7 from '../Img/ui-ux (3).jpg'
import img8 from '../Img/ui-ux (4).jpg'
import img9 from '../Img/freelancer (1).jpg'
import img10 from '../Img/freelancer (2).jpg'
import img11 from '../Img/freelancer (3).jpg'
import img12 from '../Img/freelancer (4).jpg'
function MyWork() {
    useEffect(()=>{
    document.querySelectorAll(".filter-projects ul li").forEach(
        ele => ele.addEventListener("click", ()=> {
            document.querySelectorAll(".filter-projects ul li").forEach(ele => ele.classList.remove("active"))
            ele.classList.add("active")}
        ))
    })
    function Gallery({to, srcImg}){
        const projects =[
            {
                heading: "Small",
                srcImg: img1,
                sort: "all photographer"
            },
            {
                heading: "eye",
                srcImg: img2,
                sort: "all photographer"
            },
            {
                heading: "Green",
                srcImg: img3,
                sort: "all photographer"
            },
            {
                heading: "Basic",
                srcImg: img4,
                sort: "all photographer"
            },
            {
                heading: "Foodie",
                srcImg: img5,
                sort: "all ux"
            },
            {
                heading: "Num",
                srcImg: img6,
                sort: "all ux"
            },
            {
                heading: "Zed",
                srcImg: img7,
                sort: "all ux"
            },
            {
                heading: "Bure",
                srcImg: img8,
                sort: "all ux"
            },
            {
                heading: "Neo",
                srcImg: img9,
                sort: "all freelancer"
            },
            {
                heading: "Morie",
                srcImg: img10,
                sort: "all freelancer"
            },
            {
                heading: "Sanwe",
                srcImg: img11,
                sort: "all freelancer"
            },
            {
                heading: "Pro Shop",
                srcImg: img12,
                sort: "all freelancer"
            },
        ]
        function Project({heading, img}){
            const [hover, setHover] = useState(false)
            return(
            <Col md={4}>
                <div className="project" >
                    <div className='onhover' style={{opacity: `${hover? "1" : "0"}`}}
                        onMouseEnter={()=>setHover(true)}
                        onMouseLeave={()=>setHover(false)}
                    >
                        <a href="#" className="link d-flex flex-column justify-content-center align-items-center">
                            <i className="fa fa-search"></i>
                            <h4>{heading}</h4>
                            <p>Lorem Ipsum is simply dummy text </p>
                        </a>
                    </div>
                    <img src={img}/>
                </div>
            </Col>
            )
        }
        return(
            <Router>
                <div className="gallery">
                <Row>
                    <Col lg={12} className="gallery-heading">
                        <h2>MY WORK</h2>
                    </Col>
                    <Col md={12}>
                        <div className="filter-projects">
                            <ul className="list-unstyled d-flex align-items-center justify-content-center">
                                <li className="active">
                                    <Link to="/protfolio">All</Link>
                                </li>
                                <li>
                                    <Link to="/protfolio/ux-ui">UX /UI</Link>
                                </li>
                                <li>
                                    <Link to="/protfolio/photographer">Photographer</Link>
                                </li>
                                <li>
                                    <Link to="/protfolio/freelancer">Freelancer</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className="projects">
                            <Row>
                                <Switch>
                                    <Route exact path="/protfolio">
                                        {projects.map(project => (
                                            <Project 
                                                heading={project.heading}
                                                img={project.srcImg}
                                            />
                                        ))}
                                    </Route>
                                    <Route exact path="/protfolio/ux-ui">
                                            {projects.filter(name => name.sort.includes('ux')).map(project => (
                                            <Project 
                                                heading={project.heading}
                                                img={project.srcImg}
                                            />
                                        ))}
                                    </Route>
                                    <Route exact path="/protfolio/photographer">
                                            {projects.filter(name => name.sort.includes('photographer')).map(project => (
                                            <Project 
                                                heading={project.heading}
                                                img={project.srcImg}
                                            />
                                        ))}
                                    </Route>
                                    <Route  exact path="/protfolio/freelancer">
                                            {projects.filter(name => name.sort.includes('freelancer')).map(project => (
                                            <Project 
                                                heading={project.heading}
                                                img={project.srcImg}
                                            />
                                        ))}
                                    </Route>
                                </Switch>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
            </Router>
        )
    }
    return (
        <div className="my-work">
            <Container>
                <Row>
                    <Col lg={12}>
                        <Divider cy={100}/>
                    </Col>
                    <Col lg={12}>
                        <Gallery />
                    </Col>
                    <Col lg={12}>
                        <Divider cy={7} />
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default MyWork
