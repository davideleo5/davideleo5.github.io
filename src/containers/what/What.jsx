import { React, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './what.css';

const What = () => {
  const { ref, inView } = useInView({
    triggerOnce: true
  }),
    windowWidth = useRef(window.innerWidth);

    return (
    <div id='what' className='chi-siamo-container'>
      <div className={`chi-siamo-content section__padding`}>
        <h2 ref={ref} className='chi-siamo-title'>Chi siamo?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices venenatis tincidunt. Mauris quis metus ut justo fermentum rhoncus. Donec tempus diam ac odio tristique, vitae iaculis urna convallis. Suspendisse potenti. Duis vehicula tellus vel enim convallis bibendum. Donec leo augue, aliquet ac nisl vitae, faucibus pharetra diam. Cras sit amet neque nibh. Donec dictum orci est, a lobortis erat cursus ac. Pellentesque nec auctor nibh. Nullam in ex consequat, euismod tellus non, vulputate nisl. Sed fringilla pulvinar massa in rhoncus.</p>
      </div>
    </div>
  )
}

export default What
