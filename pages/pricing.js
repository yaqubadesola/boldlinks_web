import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import PricingStyleTwo from '../components/Pricing/PricingStyleTwo';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class Pricing extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                
                <PageBanner 
                    pageTitle="Our Pricing" 
                    BGImage="bg-four"
                />  

                <PricingStyleTwo />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default Pricing;