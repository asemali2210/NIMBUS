import React, {useEffect, useState} from 'react';
import Logo from '../Img/Logo.webp'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Nav() {
    const [scrollRange, setScrollRange] = useState(false);
    const [openNav, setOpenNav] = useState(false);
    /*  nav fixed on scroll*/
    const onScroll = () => {
        const nav = document.querySelector(".nav");
        window.scrollY > 200 ? setScrollRange(true) : setScrollRange(false)
    }
    useEffect(()=>{
        window.addEventListener("scroll", onScroll)
        return () =>{
            window.removeEventListener("scroll", onScroll)
        }
    }, [])
    return (
        /*  nav fixed on scroll*/
        <div className={`nav ${scrollRange? "navOnScroll" : ' '}`}>
                <div className="toggle-open d-lg-none d-block">
                    {/* change icon when toggle nav */}
                    <i  className={`fa fa-${openNav? "times" : "chevron-down"}`}
                        onClick={()=> openNav? setOpenNav(false) : setOpenNav(true)} >
                    </i>
                </div>
            <Container fluid={true}>
                <Row className="align-items-center justify-content-center">
                    <Col md={12} lg={2}>
                        <div className="logo d-flex align-items-center justify-content-center">
                            <img src={Logo}/>
                            <h4>NIMBUS</h4>
                        </div>
                    </Col>
                    {/* toggle when nav toggle  in different  screen size*/}
                    <Col className={`toggle-nav ${openNav? "d-block" : 'd-none d-lg-block' } `} md={12}  lg={10}>
                        <Row className="align-items-center justify-content-center">
                            <Col md={6}>
                        <nav className="links">
                            <ul className="row list-unstyled flex-md-row flex-column  text-center justify-content-around">
                                <li>
                                    <a href="/" className="link">Home</a>
                                </li>
                                <li>
                                    <a href="/blog" className="link">Blog</a>
                                </li>
                                <li>
                                    <a href="/protfolio" className="link">Protfolio</a>
                                </li>
                                <li>
                                    <a href="#" className="link">Shop</a>
                                </li>
                            </ul>
                        </nav>
                    </Col>
                    <Col md={3}>
                        <div className="social-links">
                            <ul className="row list-unstyled justify-content-center">
                                <li>
                                    <a href="#">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={2} xs={6}>
                        <button className="contact-btn">
                            <a href="/contact">Contact Me</a>
                        </button>
                        </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Nav;
