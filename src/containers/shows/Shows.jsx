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
        <p>Le prossime date verranno annunciate a breve.</p>
        <p>Intanto ripercorri le emozioni delle prime due rappresentazioni</p>
        <Link to='/gallery' className='button-link'>Sfoglia la gallery</Link>

        {/* <p>Teatro Carani - Sassuolo</p>
        <p>3 e 4 maggio 2025</p>
        <br />
        <p>Non perderti la prima rappresentazione del nostro musical!</p>
        <p>Ti aspettiamo per un’esperienza unica di musica, emozioni e spettacolo.</p>
        <Link to='/spettacoli' className='button-link'>Scopri di più</Link>*/}
      </div>
    </div>
  )
}

export default Shows
