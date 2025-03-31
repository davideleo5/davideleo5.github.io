import { Header, What, Shows, Footer } from '../containers';
import { Separator } from '../components';

export function Home() {
    return (
        <div className='App'>
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
