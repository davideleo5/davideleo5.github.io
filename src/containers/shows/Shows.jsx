import React from 'react';
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import './shows.css';

const Shows = () => {
  const { ref, inView } = useInView({
    triggerOnce: true
  });

  return (
    <div id='shows' className='home-shows-container container text-align-center'>
      <div ref={ref} className={`shows-content section__padding ${inView ? 'slide-in-fwd-center' : ''}`}>
        <h2 className='shows-coming-soon-title'>Prossimi spettacoli</h2>
        <br />
        <p>Teatro Carani - Sassuolo</p>
        <p>2 e 3 novembre 2025</p>
        <br />
        <p>Non perderti le prossime repliche del nostro musical!</p>
        <p>Ti aspettiamo per un’esperienza unica di musica, emozioni e spettacolo.</p>
        <Link to='/spettacoli' className='button-link'>Scopri di più</Link>
      </div>
    </div>
  )
}

export default Shows
