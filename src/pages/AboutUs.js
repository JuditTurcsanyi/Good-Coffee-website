import React from 'react';
import AboutSection from "../components/AboutSection";
import IngredientsSection from "../components/IngredientsSection";
import FaqSection from "../components/FaqSection";
import {motion} from 'framer-motion';
import {pageAnimation} from './animation';
import ScrollTop from '../components/ScrollTop';

const AboutUs = () => {
    return (
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
        <AboutSection />
        <IngredientsSection />
        <FaqSection />
    <ScrollTop />
    </motion.div>
    )
}

export default AboutUs;