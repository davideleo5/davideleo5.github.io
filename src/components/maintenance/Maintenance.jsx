import React from 'react'
import './maintenance.css';
import comingSoonVideo from '../../assets/coming-soon.mp4';

const Maintenance = () => {
  return (
    <div className='maintenance-video'>
        <video src={comingSoonVideo} autoPlay loop muted />
    </div>
  )
}

export default Maintenance