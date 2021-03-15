import React, {useState} from 'react';
import styled from "styled-components";
import {motion} from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';

const Toggle = ({children, title}) => {
    const [toggle, setToggle] = useState(false);
    return (
        <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
            <Header>
                <motion.h4 layout>{title} </motion.h4>
                <FontAwesomeIcon
                icon={toggle ? faChevronUp : faChevronDown}
                size="2x"
                color="var(--coffee_green)" />
            </Header>
            {toggle ? children : ""}
            <div className="faq-line"></div>            
        </motion.div> 
    )
}

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`

export default Toggle;