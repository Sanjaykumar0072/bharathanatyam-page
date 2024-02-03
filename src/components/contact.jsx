import React, { Component } from "react";
import Header from "./header";
import ContactForm from "./sub-components/contact-form";
import Footer from "./footer";
import ScrollToTop from "./sub-components/scroll-to-top";
import {Helmet} from "react-helmet";


class ContactUs extends Component {

    render() {

        return (
            <>
                <Helmet>
                <meta charSet="utf-8" />
                <title>Contact - Darshiini Dance School | Bharatanatyam | Classical Dance</title>
                <link rel="canonical" href="https://darshiinivs.com/contact" />
            </Helmet>
                <Header />
                <ScrollToTop />
                <div className="contactPage">
                    <ContactForm />

                </div>
                <Footer />
            </>
        );
    }
}

export default ContactUs;
