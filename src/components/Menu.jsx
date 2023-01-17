import React, { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { Link, animateScroll as scroll } from "react-scroll";
import './Menu.scss';

const menuData = ['Home', 'Features', 'Services', 'Portfolio', 'Contacts']

export default function Menu() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <header>
                <div className='menuContainer'>
                    <div className='header'>
                        <div className='menu-logo'>
                            <img src="../images/logo-coffee.jpg" alt="" />
                        </div>

                        <AnimateSharedLayout>
                            <div className='menu'>
                                {
                                    menuData.map((item, index) => (
                                        <MenuItem
                                            key={item}
                                            item={item}
                                            isSelected={activeIndex === index}
                                            handleClick={() => setActiveIndex(index)}
                                        />
                                    ))
                                }
                            </div>
                        </AnimateSharedLayout>
                    </div>
                </div>
            </header>

        </>
    );
}

function MenuItem(props) {
    const {
        item,
        isSelected,
        handleClick = Function.prototype
    } = props;

    return (
        <motion.div className='menuItem' onClick={handleClick} initial={{ color: '#000' }} animate={{ color: isSelected ? 'rgb(255, 0, 0)' : '#000' }}>
            {
                isSelected && <ActiveLine />
            }
            <span>{item}</span>
        </motion.div>
    );
}

function ActiveLine() {
    return (
        <motion.div
            className='activeItem'
            layoutId="activeItem"
        />
    );

}