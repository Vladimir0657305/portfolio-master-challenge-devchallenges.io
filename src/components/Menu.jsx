import React, { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { Link } from "react-scroll";
import * as Scroll from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import './Menu.scss';

let scroll = Scroll.animateScroll;

const menuData = ['Home', 'Features', 'Services', 'Portfolio', 'Contacts']

export default function Menu() {
    const [activeIndex, setActiveIndex] = useState(0);
    // const [activeLink, setActiveLink] = useState(0);
    const r = document.querySelector('.menu ');
    // console.log(r.classList);
    // r.classList.classSet("activeLink")
    // if(r.classList.contains('activeLink')) console.log('====>');
    // var elementClasses = r.classList;
    // console.log(r.childNodes.length);
    // r.classList.add('activeLink')

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const handleClick = (index) => {
        // console.log(events.target.classList);
        console.log(index);
        
        setActiveIndex(index);
    }

    const clickHandler = (event) => {
        // event.preventDefault();
        let t = event.target;
        // if (t.classList.contains('activeLink')) console.log('!!!!');
        console.log(t.classList);
        console.log(event);
            
        // return true;
    }

    return (
        <>
            <header>
                <div className='menuContainer'>
                    <div className='header'>
                        <div className='menu-logo' onClick={scrollToTop}>
                            <img src="../images/logo-coffee.jpg" alt="" />
                        </div>

                        <AnimateSharedLayout>
                            <div className='menu' onClick={clickHandler}>
                                {
                                    menuData.map((item, index) => (
                                        <Link
                                            // activeClass="activeLink"
                                            // activeClass={() => setActiveIndex(index)}
                                            activeClass='activeLink'
                                            to={`section${index}`}
                                            spy={true}
                                            smooth={true}
                                            offset={ index === 1 ? -150 : 0}
                                            duration={500}
                                            
                                        >
                                        
                                        <MenuItem
                                            key={item}
                                            item={item}
                                            isSelected={activeIndex === index}
                                            // handleClick={() => setActiveIndex(index)}
                                                handleClick={() => handleClick(index)}
                                        />

                                        </Link>

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
    // const scrollTo = (ind) => {
    //     scroll.scrollTo(ind);
    // };

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