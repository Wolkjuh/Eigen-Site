import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Welke Vaardigheden Heb Ik</h5>
      <h2>Mijn Vaardigheden</h2>

      <div className="container experience__container">

       {/* ================== FRONTEND ==================  */}

        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Ervaren</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Bekwaam</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Bekwaam</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Beginnend</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>

       {/* ================== BACKEND ==================  */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Ervaren</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>PHP OOP</h4>
                <small className='text-light'>Bekwaam</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Bekwaam</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Bekwaam</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Ruby</h4>
                <small className='text-light'>Beginnend</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience