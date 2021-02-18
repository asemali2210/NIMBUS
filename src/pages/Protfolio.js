import React from 'react'
import Nav from '../components/Nav'
import MyWork from '../components/MyWork'
import PagesHeader from '../components/PagesHeader'
import Footer from '../components/Footer'
function Protfolio() {
    return (
        <div className="protfolio">
            <Nav />
            <PagesHeader pageName="Protfolio"/>
            <MyWork />
            <Footer />
        </div>
    )
}

export default Protfolio
