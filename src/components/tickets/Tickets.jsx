import './tickets.css';

const Tickets = () => {
  return (
    <div className='tickets-container container section__padding'>
      
      <h1>Biglietti</h1>

      <div className='tickets-content'>
        <p>Vendita diretta (senza commissioni) presso la <a href='https://maps.app.goo.gl/qgbWSNkNihtmtNSk7' target="_blank" rel="noopener noreferrer">canonica di Formigine</a>, ai seguenti orari:</p>
        <p>Giovedì, Venerdì e Sabato dalle 9:00 alle 12:00 e dalle 15:00 alle 18:00</p>
        <br />
        <br />
        <p>Biglietti disponibili anche online su <a href="https://www.eventbrite.com/cc/divino-il-musical-teatro-carani-2-3-novembre-2025-4637423" target="_blank" rel="noopener noreferrer">Eventbrite</a>.</p>
      </div>
    </div>
  )
}
  
export default Tickets
