import React from 'react'
import HiRobot from '../Images/HiRobot.gif'
import ActivitiesContent from '../Images/ActivitiesContent.png'
import ProfileImg from '../Images/ProfileImg.png'
import Result2020 from '../Images/Achievements/Result2020.png'
import Result2021 from '../Images/Achievements/Result2021.png'
import Result2022 from '../Images/Achievements/Result2022.png'
import '../Activities/Activities.css'
import '../Activities/ActivitiesPhone.css'
import './AboutUs.css'
import './AboutUsPhone.css'

import TechnoVanza from '../Images/TechnoVanza.jpeg'

import Gallery1 from '../Images/Gallery/Gallery1.jpg'
import Gallery2 from '../Images/Gallery/Gallery2.jpg'
import Gallery3 from '../Images/Gallery/Gallery3.jpg'
import Gallery4 from '../Images/Gallery/Gallery4.jpg'
import Gallery5 from '../Images/Gallery/Gallery5.jpg'
import Gallery6 from '../Images/Gallery/Gallery6.jpg'
// import Gallery7 from '../Images/Gallery/Gallery7.mp4'
import Gallery8 from '../Images/Gallery/Gallery8.mp4'
import Gallery9 from '../Images/Gallery/Gallery9.jpeg'
import Gallery10 from '../Images/Gallery/Gallery10.jpeg'
import Gallery11 from '../Images/Gallery/Gallery11.jpeg'
import Gallery12 from '../Images/Gallery/Gallery12.jpeg'
import Gallery13 from '../Images/Gallery/Gallery13.jpeg'
import Gallery14 from '../Images/Gallery/Gallery14.jpeg'
import Gallery15 from '../Images/Gallery/Gallery15.mp4'
// import Gallery16 from '../Images/Gallery/Gallery16.mp4'
// import Gallery17 from '../Images/Gallery/Gallery17.mp4'
import Gallery18 from '../Images/Gallery/Gallery18.mp4'
// import Gallery19 from '../Images/Gallery/Gallery19.mp4'

import GaneshJagatap from '../Images/Alumni/GaneshJagatap.jpg'
import RuturajShinde from '../Images/Alumni/RuturajShinde.jpg'
import ShivamNikhade from '../Images/Alumni/ShivamNikhade.jpg'
import TapanPatil from '../Images/Alumni/TapanPatil.jpg'

