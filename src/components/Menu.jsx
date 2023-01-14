import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Menu.scss';

const menuData = ['Home', 'About us', 'Services', 'Portfolio', 'Contacts']

export default function Menu() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <header>
                <div className='container'>
                    <div className='header'>
                        <div className='menu-logo'>
                            <img src="../images/logo-coffee.jpg" alt="" />
                        </div>

                        <div className='menu'>
                            {
                                menuData.map((item, index) => (
                                    <MenuItem 
                                    key={item}
                                    item={item}
                                    isSelected={activeIndex ===  index}
                                    handleClick={() => setActiveIndex(index)}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
}

function MenuItem (props) {
    const {
        item,
        isSelected,
        handleClick = Function.prototype
    } = props;

    return(
        <motion.div className='menuItem' onClick={handleClick} initial={{color: '#000'}} animate={{ color: isSelected ? 'rgb(255, 0, 0)' : '#000' }}>
            <span>{item}</span>
        </motion.div>
    );
}