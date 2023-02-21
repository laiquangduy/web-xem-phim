import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click,setClick]= useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    };
    window.addEventListener('resize', showButton)
    return ( <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo">
                FlexGO <i className='fab fa-typo3'/>
            </Link>

            <div className='memu-icon'>
                <i className={click ? 'fas fa-times' : "fas fa-bars"}/>
            </div>
            <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li className='nav-item'>
                      <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                      </Link>
                </li>
                <li className='nav-item'>
                      <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Catalog
                      </Link>
                </li>
                <li className='nav-item'>
                      <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Pricing plan
                      </Link>
                </li>
                <li className='nav-item'>
                      <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                        Help
                      </Link>
                </li>
                <li className='nav-item'>
                      <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign In
                      </Link>
                </li>
                
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}
        </div>
    </nav>
    </> );
}

export default Navbar;