export default function AboutUs() {
  return (
    <div>
      <div id='AboutUsHeadID' className="ActivitiesHead">
        <div>
          <h1 className='AboutUsHead'>About Us</h1>
          <img className='ActivitiesHeadImgPhone' src={HiRobot} />
          <p>
            The Team CiPHER - the official Robocon team of JSPM's Rajarshi Shahu College of Engineering, was formed in 2018. Our team is led by 40 young robotics enthusiasts from various disciplines of engineering who collaborate to construct, design, and innovate smart robots.
            <br></br>
            <br></br>
            We have 4 major departments in our team - Mechanical, Electronics, Programming, Media & Marketing. As a team, we have been competing in an International Robotics Competition-ABU ROBOCON, annually since 2019.
            <br></br>
            <br></br>
            We have participated in various national and international contests, including IIT Bombay Tech-fest, IPAS Challenge, and others. In addition, we also host several workshops for students to help them explore the field of robotics.
          </p>
        </div>
        <img className='ActivitiesHeadImg' src={HiRobot} />
      </div>
      <div className="AboutUsTop">
        The ability to learn, adapt, and grow with the ever-evolving science and technologies is a crucial challenge. Hence, we are constantly experimenting with new technologies in order to create efficient robots with the fewest resources possible.       </div>
      <div className="ActivitiesHead ProjectHead">
        <h1 style={{ width: "100%", textAlign: "center" }} className="AchievementHead">Achievements</h1>
      </div>
      {/* <p className="AchievementsSubHead">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
      </p> */}
      <div className="ActivitiesContentOut">
        <div className='ActivitiesContent'>
          <span>
            Robocon Stage 1 Results 2020
          </span>
          <img className='AchievementImg' src={Result2020} />
          <p>
            AIR 8/108(stage 1), among top teams Scoring 95/100 marks.
          </p>
        </div>
        <div className='ActivitiesContent'>
          <span>
            Robocon Stage 1 Results 2021
          </span>
          <img className='AchievementImg' src={Result2021} />
          <p>
            AIR 1/60(stage 1), among top teams Scoring 100/100 marks.
          </p>
        </div>

        <div className='ActivitiesContent'>
          <span>
            Technovanza
          </span>
          <img className='AchievementImg' src={TechnoVanza} />
          <p>
            2nd Winner in Technovanza at VJTI Mumbai 2021 & 2022.
          </p>
        </div>

        <div className='ActivitiesContent'>
          <span>
            Robocon Stage 1 Results 2022
          </span>
          <img className='AchievementImg' src={Result2022} />
          <p>
            AIR 7/80(stage 1), among top teams Scoring 96/100 marks.
          </p>
        </div>
      </div>
      <div className="ActivitiesHead ProjectHead">
        <h1 style={{ width: "100%", textAlign: "center" }}>Gallery</h1>
      </div>
      <div className="GalleryOut">
        {/* <img src={ActivitiesContent} /> */}

        {/* <img src={Gallery9} className="Gallery Gallery9" />
        <img src={Gallery5} className="Gallery Gallery5" />
        <img src={Gallery6} className="Gallery Gallery6" />
        <img src={Gallery10} className="Gallery Gallery10" />
        <img src={Gallery11} className="Gallery Gallery11" />
        <img src={Gallery12} className="Gallery Gallery12" />
        <img src={Gallery13} className="Gallery Gallery13" />
        <img src={Gallery14} className="Gallery Gallery14" />
        <img src={Gallery1} className="Gallery Gallery1" />
        <img src={Gallery2} className="Gallery Gallery2" />
        <img src={Gallery3} className="Gallery Gallery3" />
        <img src={Gallery4} className="Gallery Gallery4" /> */}

        <img src={Gallery9} className="Gallery Gallery9" />
        <img src={Gallery5} className="Gallery Gallery5" />
        <img src={Gallery6} className="Gallery Gallery6" />
        <img src={Gallery10} className="Gallery Gallery10" />
        <img src={Gallery11} className="Gallery Gallery11" />
        <img src={Gallery12} className="Gallery Gallery12" />
        <img src={Gallery13} className="Gallery Gallery13" />
        <img src={Gallery14} className="Gallery Gallery14" />
        <img src={Gallery1} className="Gallery Gallery1" />
        <img src={Gallery2} className="Gallery Gallery2" />
        <img src={Gallery3} className="Gallery Gallery3" />
        <img src={Gallery4} className="Gallery Gallery4" />
        {/* <img src={Gallery7} className="Gallery Gallery7" /> */}
        {/* <video className="IPASSliderImgs" controls>
          <source src={Gallery7} type="video/mp4" />
        </video> */}
        {/* <img src={Gallery8} className="Gallery Gallery8" /> */}
        {/* <video className="IPASSliderImgs" controls>
          <source src={Gallery8} type="video/mp4" />
        </video> */}
        {/* <img src={Gallery15} className="Gallery Gallery15" /> */}
        {/* <video className="IPASSliderImgs" controls>
          <source src={Gallery15} type="video/mp4" />
        </video> */}
        {/* <img src={Gallery16} className="Gallery Gallery16" /> */}
        {/* <video className="IPASSliderImgs" controls>
          <source src={Gallery16} type="video/mp4" />
        </video> */}
        {/* <img src={Gallery17} className="Gallery Gallery17" /> */}
        {/* <video className="IPASSliderImgs" controls>
          <source src={Gallery17} type="video/mp4" />
        </video> */}
        {/* <img src={Gallery18} className="Gallery Gallery18" /> */}
        {/* <video className="IPASSliderImgs" controls>
          <source src={Gallery18} type="video/mp4" />
        </video> */}
        {/* <img src={Gallery19} className="Gallery Gallery19" /> */}
        {/* <video className="IPASSliderImgs" controls>
          <source src={Gallery19} type="video/mp4" />
        </video> */}
      </div>
      <div className="ActivitiesHead ProjectHead">
        <h1 style={{ width: "100%", textAlign: "center" }}>About Alumni</h1>
      </div>
      <div id='AlumniContainer' className='AlumniContainer'>
        <img src={GaneshJagatap} alt="Alumni" />
        <div>
          <span>
            Ganesh Jagatap
          </span>
          <p>
            Founder of Team CiPHER | Cofounder of Wizz.homes & Varinco Technologies.
          </p>
        </div>
      </div>
      <div id='AlumniContainer' className='AlumniContainer'>
        <img src={RuturajShinde} alt="Alumni" />
        <div>
          <span>
            Ruturaj Shinde
          </span>
          <p>
            Founder of Team Cipher | Founder of a startup named Technovo Solutions - Product and services in 3D Printing | Cofounder of Wizz.homes - Product & services in Home Automation systems.
          </p>
        </div>
      </div>
      <div id='AlumniContainer' className='AlumniContainer'>
        <img src={ShivamNikhade} alt="Alumni" />
        <div>
          <span>
            Shivam Nikhade
          </span>
          <p>
            Founder & MD at Maza Hinganghat | GET ER&D at Tata Technologies | Captain (SAE TIFAN) of Team MechAgrinics- RSCOE.
          </p>
        </div>
      </div>
      <div id='AlumniContainer' className='AlumniContainer'>
        <img src={TapanPatil} alt="Alumni" />
        <div>
          <span>
            Tapan Patil
          </span>
          <p>
            Software Engineer - Research and Development at Telaverge Communications | Captain of Team CiPHER - RSCOE (2020).
          </p>
        </div>
      </div>
    </div>
  )
}
