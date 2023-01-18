import React, { useEffect, useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { Link } from "react-scroll";
import * as Scroll from 'react-scroll';
import './SiteMenu.scss';

let scroll = Scroll.animateScroll;

const menuData = ['Home', 'Features', 'Services', 'Portfolio', 'Contacts']

export default function Menu() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeLink, setActiveLink] = useState(false);
    const r = document.querySelectorAll('.menu a');

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const handleClick = (index) => {
        setActiveIndex(index);
    }

    useEffect(() => {
        let timer1 = 0;
        for (let i = 0; i < r.length; i++) {
            if (r[i].classList.value === 'activeLink')
                timer1 = setTimeout(() => {
                    setActiveIndex(prev => i);
                }, 100);
        }

        const timer2 = setTimeout(() => {
            setActiveLink(false);
        }, 200);
        return (() => {
            clearTimeout(timer1)
            clearTimeout(timer2)
        })
    }, [activeLink])

    return (
        <>
            <header>
                <div className='menuContainer'>
                    <div className='header'>
                        <div className='menu-logo' onClick={scrollToTop}>
                            <img src="../images/logo-coffee.jpg" alt="" />
                        </div>
                        <AnimateSharedLayout>
                            <div className='menu'>

                                {
                                    menuData.map((item, index) => (
                                        <Link
                                            key={index}
                                            activeClass='activeLink'
                                            to={`section${index}`}
                                            spy={true}
                                            smooth={true}
                                            offset={0}
                                            duration={500}
                                            onSetActive={() => setActiveLink(true)}
                                        >
                                            <motion.div className='menuItem' onClick={handleClick} initial={{ color: '#000' }} animate={{ color: activeIndex === index ? 'rgb(255, 0, 0)' : '#000' }}>
                                                {
                                                    activeIndex === index &&
                                                    <motion.div
                                                        className='activeItem'
                                                        layoutId="activeItem"
                                                    />
                                                }
                                                <span>{item}</span>
                                            </motion.div>
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

function ActiveLine() {
    return (
        <motion.div
            className='activeItem'
            layoutId="activeItem"
        />
    );

}