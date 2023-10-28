import React from 'react';
import './what.css';
import background from "../../assets/chi-siamo.jpg";

const What = () => {
  return (
    <div className='chi-siamo-container' style={{ backgroundImage: `url(${background})` }}>
        <div className='chi-siamo-content section__padding'>
          <h3 className='chi-siamo-title text-flicker-in-glow'>Chi siamo?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices venenatis tincidunt. Mauris quis metus ut justo fermentum rhoncus. Donec tempus diam ac odio tristique, vitae iaculis urna convallis. Suspendisse potenti. Duis vehicula tellus vel enim convallis bibendum. Donec leo augue, aliquet ac nisl vitae, faucibus pharetra diam. Cras sit amet neque nibh. Donec dictum orci est, a lobortis erat cursus ac. Pellentesque nec auctor nibh. Nullam in ex consequat, euismod tellus non, vulputate nisl. Sed fringilla pulvinar massa in rhoncus.</p>
        </div>
      </div>
  )
}

export default What
