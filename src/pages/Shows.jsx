import { Navbar, DownloadButton } from '../components';
import { Footer } from '../containers';

export function Shows() {
    return (
      <>
      <Navbar />
      <div className='container section__padding'>
        <h1>Biglietti</h1>
        <p>I biglietti saranno presto disponibili. Intanto salva le date nel calendario e non prendere altri impegni!</p>
        <DownloadButton />
        </div>
      <Footer />
      </>
    )
}

export default Shows;
