import Headroom from 'react-headroom';
import { Navbar, Tickets, Separator } from '../components';
import { Footer } from '../containers';

export function Shows() {
  return (
    <>
      <Headroom>
        <Navbar />
      </Headroom>
      <Tickets />
      <Separator />
      <Footer />
    </>
  )
}

export default Shows;
