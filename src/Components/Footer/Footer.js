import React from 'react'
import FooterBack from '../Images/FooterBack.png'
import ContactBack from '../Images/ContactBack.png'
import CipherLogo from '../Images/tc_logo.png'
import Location from '../Images/Location.png'
import Email from '../Images/Email.png'
import Phone from '../Images/Phone.png'
import Insta from '../Images/Insta.png'
import LinkedIn from '../Images/LinkedIn.png'
import YouTubeLogo from '../Images/YouTubeLogo.svg'
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
              <a href='mailto:roboconteamcipher@gmail.com' target='_blank'>
                <img src={Email} alt="Email" />
              </a>
              <a href='tel:+917719005081' target='_blank'>
                <img src={Phone} alt="Phone" />
              </a>
              <a href='https://instagram.com/team_cipher_?utm_medium=copy_link' target='_blank'>
                <img src={Insta} alt="Insta" />
              </a>
              <a href='https://www.linkedin.com/company/team-cipher' target='_blank'>
                <img src={LinkedIn} alt="LinkedIn" />
              </a>
              <a href='https://youtube.com/channel/UC2WdOL8yJB0Q5HKLhgb3A2g' target='_blank'>
                <img src={YouTubeLogo} alt="YouTubeLogo" />
              </a>
              <span className='CopyRightSpan'>
                © 2022 Team CiPHER | Powered by Team CiPHER
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

// Quick links

// Instagram Profile link  :
// https://instagram.com/team_cipher_?utm_medium=copy_link

// LinkedIn Profile link :
// https://www.linkedin.com/company/team-cipher

// YouTube :
// https://youtube.com/channel/UC2WdOL8yJB0Q5HKLhgb3A2g

// Official Website link :
// http://teamcipher.herokuapp.com/

// E-mail :
// roboconteamcipher@gmail.com
