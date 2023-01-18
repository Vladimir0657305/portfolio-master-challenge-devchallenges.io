import React, { useContext, useEffect, useState } from 'react';
import { stack as HamburgerMenu } from 'react-burger-menu';
import './MenuBurger.scss';
import Menu from './SiteMenu';
import { Link } from "react-scroll";

let windowWidth = window.innerWidth;
console.log(windowWidth);
// ======================================================================



const MyContext = React.createContext();

// create the provider
const MyProvider = (props) => {
    const [menuOpenState, setMenuOpenState] = useState(false);

    return (
        <MyContext.Provider value={{
            isMenuOpen: menuOpenState,
            toggleMenu: () => setMenuOpenState(!menuOpenState),
            stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

// create a button that calls a context function to set a new open state when clicked
const HamburgerButton = () => {
    const ctx = useContext(MyContext)
    return (
        <div onClick={ctx.toggleMenu} className='HamburgerButton'>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

// create a navigation component that wraps the burger menu
const Navigation = () => {
    const ctx = useContext(MyContext)

    return (
        <HamburgerMenu
            // className="hamburger-menu__item"
            right
            // noOverlay
            width={'100%'}
            // itemListElement="div"
            customBurgerIcon={false}
            isOpen={ctx.isMenuOpen}
            onStateChange={(state) => ctx.stateChangeHandler(state)}
        >
            {/* <a className="menu-item" href="section0">Home</a>
            <a className="menu-item" href="section1">Features</a>
            <a className="menu-item" href="section2">Services</a>
            <a className="menu-item" href="section3">Portfolio</a>
            <a className="menu-item" href="section4">Contacts</a> */}
            
            <Link
                activeClass='activeLink'
                to={`section0`}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={ctx.toggleMenu}
                // onSetActive={() => setActiveLink(true)}
            >
                <span className='hamburger-span'>Home</span>
            </Link>

            <Link
                activeClass='activeLink'
                to={`section1`}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={ctx.toggleMenu}
                // onSetActive={() => setActiveLink(true)}
            >
                <span>Features</span>
            </Link>

            <Link
                activeClass='activeLink'
                to={`section2`}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={ctx.toggleMenu}
                // onSetActive={() => setActiveLink(true)}
            >
                <span>Services</span>
            </Link>

            <Link
                activeClass='activeLink'
                to={`section3`}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={ctx.toggleMenu}
                // onSetActive={() => setActiveLink(true)}
            >
                <span>Portfolio</span>
            </Link>

            <Link
                activeClass='activeLink'
                to={`section4`}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={ctx.toggleMenu}
                // onSetActive={() => setActiveLink(true)}
            >
                <span>Contscts</span>
            </Link>

        </HamburgerMenu>
    )
}



export default function MenuBurger() {
    return(
        <>
        {/* windowWidth > 767 && */}
            
            <MyProvider>
                <div>
                    
                    {
                        windowWidth > 767 && <Menu />
                    }
                    {
                        windowWidth < 767 && <HamburgerButton className='HamburgerButton' />
                    }
                    {/* <Menu /> */}
                    <Navigation />
                    {/* {
                        windowWidth > 767 && <Menu />
                    } */}
                    
                </div>
            </MyProvider>

        </>
    );
}