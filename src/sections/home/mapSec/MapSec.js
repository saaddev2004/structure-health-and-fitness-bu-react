import React from 'react'
import './MapSec.css'
const MapSec = () => {
  return (
    <div>
     <iframe
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0000000000005!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2463!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
       width="100%"
       height="400"
       style={{ border: 0 }}
       allowFullScreen=""
       loading="lazy"
       referrerPolicy="no-referrer-when-downgrade"
       title="Gym Location Map"
     ></iframe>
    </div>
  )
}

export default MapSec
