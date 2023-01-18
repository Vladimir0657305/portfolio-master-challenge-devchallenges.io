import React, { useContext, useEffect, useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { Link } from "react-scroll";
import * as Scroll from 'react-scroll';
// import { MenuContext } from './navState';
import './Menu.scss';

let scroll = Scroll.animateScroll;
let windowWidth = window.innerWidth;

const menuData = ['Home', 'Features', 'Services', 'Portfolio', 'Contacts']

export default function Menu() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeLink, setActiveLink] = useState(false);
    const r = document.querySelectorAll('.menu a');
    // const {isMenuOpen, toggleMenu} = useContext(MenuContext);
    console.log(window.innerWidth);
    // console.log(isMenuOpen, windowWidth < 767);
    // if(windowWidth < 767) toggleMenu(false);
    // console.log(isMenuOpen);
    
    
    // useEffect(() => { 
    //     windowWidth < 767 && toggleMenu(false);
    //     console.log(isMenuOpen);
    // }, [windowWidth < 767])

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const handleClick = (index) => {
        // console.log(events.target.classList);
        // console.log('INDEX=>',index);
        
        setActiveIndex(index);
    }

    useEffect(() => { 
        // r.map((item, i) => item.classList.value == 'activeLink' ? console.log('!=!=!=',i) : null)
        let timer1 = 0;
        
        for (let i = 0; i < r.length; i++) {
            if (r[i].classList.value === 'activeLink') 
                timer1 = setTimeout(() => {
                    setActiveIndex(prev => i);
                    // console.log('iiii=>',i);
                }, 100);
            // setActiveIndex(i);
        }
        const timer2 = setTimeout(() => {
            setActiveLink(false);
        }, 200);
        // setActiveLink(false);
        return (() => {clearTimeout(timer1)
            clearTimeout(timer2)
        })
        
    }, [activeLink])

    return (
        <>
            <header>
{
                    true &&


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
                                            // activeClass="activeLink"
                                            // activeClass={() => setActiveIndex(index)}
                                            activeClass='activeLink'
                                            // activeClass={setActiveLink(true)}
                                            to={`section${index}`}
                                            spy={true}
                                            smooth={true}
                                            // offset={ index === 1 ? -150 : 0}
                                            offset={0}
                                            duration={500}
                                            onSetActive={() => setActiveLink(true)}
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
}
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