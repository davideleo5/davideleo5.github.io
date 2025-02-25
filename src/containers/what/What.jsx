import { React } from 'react';
import './what.css';

const What = () => {
    return (
    <div id='what' className='chi-siamo-container container text-align-center'>
      <div className={`chi-siamo-content section__padding`}>
        <h2 className='chi-siamo-title'>Chi siamo: la storia dietro Divino</h2>
        <p>Divino è un musical originale ispirato alla parabola del Figliol Prodigo, che racconta il viaggio di una ragazza alla ricerca del suo posto nel mondo e di un padre che attende con amore il suo ritorno.</p>
        <br />
        <p>Scritto e composto da giovani della Parrocchia di Formigine, unisce musica, teatro e passione in un progetto che parla di perdono, sogni e amore incondizionato.</p>
        <button><a href="/chi-siamo">Altro</a></button>
      </div>
    </div>
  )
}

export default What
