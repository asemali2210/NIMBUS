import Nav from "../components/Nav";
import Header from "../components/HeaderHome";
import Features from "../components/Features";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Divider from "../components/Divider"
import Footer from '../components/Footer'
function Home() {
  return (
      <div className="home">
      <Nav />
        <Header/>
        <Features />
        <Divider cy={100} />
        <AboutMe />
        <Divider cy={7} />
        <Skills />  
        <Footer />
    </div>
  );
}

export default Home;
