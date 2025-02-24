import { React, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './what.css';

const What = () => {
  const { ref, inView } = useInView({
    triggerOnce: true
  }),
    windowWidth = useRef(window.innerWidth);

    return (
    <div id='what' className='chi-siamo-container'>
      <div className={`chi-siamo-content section__padding`}>
        <h2 ref={ref} className='chi-siamo-title'>Chi siamo: la storia dietro Divino</h2>
        <p>Divino è un musical originale ispirato alla parabola del Figliol Prodigo, che racconta il viaggio di una ragazza alla ricerca del suo posto nel mondo e di un padre che attende con amore il suo ritorno.</p>
        <br />
        <p>Scritto e composto da giovani della Parrocchia di Formigine, unisce musica, teatro e passione in un progetto che parla di perdono, sogni e amore incondizionato.</p>
        <button><a href="/chi-siamo">Altro</a></button>
      </div>
    </div>
  )
}

export default What
