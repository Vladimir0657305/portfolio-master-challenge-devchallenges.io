import React, { useContext, useState } from 'react';
import { stack as HamburgerMenu } from 'react-burger-menu';
import './MenuBurger.scss';
import Menu from './SiteMenu';
import { Link } from "react-scroll";

let windowWidth = window.innerWidth;
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
            right
            width={'100%'}
            customBurgerIcon={false}
            isOpen={ctx.isMenuOpen}
            onStateChange={(state) => ctx.stateChangeHandler(state)}
        >

            <Link
                activeClass='activeLink'
                to={`section0`}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={ctx.toggleMenu}
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
            >
                <span>Contscts</span>
            </Link>
        </HamburgerMenu>
    )
}

export default function MenuBurger() {
    return(
        <>
            <MyProvider>
                <div>
                    {
                        windowWidth > 767 && <Menu />
                    }
                    {
                        windowWidth < 767 && <HamburgerButton className='HamburgerButton' />
                    }
                    <Navigation />
                </div>
            </MyProvider>
        </>
    );
}