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
      <div ref={ref} className={`shows-content container ${inView ? 'slide-in-fwd-center' : ''}`}>
        <h2 className='shows-coming-soon-title'>Prossimi spettacoli</h2>
        <br />
        <p>Teatro Carani - Sassuolo</p>
        <p>3 e 4 maggio 2025</p>
        <br />
        <p>Non perderti la prima rappresentazione del nostro musical!</p>
        <p>Ti aspettiamo per un’esperienza unica di musica, emozioni e spettacolo.</p>
        <button><a href="/spettacoli">Scopri di più</a></button>
      </div>
    </div>
  )
}

export default Shows
