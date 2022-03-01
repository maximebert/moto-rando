import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import Login from "../Login/Login";
import logo from '../../assets/images/logo-white.png';
import './header.scss';
import {BiMenuAltRight} from 'react-icons/bi'
import {IoCloseCircleOutline} from "react-icons/io5";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        const handleRezise = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        window.addEventListener("resize", handleRezise);
        return () => window.removeEventListener('resize', handleRezise)
    }, [])

    // close menu when page is > 768
    useEffect(() => {
        if(size.width > 900 && menuOpen) {
            setMenuOpen(false)
        }
    }, [size.width, menuOpen])

    const menuToggleHandler = () => {
        setMenuOpen((menu) => !menu);
    }

    return (
        <header className='header'>
            <div className='header__content'>
                <NavLink to='/'>
                    <img className='header__content__logo' width='130px' height='100px' src={logo} alt='logo du site' />
                </NavLink>

            <nav className={`header__content__nav ${menuOpen ? 'isMenu' : ''}` }>
                <ul className='header_list'>
                    <li>
                        <NavLink className={({ isActive }) => `header_link ${isActive ? 'active' : '' }`} to='/'>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => `header_link ${isActive ? 'active' : '' }`} to='/itineraires'>
                            Listes des itinéraires
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => `header_link ${isActive ? 'active' : '' }`} to='/equipe'>
                            L'equipe
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => `header_link ${isActive ? 'active' : '' }`} to='/inscription'>
                            Inscription
                        </NavLink>
                    </li>
                    <Login />
                </ul>
            </nav>
                <div className='header__content__toggle'>
                    { !menuOpen ? <BiMenuAltRight onClick={menuToggleHandler} /> : <IoCloseCircleOutline onClick={menuToggleHandler} />}
                </div>
            </div>
        </header>
    )
}

export default React.memo(Header)
