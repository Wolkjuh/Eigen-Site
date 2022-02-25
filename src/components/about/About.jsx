import React from 'react'
import './about.css'
import ME from '../../assets/Me_normal.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Krijg meer over me te weten</h5>
      <h2>Over mij</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Ervaring</h5>
              <small>2+ Jaar</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Klanten</h5>
              <small>3+</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projecten</h5>
              <small>6 Compleet</small>
            </article>

          </div>
            <p>
              Mijn naam is Bart van Wijk en ik ben 16 jaartjes jong. <br />
              Ik ben freelancer op het gebied van web development maar sta in de avond achter de bar bij de Griek. <br />
              <br />
              Ik doe een versnelde opleiding (MBO 4 Software Developer) en heb de ambitie om door te gaan naar het HBO. <br />
              Ik ben nog op zoek naar een stageplek voor mijn versnelde opleiding. <br />
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About