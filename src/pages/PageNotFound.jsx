import Headroom from 'react-headroom';
import { Link } from 'react-router-dom';
import { Navbar, Separator } from '../components';
import { Footer } from '../containers';

export function PageNotFound() {
    return (
      <>
        <Headroom>
          <Navbar />
        </Headroom>
        <Separator />
        <div className='not-found container section__padding text-align-center'>
            <h1 style={{marginBottom: 2 + 'rem'}}>OOPS! IL SIPARIO È CALATO…</h1>
            <h3>Questa pagina non fa parte del copione!</h3>
            <h3>Torna alla <Link to='/'>Home</Link> per non perderti lo show!</h3>
            <h3>Oppure <Link to='/chi-siamo'>scopri</Link> il nostro Musical e le <Link to='/spettacoli'>prossime date!</Link></h3>
        </div>
        <Separator />
        <Footer />
      </>
    )
}

export default PageNotFound;
