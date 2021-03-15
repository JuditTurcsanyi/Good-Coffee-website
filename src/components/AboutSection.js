import React from 'react';
import coffeeshop from '../img/coffeeshop.jpeg';
import {motion} from 'framer-motion';
import {About, Description, Image, Hide} from '../styles';
import {titleAnim, fade, photoAnim, scrollReveal} from "../pages/animation";
import Wave from './Wave';
import {useScroll} from './useScroll';
import {Link} from 'react-router-dom';


const AboutSection = () => {
    const [element, controls] = useScroll();
    return(
        <About variants={scrollReveal} ref={element} animate={controls} initial="hidden">
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>We have</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >the best <span>coffee</span> in the</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>world.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Good ideas start with great coffee.</motion.p>
                <Link to="/contact">
                    <motion.button variants={fade}>Visit us</motion.button>
                </Link>
            </Description>
           <Image>
                <motion.img variants={photoAnim} src={coffeeshop} alt="coffee shop"/>
            </Image> 
            <Wave />
        </About>
    )
}





export default AboutSection;