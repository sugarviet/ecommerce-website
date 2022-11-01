// import {Grid} from '@mui/material'
import {NavLink} from 'react-router-dom';
import {motion} from 'framer-motion'
function Header() {
    return (
        <nav className='navbar'>        
                    <NavLink to='home' style={{textDecoration: 'none', color: '#131e3b'}}>
                        <div className="nav-logo">
                            <div className="nav-logo-img">
                                <img src="https://raw.githubusercontent.com/codingwithmuhib/Maltimart-ecommerce/start-up/src/assets/images/eco-logo.png" alt="logo" />
                            </div>
                            <h4 className='nav-logo-name'>
                                Maltimart
                            </h4>
                        </div>
                    </NavLink>
              
                    <div className="nav-direction">
                        <ul className='nav-direction-list'>
                            <li className='nav-direction-list-item'>
                                <NavLink to='home' style={{textDecoration: 'none', color: 'black'}}>Home</NavLink>
                            </li>
                            <li className='nav-direction-list-item'>
                                <NavLink to='all' style={{textDecoration: 'none', color: 'black'}}>All</NavLink>
                            </li>
                            <li className='nav-direction-list-item'>
                                <NavLink to='about-us' style={{textDecoration: 'none', color: 'black'}}>About us</NavLink>
                            </li>
                            <li className='nav-direction-list-item'>
                                <NavLink to='/' style={{textDecoration: 'none', color: 'black'}}>Cart</NavLink>
                            </li>
                        </ul>
                    </div>
               
                    <div className="nav-profile">
                        <div className="nav-profile-icons">
                            <span>
                                <i class="ri-heart-line"></i>
                                <span className='badge'>1</span>
                            </span>
                            <span>
                                <i class="ri-shopping-cart-line"></i>
                                <span className='badge'>2</span>
                            </span>
                        </div>
                        <div>
                            <motion.img whileTap={{scale: 1.1}} className='nav-profile-avatar' src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-yellow-character-avatar-icon-image_2292190.jpg" alt="" />
                        </div>
                    </div>
               
            
        </nav>
    );
}

export default Header;