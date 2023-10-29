import { React, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './shows.css';
import background from "../../assets/shows.jpg";

const Shows = () => {
  const { ref, inView } = useInView({
    triggerOnce: true
  });

  return (
    <div id='shows' className='shows-container' style={{ backgroundImage: `url(${background})` }}>
      <h3 ref={ref} className={`shows-coming-soon-title ${inView ? 'slide-in-fwd-center' : ''}`}>COMING SOON...</h3>
    </div>
  )
}

export default Shows
