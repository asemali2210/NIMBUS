import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Card} from 'react-bootstrap'
import axios from 'axios'
import imgBlog from '../Img/img-blog-1.jpg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function BlogsContainer() {
    /*  Blogs API from JSONPLACEHOLDER  💚 */
    const [ Blog, setBlog ] = useState([])
    useEffect(() => {
        /* Fetch posts by axios */
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then( res => {
            setBlog(res.data)
        })
        .catch( err => {
            console.log(err.massage)
        })
    }, [])
    /* blogs component */
    function CardBlog({content, title,imgSrc, path}) {
        return (
                <Card className="card-blog">
                    <Card.Img variant="top" src={imgSrc} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{content}
                        </Card.Text>
                        <Link to={path} className="link">
                            <button className="btn-card d-flex align-items-center justify-content-between">
                                <span>Read more</span>
                                <span className="hover"></span>
                                <i className="fa fa-arrow-right"></i>
                            </button>
                        </Link>
                    </Card.Body>
                </Card>
        )
    }

    function Blogs(){
        /*  just fetch 30 blogs */
        return(
            <Row className="justify-content-between">
                {
                    Blog.map( cardBlog => (
                        cardBlog.title.length  <= 30? (
                            <Col md={6} lg={4} key={cardBlog.id}>
                            <CardBlog 
                        title={cardBlog.title}
                        content={cardBlog.body}
                        imgSrc={imgBlog}
                        path={`/blog/${cardBlog.id}`}
                        />
                        </Col>
                        ) : false
                    ))
                }
            </Row>
        )
    }
    /* open blog component */
    function ReadBlog({title, content}){
        /* scroll To Top on Blog Read */
        window.scrollTo(0, document.querySelector(".left-blogs").offsetTop - 100);
        return(
            <div className="read-blog">
                <h4>{title}</h4>
                <img  src={imgBlog}/>
                {/* Repeat posts which come from Jsonplaceholder caz posts are short 
                >> to make the blog contain many words   */}
                <p>{content.repeat(15)}</p>
            </div>
        )
    }
    return (
        /* Router to transition between blogs */
        <Router>
            <div className="blogs-container">
                <Container fluid={true}>
                    <Row>
                        <Col md={9} className="left-blogs justify-content-around">
                            <Switch>
                                {/* Run ReadBlog only if Path = window.loaction */}
                                {
                                    Blog.map((route, index) => (
                                        <Route exact path={`/blog/${route.id}`} key={index}>
                                            <ReadBlog title={route.title} content={route.body} />
                                        </Route>
                                    ))
                                }
                                {/* Run all Blogs  */}
                                <Route exact path="/blog">
                                    <Blogs />
                                </Route>
                            </Switch>
                        </Col>
                        <Col md={3}  className="right-heading-col text-truncate d-none d-md-block">
                            <h2>All Blogs</h2>
                            <ul className="list-unstyled weekly-popular">
                                {/* map all blogs heading*/}
                                {
                                    Blog.map(blog => (
                                        <li key={blog.id} className="text-nowrap ">
                                            <Link to={`/blog/${blog.id}`}  >{blog.title.length <= 30? blog.title : false}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Router>
    )
}

export default BlogsContainer;
