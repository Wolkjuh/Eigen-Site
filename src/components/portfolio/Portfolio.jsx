import React from 'react'
import './portfolio.css'
import SOON from '../../assets/soon.jpg'

const data = [

  {
    id: 1,
    image: SOON,
    title: '#SOON',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 2,
    image: SOON,
    title: '#SOON',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 3,
    image: SOON,
    title: '#SOON',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 4,
    image: SOON,
    title: '#SOON',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 5,
    image: SOON,
    title: '#SOON',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 6,
    image: SOON,
    title: '#SOON',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mijn Recente Werk</h5>
      <h2>Portfolio</h2>

      


      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target="_blank">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>

    </section>
  )
}

export default Portfolio