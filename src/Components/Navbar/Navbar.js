import React from 'react'
import { HashLink } from 'react-router-hash-link';
import './Navbar.css'
import CipherLogo from '../Images/tc_logo.png'
import HomeIcon from '../Images/HomeIcon.svg'
import RobotIcon from '../Images/RobotIcon.svg'
import ActivitiesIcon from '../Images/ActivitiesIcon.svg'
import AboutUsIcon from '../Images/AboutUsIcon.svg'
import SponsorsIcon from '../Images/SponsorsIcon.svg'
import ContactUsIcon from '../Images/ContactUsIcon.svg'
import { useLocation } from 'react-router-dom';

function moreOptionsOpenMobile() {
  var moreOptionsOutMobile = document.getElementsByClassName("moreOptionsOutMobile");
  if (moreOptionsOutMobile[0].style.visibility == "hidden" || moreOptionsOutMobile[0].style.visibility == "") {
    moreOptionsOutMobile[0].style.visibility = "visible";
    moreOptionsOutMobile[0].style.width = "50vw";
  } else {
    moreOptionsOutMobile[0].style.width = "0vw";
    moreOptionsOutMobile[0].style.visibility = "hidden";
  }
}
window.addEventListener('click', function (e) {
  var moreOptionsOutMobile = document.getElementsByClassName("moreOptionsOutMobile");
  console.log('Checking Click');
  if (moreOptionsOutMobile[0].contains(e.target)) {
    console.log('Inside menu');
  } else {
    console.log('Outside menu');
    if (moreOptionsOutMobile[0].style.visibility == "visible" && !document.getElementsByClassName('hamburgerBtn')[0].contains(e.target)) {
      moreOptionsOutMobile[0].style.width = "0vw";
      moreOptionsOutMobile[0].style.visibility = "hidden";
    }
  }
});
export default function Navbar() {
  const location = useLocation();
  console.log(location);
  console.log(location.pathname);
  console.log(location.hash);
  // const changeBackground = () => {
  //   if (window.scrollY >= 1) {
  //     console.log('Scroll');
  //     document.getElementsByClassName('Navbar')[0].style.boxShadow = 'box-shadow: 0.1vw 0.4vw 1.5vw white;';
  //   }
  //   else {
  //     console.log('NoScroll');
  //     document.getElementsByClassName('Navbar')[0].style.boxShadow = 'none';
  //   }
  // }
  // window.addEventListener('scroll', changeBackground);
  return (
    <>
      <div className="moreOptionsOutMobile">
        <div className="moreOptionsLinkOut" >
          <img src={HomeIcon} style={location.pathname == '/' && location.hash == '#WelcomeSection' || location.pathname == '/' && location.hash == '' ? { filter: 'invert(95%) sepia(100%) saturate(3045%) hue-rotate(156deg) brightness(102%) contrast(98%)' } : { filter: 'invert(100%) sepia(4%) saturate(15%) hue-rotate(108deg) brightness(103%) contrast(100%)' }} />
          <HashLink className='moreOptionsLink' to='/#WelcomeSection' style={location.pathname == '/' && location.hash == '#WelcomeSection' || location.pathname == '/' && location.hash == '' ? { color: 'rgba(125, 248, 253, 1)' } : { color: 'white' }}>Home</HashLink>
        </div>
        <div className="moreOptionsLinkOut">
          <img src={RobotIcon} style={location.pathname == '/' && location.hash == '#RoboconOutID' ? { filter: 'invert(95%) sepia(100%) saturate(3045%) hue-rotate(156deg) brightness(102%) contrast(98%)' } : { filter: 'invert(100%) sepia(4%) saturate(15%) hue-rotate(108deg) brightness(103%) contrast(100%)' }} />
          <HashLink className='moreOptionsLink' to='/#RoboconOutID' style={location.pathname == '/' && location.hash == '#RoboconOutID' ? { color: 'rgba(125, 248, 253, 1)' } : { color: 'white' }}>Robocon</HashLink>
        </div>
        <div className="moreOptionsLinkOut">
          <img src={SponsorsIcon} style={location.pathname == '/' && location.hash == '#Sponsors' ? { filter: 'invert(95%) sepia(100%) saturate(3045%) hue-rotate(156deg) brightness(102%) contrast(98%)' } : { filter: 'invert(100%) sepia(4%) saturate(15%) hue-rotate(108deg) brightness(103%) contrast(100%)' }} />
          <HashLink className='moreOptionsLink' to='/#Sponsors' style={location.pathname == '/' && location.hash == '#Sponsors' ? { color: 'rgba(125, 248, 253, 1)' } : { color: 'white' }}>Sponsors</HashLink>
        </div>
        <div className="moreOptionsLinkOut">
          <img src={ActivitiesIcon} style={location.pathname == '/Activities' && location.hash == '#ActivitiesHeadID' ? { filter: 'invert(95%) sepia(100%) saturate(3045%) hue-rotate(156deg) brightness(102%) contrast(98%)' } : { filter: 'invert(100%) sepia(4%) saturate(15%) hue-rotate(108deg) brightness(103%) contrast(100%)' }} />
          <HashLink className='moreOptionsLink' to='/Activities#ActivitiesHeadID' style={location.pathname == '/Activities' && location.hash == '#ActivitiesHeadID' ? { color: 'rgba(125, 248, 253, 1)' } : { color: 'white' }}>Activities</HashLink>
        </div>
        <div className="moreOptionsLinkOut">
          <img src={AboutUsIcon} style={location.pathname == '/AboutUs' && location.hash == '#AboutUsHeadID' ? { filter: 'invert(95%) sepia(100%) saturate(3045%) hue-rotate(156deg) brightness(102%) contrast(98%)' } : { filter: 'invert(100%) sepia(4%) saturate(15%) hue-rotate(108deg) brightness(103%) contrast(100%)' }} />
          <HashLink className='moreOptionsLink' to='/AboutUs#AboutUsHeadID' style={location.pathname == '/AboutUs' && location.hash == '#AboutUsHeadID' ? { color: 'rgba(125, 248, 253, 1)' } : { color: 'white' }}>About Us</HashLink>
        </div>
        <div className="moreOptionsLinkOut">
          <img src={ContactUsIcon} style={location.hash == '#ContactUsOut' ? { filter: 'invert(95%) sepia(100%) saturate(3045%) hue-rotate(156deg) brightness(102%) contrast(98%)' } : { filter: 'invert(100%) sepia(4%) saturate(15%) hue-rotate(108deg) brightness(103%) contrast(100%)' }} />
          <HashLink className='moreOptionsLink' to={location.pathname + '#ContactUsOut'} style={location.hash == '#ContactUsOut' ? { color: 'rgba(125, 248, 253, 1)' } : { color: 'white' }}>Contact Us</HashLink>
        </div>
      </div>
      <div className='Navbar'>
        <div className='LeftNav'>
          <img className='LogoCipher' src={CipherLogo} alt="CiPHER Logo" />
          <div>TEAM CiPHER</div>
        </div>
        <div className='RightNav'>
          <div className="NavLinksOut">
            <img src={HomeIcon} style={location.pathname == '/' && location.hash == '#WelcomeSection' || location.pathname == '/' && location.hash == '' ? { filter: 'invert(95%) sepia(100%) saturate(3045%) hue-rotate(156deg) brightness(102%) contrast(98%)' } : { filter: 'invert(100%) sepia(4%) saturate(15%) hue-rotate(108deg) brightness(103%) contrast(100%)' }} />
            <HashLink className='NavLinks' to='/#WelcomeSection' style={location.pathname == '/' && location.hash == '#WelcomeSection' || location.pathname == '/' && location.hash == '' ? { color: 'rgba(125, 248, 253, 1)' } : { color: 'white' }}>Home</HashLink>
          </div>
          <div className="NavLinksOut">
            <img src={RobotIcon} style={location.pathname == '/' && location.hash == '#RoboconOutID' ? { filter: 'invert(95%) sepia(100%) saturate(3045%) hue-rotate(156deg) brightness(102%) contrast(98%)' } : { filter: 'invert(100%) sepia(4%) saturate(15%) hue-rotate(108deg) brightness(103%) contrast(100%)' }} />
            <HashLink className='NavLinks' to='/#RoboconOutID' style={location.pathname == '/' && location.hash == '#RoboconOutID' ? { color: 'rgba(125, 248, 253, 1)' } : { color: 'white' }}>Robocon</HashLink>
          </div>
          <div className="NavLinksOut">
            <img src={SponsorsIcon} style={location.pathname == '/' && location.hash == '#Sponsors' ? { filter: 'invert(95%) sepia(100%) saturate(3045%) hue-rotate(156deg) brightness(102%) contrast(98%)' } : { filter: 'invert(100%) sepia(4%) saturate(15%) hue-rotate(108deg) brightness(103%) contrast(100%)' }} />
            <HashLink className='NavLinks' to='/#Sponsors' style={location.pathname == '/' && location.hash == '#Sponsors' ? { color: 'rgba(125, 248, 253, 1)' } : { color: 'white' }}>Sponsors</HashLink>
          </div>
          <div className="NavLinksOut">
            <img src={ActivitiesIcon} style={location.pathname == '/Activities' && location.hash == '#ActivitiesHeadID' ? { filter: 'invert(95%) sepia(100%) saturate(3045%) hue-rotate(156deg) brightness(102%) contrast(98%)' } : { filter: 'invert(100%) sepia(4%) saturate(15%) hue-rotate(108deg) brightness(103%) contrast(100%)' }} />
            <HashLink className='NavLinks' to='/Activities#ActivitiesHeadID' style={location.pathname == '/Activities' && location.hash == '#ActivitiesHeadID' ? { color: 'rgba(125, 248, 253, 1)' } : { color: 'white' }}>Activities</HashLink>
          </div>
          <div className="NavLinksOut">
            <img src={AboutUsIcon} style={location.pathname == '/AboutUs' && location.hash == '#AboutUsHeadID' ? { filter: 'invert(95%) sepia(100%) saturate(3045%) hue-rotate(156deg) brightness(102%) contrast(98%)' } : { filter: 'invert(100%) sepia(4%) saturate(15%) hue-rotate(108deg) brightness(103%) contrast(100%)' }} />
            <HashLink className='NavLinks' to='/AboutUs#AboutUsHeadID' style={location.pathname == '/AboutUs' && location.hash == '#AboutUsHeadID' ? { color: 'rgba(125, 248, 253, 1)' } : { color: 'white' }}>About Us</HashLink>
          </div>
          <div className="NavLinksOut">
            <img src={ContactUsIcon} style={location.hash == '#ContactUsOut' ? { filter: 'invert(95%) sepia(100%) saturate(3045%) hue-rotate(156deg) brightness(102%) contrast(98%)' } : { filter: 'invert(100%) sepia(4%) saturate(15%) hue-rotate(108deg) brightness(103%) contrast(100%)' }} />
            <HashLink className='NavLinks' to={location.pathname + '#ContactUsOut'} style={location.hash == '#ContactUsOut' ? { color: 'rgba(125, 248, 253, 1)' } : { color: 'white' }}>Contact Us</HashLink>
          </div>
        </div>
        <button className="hamburgerBtn" onClick={moreOptionsOpenMobile}>
          <div className="hamburgerLine hamburgerLine1"></div>
          <div className="hamburgerLine hamburgerLine2"></div>
          <div className="hamburgerLine hamburgerLine3"></div>
        </button>
      </div>
    </>
  )
}