import Headroom from 'react-headroom';
import { Header, What, Shows, Footer } from '../containers';
import { Navbar, Separator } from '../components';

export function Home() {
    return (
        <div className='App'>
            <Headroom>
                <Navbar />
            </Headroom>
            <Header />
            <Separator />
            <What />
            <Separator />
            <Shows />
            <Separator />
            <Footer />
        </div>
      )
}
