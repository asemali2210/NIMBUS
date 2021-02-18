import React from 'react'
import Nav from '../components/Nav'
import PagesHeader from '../components/PagesHeader'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
function Contact() {
    return (
        <div className="contact">
            <Nav />
            <PagesHeader pageName="Get In" />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Contact
