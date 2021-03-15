import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import {AnimateSharedLayout} from 'framer-motion';
import {useScroll} from './useScroll';
import {scrollReveal} from '../pages/animation';

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
      <h2>
        <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
      <Toggle title="What kind of milk options do you have?">
        <div className="answer">
          <p>
            We have almond milk, coconut milk, soy milk and beef milk.
          </p>
        </div>
      </Toggle>
      <Toggle title="When is the Pumpkin Spice Latte available?">
        <div className="answer">
          <p>
            We make Pumpkin Spice Latte all year!
          </p>
        </div>
      </Toggle>
      <Toggle title="Do you have decaf option?">
        <div className="answer">
          <p>
            Yes!
          </p>
        </div>
      </Toggle>
      <Toggle title="Do you have some coffee merch?">
        <div className="answer">
          <p>
            We are working on it.
          </p>
        </div>
      </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.5rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
