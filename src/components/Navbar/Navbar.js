import './Navbar.css';
import hamburger from '../../images/icon-hamburger.svg';
import closeMenu from '../../images/icon-close-menu.svg';
import { useState } from 'react';
import reactDom from 'react-dom';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return <nav>
        {open
            ? reactDom.createPortal(
                < div className='navbar__container'>
                    <img className='navbar__button--close' onClick={() => { setOpen(false) }} src={closeMenu} alt='' />
                    <div className='navbar'>
                        <a href='#'>About</a>
                        <a href='#'>Discover</a>
                        <a href='#'>Get Started</a>
                    </div>
                </div>
                ,
                document.getElementById('portal__menu')
            )
            : <>
                <img className='navbar__button--open' onClick={() => {
                    setOpen(true)
                }} src={hamburger} alt='' />
                < div className=' navbar__container--desktop'>
                    <div className=' navbar--desktop'>
                        <a href='#'>About</a>
                        <a href='#'>Discover</a>
                        <a href='#'>Get Started</a>
                    </div>
                </div>
            </>
        }
    </nav>
}