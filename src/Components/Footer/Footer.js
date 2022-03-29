import React from 'react'
import FooterBack from '../Images/FooterBack.png'
import ContactBack from '../Images/ContactBack.png'
import CipherLogo from '../Images/tc_logo.png'
import Location from '../Images/Location.png'
import Email from '../Images/Email.png'
import Phone from '../Images/Phone.png'
import Insta from '../Images/Insta.png'
import LinkedIn from '../Images/LinkedIn.png'
import './Footer.css'

export default function Footer() {
  return (
    <div id='ContactUsOut' className='ContactUsOut'>
      <div className='ContactUs'>
        <p className="ContactHeading">
          CONTACT
        </p>
        <span style={{ display: 'block', width: '100%', borderTop: '0.1vw solid black' }}></span>
        <div className='ContactUsContent'>
          <img className='FooterLogo' src={CipherLogo} alt="CipherLogo" />
          <div>
            <p>
              <img src={Location} alt="Location" />
              <span className='LocationSpan'>
                C Building 2nd floor 210, Project lab, JSPM Rajarshi shahu college of engineering, Tathawade, Service Rd, Ashok Nagar, Tathawade, Pimpri-Chinchwad, Maharashtra 411033.
              </span>
            </p>
            <div className='ContactUsPartition'></div>
            <p>
              <img src={Email} alt="Email" />
              <img src={Phone} alt="Phone" />
              <img src={Insta} alt="Insta" />
              <img src={LinkedIn} alt="LinkedIn" />
              <span className='CopyRightSpan'>
                © 2021 Team CiPHER | Powered by Team CiPHER
              </span>
            </p>
          </div>
        </div>
        <img className='ContactBack' src={ContactBack} alt='ContactBack' />
      </div>
      <img className='FooterBack' src={FooterBack} alt='FooterBack' />
    </div>
  )
}
