import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fuwjz1y', 'template_dngxkbo', form.current, 'user_WWMTwPgUMlk03rBIYKadH')
  };


  return (
    <section id='contact'>
      <h5>Kom In Contact</h5>
      <h2>Contacteer Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>BartvWijkzk@outlook.com</h5>
            <a href="mailto:bartvwijkzk@outlook.com" target="_blank">Stuur me een mail</a>
          </article>

          <article className="contact__option">
            <BsLinkedin contact__option-icon/>
            <h4>LinkedIn</h4>
            <h5>Bart van Wijk</h5>
            <a href="https://www.linkedin.com/in/bartvwijkzk/" target="_blank">Stuur me een bericht</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp contact__option-icon/>
            <h4>Whatsapp</h4>
            <h5>#SOON</h5>
            <a href="https://api.whatsapp.com/send?phone=#SOON" target="_blank">Stuur me een bericht</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Je Volledige Naam..' required/>
          <input type="email" name="email" placeholder='Je Email..' required/>
          <textarea name="message" rows="7" placeholder='Je Bericht..' required></textarea>
          <button type="submit" className='btn btn-primary'>Stuur Bericht!</button>
        </form>


      </div>

    </section>
  )
}

export default Contact