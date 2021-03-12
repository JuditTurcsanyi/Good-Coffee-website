import React from 'react';
import home1 from '../img/home1.png';
import {motion} from 'framer-motion';
import {About, Description, Image, Hide} from '../styles';
import {titleAnim, fade, photoAnim, scrollReveal} from "../pages/animation";
import Wave from './Wave';
import {useScroll} from './useScroll';


const AboutSection = () => {
    const [element, controls] = useScroll();
    return(
        <About variants={scrollReveal} ref={element} animate={controls} initial="hidden">
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</motion.p>
                <motion.button variants={fade}>Contact us</motion.button>
            </Description>
           <Image>
                <motion.img variants={photoAnim} src={home1} alt="guy with a camera"/>
            </Image> 
            <Wave />
        </About>
    )
}





export default AboutSection;