import Headroom from 'react-headroom';
import { Navbar, Story, Separator } from '../components';
import { Footer } from '../containers';

export function ChiSiamo() {
    return (
      <>
        <Headroom>
          <Navbar />
        </Headroom>
        <Story />
        <Separator />
        <Footer />
      </>
    )
}

export default ChiSiamo;
