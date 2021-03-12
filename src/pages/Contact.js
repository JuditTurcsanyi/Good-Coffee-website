import React from 'react';
import GoogleMap from '../components/Map'
import {motion} from 'framer-motion';
import {pageAnimation, fade} from "./animation";
import styled from 'styled-components';
import ScrollTop from '../components/ScrollTop';

const Contact = () => {
    return (
        <ContactStyle exit="exit" variants={pageAnimation} initial="hidden" animate="show" style={{background: "#fff"}}>
            <Wrapper>
            <div>
            <Title>
                <Hide>
                    <motion.h2 variants={fade} >Address</motion.h2>
                </Hide>
            </Title>
            <Info variants={fade}>
                <p>487 5th Ave, Brooklyn</p>
                <p>NY 11215, United States</p>
            </Info>
            <Title>
                <Hide>
                    <motion.h2 variants={fade} >Open hours</motion.h2>
                </Hide>
            </Title>
            <Info variants={fade}>
                <Day>
                    <p>Sunday</p>
                    <p>12–8PM</p>
                </Day>
                <Day>
                    <p>Monday</p>
                    <p>12–8PM</p>
                </Day>
                <Day>
                    <p>Tuesday</p>
                    <p>12–8PM</p>
                </Day>
                <Day>
                    <p>Wednesday</p>
                    <p>12–8PM</p>
                </Day>
                <Day>
                    <p>Thursday</p>
                    <p>12–8PM</p>
                </Day>
                <Day>
                    <p>Friday</p>
                    <p>12–9PM</p>
                </Day>
                <Day>
                    <p>Saturday</p>
                    <p>12–9PM</p>
                </Day>
            </Info>
            </div>
            <MapWrapper>
                <GoogleMap />
            </MapWrapper>
            </Wrapper>
        <ScrollTop />
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
    color: #1a1a1a;
    min-height: 90vh;
    @media (max-width: 1500px) {
        padding: 2rem;
        font-size: 1rem;
    }
`;

const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
    @media (max-width: 1500px) {
        padding-top: 5rem;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Wrapper = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    width: 100vw;
`
const MapWrapper = styled(motion.div)`
    width: 50vw;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Info = styled(motion.div)`
    display: flex;
    flex-direction: column;
    p {
        padding: 0;
        color: #1a1a1a;
    }
`;

const Day = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
        padding: 0;
        color: #1a1a1a;
    }
`

export default Contact;