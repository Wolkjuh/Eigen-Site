import React from 'react'
import './testimonials.css'
import AVATAR from '../../assets/guest.jpg'
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [

  {
    id: 1,
    image: AVATAR,
    naam: '#SOON',
    review: '#SOON',
  },
  {
    id: 2,
    image: AVATAR,
    naam: '#SOON',
    review: '#SOON',
  },
  {
    id: 3,
    image: AVATAR,
    naam: '#SOON',
    review: '#SOON',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews Van Klanten</h5>
      <h2>Reviews</h2>


      <Swiper className="container testimonials__container"
      modules={[Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
      {
        data.map(({id, image, naam, review}) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={AVATAR} alt="guest" />
              </div>
              <h5 className='client__name'>{naam}</h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
          )
        })
      }
      </Swiper>

    </section>
  )
}

export default Testimonials