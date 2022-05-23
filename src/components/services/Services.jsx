import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
// import {FaTimes} from 'react-icons/fa'

const Services = () => {
  return (
    <section id='services'>
      <h5>Wat Heb Ik Te Bieden</h5>
      <h2>Diensten</h2>

    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>#SOON</h3>
        </div>

        <ul className="service__list">
          <li>
            <p>#SOON</p>
          </li>
        </ul>
      </article>

        {/* ================== Einde Basispakket ================== */}

      <article className="service">
        <div className="service__head">
          <h3>Webapp</h3>
        </div>

        <ul className="service__list">
        <li>
            <BiCheck className='service__list_icon' />
            <p>Meerdere Pagina's</p>
          </li>
          <li>
            <BiCheck className='service__list_icon' />
            <p>HTML / CSS / JavaScript / PHP</p>
          </li>
          <li>
            <BiCheck className='service__list_icon' />
            <p>Responsive</p>
          </li>
          <li>
            <BiCheck className='service__list_icon' />
            <p>Database Inbegrepen</p>
          </li>
          <li>
            <BiCheck className='service__list_icon' />
            <p>Ontwerpingsmodellen</p>
          </li>
          <li>
            <BiCheck className='service__list_icon' />
            <p>Externe Verwerking (.pdf & .xlsl)</p>
          </li>
          <li>
            <button className="btn btn-primary">
              <a className='' href="#contact">
                € 17.00 / Uur
              </a>
            </button>
          </li>
        </ul>
      </article>

        {/* ================== Einde Premiumpakket ================== */}

      <article className="service">
        <div className="service__head">
          <h3>#SOON</h3>
        </div>

        <ul className="service__list">
          <li>
            <p>#SOON</p>
          </li>
        </ul>
      </article>

      {/* ================== Einde Mediumpakket ================== */}

    </div>

    </section>
  )
}

export default Services