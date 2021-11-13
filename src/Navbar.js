import React from 'react'
import Shortly from './images/logo.svg'
import {useState} from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from 'react-icons/ai'

function NavBar() {
    const [isActive, setActive] = useState("false");
    const [show, setShow] = useState('false')
    const ToggleClass = () => {
      setActive(!isActive); 
     };

     const HideMenu = () => {
         setShow(!show)
     }
    return (
        <nav>
            <div className="logos">
                <img src={Shortly} alt=''/>
                <a className='ham-burger' href="#url" onClick={()=> {ToggleClass(); HideMenu(); }}>
                {isActive ? <AiOutlineClose/> : <GiHamburgerMenu/> }
                </a>  
            </div>

            {show ? 
            <div className='navbar'>

                <ul className='navmenu'>
                    <li><a className='navitems' href="#url">Features</a></li>
                    <li><a className='navitems' href="#url">Pricing</a></li>
                    <li><a className='navitems' href="#url">Resources</a></li>
                </ul>

                <ul className='login'>
                    <li><a className='navitems'  href="#url">Login</a></li>
                    <li><button className='btnsignup'>Sign Up</button></li>
                </ul>

            </div> : null} 
        </nav>
    
    )
}
export default NavBar;