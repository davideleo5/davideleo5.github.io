import { Navbar } from '../components';
import { Footer } from '../containers';

export function PageNotFound() {
    return (
      <>
        <Navbar />
        <div className='container section__padding text-align-center'>
            <h1 style={{marginBottom: 2 + 'rem'}}>OOPS! IL SIPARIO È CALATO…</h1>
            <h3>Questa pagina non fa parte del copione!</h3>
            <h3>Torna alla <a href="/">Home</a> per non perderti lo show!</h3>
            <h3>Oppure <a href='chi-siamo'>scopri</a> il nostro Musical e le <a href='/spettacoli'>prossime date!</a></h3>
        </div>
        <Footer />
      </>
    )
}

export default PageNotFound;
