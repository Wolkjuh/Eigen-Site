import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Wat Heb Ik Te Bieden</h5>
      <h2>Diensten</h2>

    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>Bronze</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className='service__list_icon' />
            <p>#SOON</p>
          </li>
        </ul>
      </article>

        {/* ================== Einde Basispakket ================== */}

      <article className="service">
        <div className="service__head">
          <h3>Diamond</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className='service__list_icon' />
            <p>#SOON</p>
          </li>
        </ul>
      </article>

        {/* ================== Einde Premiumpakket ================== */}

      <article className="service">
        <div className="service__head">
          <h3>Silver</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className='service__list_icon' />
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