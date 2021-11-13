import React from 'react'
import ShortlyLogo from './images/logo-2.svg'
import Fb from './images/icon-facebook.svg'
import Insta from './images/icon-instagram.svg'
import Twit from './images/icon-twitter.svg'
import Pin from './images/icon-pinterest.svg'

function Footer() {
    return (
        <footer>
                <div className='footer-main'>
                <img className='footer-img' src={ShortlyLogo} alt="" />
         
                <ul>
                    <li><a className='heading' href="#url">Features</a></li>
                    <li><a href="#url">Link Shortening</a></li>
                    <li><a href="#url">Branded Links</a></li>
                    <li><a href="#url">Analytics</a></li>
                </ul>

                <ul>
                    <li><a className='heading' href="#url">Resources</a></li>
                    <li><a href="#url">Blog</a></li>
                    <li><a href="#url">Developers</a></li>
                    <li><a href="#url">Support</a></li>
                </ul>
       
                <ul>
                    <li><a className='heading' href="#url">Company</a></li>
                    <li><a href="#url">About</a></li>
                    <li><a href="#url">Our Team</a></li>
                    <li><a href="#url">Careers</a></li>
                    <li><a href="#url">Contact</a></li>
                </ul>
       
                <ul className='social'>
                    <li><img  src={Fb} alt="" /></li>
                    <li><img  src={Twit} alt="" /></li>
                    <li><img  src={Pin} alt="" /></li>
                    <li><img  src={Insta} alt="" /></li>
                </ul>
                
                </div>
                <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="#url">Frontend Mentor</a>. 
                Coded by <a className='kiran' href="#url">Kiran Mann</a>.
                </div>
        </footer>
    )
}

export default Footer;