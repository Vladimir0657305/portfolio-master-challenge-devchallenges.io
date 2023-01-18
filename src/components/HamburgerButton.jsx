import React, { useContext } from 'react';

import { MyContext } from '../App';
import './HamburgerButton.scss';

export default function HamburgerButton() {

    // const [isMenuOpen] = useContext(MyContext);

    const clickHandler = () => {
        toggleMenuMode();
    };

    return(
        <>
            <MenuButton 
                // className={isMenuOpen ? 'active menuButton' : 'menuButton'} 
                className='menuButton' 
                aria-label="Открыть главное меню"
                onClick={clickHandler}
            >
                <Bar className='bar' />
                <Bar className='bar' />
                <Bar className='bar' />
            </MenuButton>
        </>
    );
}