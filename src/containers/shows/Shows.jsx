import React from 'react';
import { useInView } from 'react-intersection-observer';
import './shows.css';
import background from "../../assets/shows.webp";

const Shows = () => {
  const { ref, inView } = useInView({
    triggerOnce: true
  });

  return (
    <div id='shows' className='home-shows-container' style={{ backgroundImage: `url(${background})` }}>
      <div className='shows-content container'>
        <h2 ref={ref} className={`shows-coming-soon-title ${inView ? 'slide-in-fwd-center' : ''}`}>Prossimi spettacoli</h2>
        <br />
        <p>Teatro Carani - Sassuolo</p>
        <p>3 e 4 maggio 2025</p>
        <br />
        <p>Non perderti la prima rappresentazione del nostro musical!</p>
        <p>Ti aspettiamo per un’esperienza unica di musica, emozioni e spettacolo.</p>
      </div>

      <button><a href="/spettacoli">Scopri di più</a></button>
    </div>
  )
}

export default Shows
