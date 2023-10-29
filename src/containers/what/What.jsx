import { React, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './what.css';
import background from "../../assets/chi-siamo.webp";
import backgroundMobile from "../../assets/chi-siamo-mobile.webp";

const What = () => {
  const { ref, inView } = useInView({
    triggerOnce: true
  }),
    windowWidth = useRef(window.innerWidth);
  var backgroundImageUrl = '';

  if (windowWidth.current > 768) {
    backgroundImageUrl = `url(${background})`
  } else {
    backgroundImageUrl = `url(${backgroundMobile})`
  }

  return (
    <div id='what' className='chi-siamo-container' style={{ backgroundImage: backgroundImageUrl }}>
      <div className={`chi-siamo-content section__padding ${inView ? 'text-flicker-in-glow' : ''}`}>
        <h3 ref={ref} className='chi-siamo-title'>Chi siamo?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices venenatis tincidunt. Mauris quis metus ut justo fermentum rhoncus. Donec tempus diam ac odio tristique, vitae iaculis urna convallis. Suspendisse potenti. Duis vehicula tellus vel enim convallis bibendum. Donec leo augue, aliquet ac nisl vitae, faucibus pharetra diam. Cras sit amet neque nibh. Donec dictum orci est, a lobortis erat cursus ac. Pellentesque nec auctor nibh. Nullam in ex consequat, euismod tellus non, vulputate nisl. Sed fringilla pulvinar massa in rhoncus.</p>
      </div>
    </div>
  )
}

export default What
