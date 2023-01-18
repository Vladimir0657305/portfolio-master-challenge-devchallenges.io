import React, { useContext } from 'react';
import { MyContext } from '../App';
import './HamburgerButton.scss';

export default function HamburgerButton() {

    const clickHandler = () => {
        toggleMenuMode();
    };

    return (
        <>
            <MenuButton
                className='menuButton'
                aria-label="Открыть меню"
                onClick={clickHandler}
            >
                <Bar className='bar' />
                <Bar className='bar' />
                <Bar className='bar' />
            </MenuButton>
        </>
    );
}