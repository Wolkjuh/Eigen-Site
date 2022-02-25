import React from 'react'
import './footer.css'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Bart van Wijk</a>

      <ul className="permaLinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">Over Mij</a></li>
        <li><a href="#experience">Vaardigheden</a></li>
        <li><a href="#services">Diensten</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Reviews</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/bartvwijkzk/"><BsLinkedin /></a>
        <a href="https://www.instagram.com/lawolk/"><BsInstagram /></a>
        <a href="https://twitter.com/WolkenVacht"><BsTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Bart van Wijk. All right reserved.</small>
      </div>

    </footer>
  )
}

export default Footer