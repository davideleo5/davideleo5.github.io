import './tickets.css';

const Tickets = () => {
  return (
    <div className='tickets-container container section__padding'>
      <h1>Biglietti</h1>

      <div className='tickets-content'>
        <p>Vendita diretta presso la <a href='https://maps.app.goo.gl/NzYRFhQgwSkWdBxK9' target="_blank" rel="noopener noreferrer">canonica di Formigine</a>, ai seguenti orari:</p>
        <ul>
          <li>
            <p>Al Lunedì e Venerdì, dalle 10:00 alle 12:30</p>
          </li>
          <li>
            <p>Al Mercoledì, dalle 15:00 alle 18:00</p>
        </li>
          <li>
            <p>Al Sabato, dalle 10:00 alle 12:30 e dalle 15:30 alle 18:30</p>
          </li>
        </ul>
        <br />
        <br />
        <p>Biglietti disponibili anche online su <a href="https://www.eventbrite.com/cc/divino-il-musical-teatro-carani-3-4-maggio-2025-4180013" target="_blank" rel="noopener noreferrer">Eventbrite</a>.</p>
      </div>
    </div>
  )
}
  
export default Tickets
  