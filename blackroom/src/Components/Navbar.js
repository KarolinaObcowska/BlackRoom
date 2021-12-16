import React, {useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import {CgMenuLeft} from 'react-icons/cg'
import '../sass/layout/navbar.sass'
const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <nav className='main-nav' aria-label='Main navigation'>
            <div className='nav-wrapper'>
                {/* Mobile Navbar */}
            <div className='mobile-nav__links'>
                <CgMenuLeft 
                    className='mobile-nav__icon'
                    onClick={() => setOpen(!isOpen)}/>
                    {isOpen && (
                        <div className='mobile-nav__wrapper'>
                            <BrowserRouter>
                                <Link 
                                    className='mobile-nav__item' 
                                    to='#who'
                                    smooth
                                    onClick={() => setOpen(!isOpen)}
                                    >
                                    WHO WE ARE
                                </Link>
                                <Link 
                                    className='mobile-nav__item' 
                                    to='#exhibitions'
                                    smooth 
                                    onClick={() => setOpen(!isOpen)}
                                >
                                    OUR EXHIBITIONS
                                    </Link>
                                <Link 
                                    className='mobile-nav__item' 
                                    to='#rooms'
                                    smooth
                                    onClick={() => setOpen(!isOpen)}
                                >
                                    OUR ROOMS
                                </Link>
                                <Link 
                                    className='mobile-nav__item' 
                                    to='#contact'
                                    smooth
                                    onClick={() => setOpen(!isOpen)}
                                >
                                    CONTACT
                                </Link>
                            </BrowserRouter>
                        </div>
                    )}
            </div>
            <div className='logo'>
            <a href='#hero'>
            <span className='lineup'>BLAC</span>
                <span className='flip-text'>K</span>
                <span className='bold lineup'>ROOM</span> 
                </a>
            </div>
            {/* Desktop Navbar */}
            <div className='main-nav__list'>
                <BrowserRouter>
                <Link 
                    className='main-nav__item' 
                    to='#who'
                    smooth
                    >
                    WHO WE ARE
                </Link>
                <Link 
                    className='main-nav__item' 
                    to='#exhibitions'
                    smooth 
                >
                    OUR EXHIBITIONS
                    </Link>
                <Link 
                    className='main-nav__item' 
                    to='#rooms'
                    smooth
                >
                    OUR ROOMS
                </Link>
                <Link 
                    className='main-nav__item' 
                    to='#contact'
                    smooth
                >
                    CONTACT
                </Link>
                </BrowserRouter>
            </div>
            </div>
        </nav>
    )
}

export default Navbar
