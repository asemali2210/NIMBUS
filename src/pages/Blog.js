import Nav from '../components/Nav'
import PagesHeader from '../components/PagesHeader'
import BlogsContainer  from '../components/BlogsContainer'
import Footer from '../components/Footer'
function Blog(){
    return(
        <div className="blogs"> 
            <Nav />
            <PagesHeader pageName="Blogs"/>
            <BlogsContainer />
            <Footer />
        </div>
    )
}
export default Blog;