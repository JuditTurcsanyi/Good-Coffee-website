import React from 'react';
import {motion} from 'framer-motion';
import coffee from "../img/coffee.svg";
import coffeemachine from "../img/coffeemachine.jpeg";
import {About, Description, Image} from '../styles';
import styled from 'styled-components';
import {scrollReveal, photoAnim} from '../pages/animation';
import {useScroll} from './useScroll';

const IngredientsSection = () => {
    const [element, controls] = useScroll();
    return (
        <Ingredients variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <Description>
                <h2> High <span>quality</span> ingredients</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={coffee} alt="icon"/>
                            <h3>Arabica</h3>
                        </div> 
                        <p>Smooth, sweet taste.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={coffee} alt="icon"/>
                            <h3>Teamwork</h3>
                        </div> 
                        <p>Three best friends working together efficiently.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={coffee} alt="icon"/>
                            <h3>Made with Love</h3>
                        </div> 
                        <p>We make the coffee that we like to drink.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={coffee} alt="icon"/>
                            <h3>Affordable</h3>
                        </div> 
                        <p>Get a free coffee after every 10 coffee you buy here.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={coffeemachine} alt="coffeemachine "/>
            </Image>
        </Ingredients>
    );
};

const Ingredients = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px) {
        justify-content: center;
    }
`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
        img {
            width: 2.5rem;
            fill: var(--coffee_green);
        }
        h3 {
            margin-left: 1rem;
            background:white;
            color:black;
            padding: 1rem;
            opacity: 0.75;
        }
    }
`;

export default IngredientsSection;