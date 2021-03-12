import React from 'react';
import styled from 'styled-components';
import espresso from "../img/espresso.jpg";
import latte from "../img/latte.jpeg";
import pumpkin from "../img/pumpkin.jpg";
import {motion} from 'framer-motion';
import {pageAnimation,fade, photoAnim, lineAnim, slider, sliderContainer} from './animation';
import {useScroll} from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';

const OurProducts = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    
    return (
        <Products exit="exit" variants={pageAnimation} initial="hidden" animate="show" style={{background: "#fff"}}>
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Coffee>
                <motion.h2 variants={fade} >Coffee</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Hide>
                    <motion.img variants={photoAnim} src={espresso} alt="espresso"/>
                </Hide>
            </Coffee>
            <Coffee ref={element} variants={fade} animate={controls} initial="hidden">
                <h2>Coffee with Milk</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <img src={latte} alt="latte"/>
            </Coffee>
            <Coffee ref={element2} variants={fade} animate={controls2} initial="hidden">
                <h2>Pumpkin Spice Latte</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <img src={pumpkin} alt="PSL"/>
            </Coffee>
        <ScrollTop />
        </Products>
    );
};

const Products = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    @media (max-width: 1300px) {
        padding: 2rem 2rem;
    }
    h2 {
        padding: 1rem 0rem;
    }
`;

const Coffee = styled(motion.div)`
    padding-bottom: 10rem;
    .line {
        height: 0.5rem;
        background: var(--coffee_green);
        margin-bottom: 3rem;
    }
    img {
        width:100%;
        height: 70vh;
        object-fit: cover;\
    }
`;

const Hide = styled.div`
overflow: hidden;
`;

const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
background: #8effa0;
`;

export default OurProducts;