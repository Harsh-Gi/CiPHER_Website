import React from 'react'
import HiRobot from '../Images/HiRobot.gif'
import ActivitiesContent from '../Images/ActivitiesContent.png'
import ProfileImg from '../Images/ProfileImg.png'
import Result2020 from '../Images/Achievements/Result2020.png'
import Result2021 from '../Images/Achievements/Result2021.png'
import '../Activities/Activities.css'
import '../Activities/ActivitiesPhone.css'
import './AboutUs.css'
import './AboutUsPhone.css'

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
            We are Team CIPHER, the official Robocon team of JSPM Rajarshi Shahu College of Engineering, Tathawade, Pune, India. Our team is run by undergraduate students coming from different disciplines of engineering. Our team participates in the International Robotics Competition, ABU ROBOCON, annually. Apart from this, we conduct various workshops for students to help them explore the field of robotics.
          </p>
        </div>
        <img className='ActivitiesHeadImg' src={HiRobot} />
      </div>
      <div className="AboutUsTop">
        Our team is dedicated to investigating the different future possibilities and believes that genuine freedom and boundless potential for mankind can only be achieved through the growth of science and technology. We are continually experimenting with new technologies and attempting to produce efficient robots with the least amount of resources.
      </div>
      <div className="ActivitiesHead ProjectHead">
        <h1>Achievements</h1>
      </div>
      <p className="AchievementsSubHead">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
      </p>
      <div className="ActivitiesContentOut">
        <div className='ActivitiesContent'>
          <span>
            Robocon Stage 1 Results 2020
          </span>
          <img className='AchievementImg' src={Result2020} />
          <p>
            With a never-ending desire to push the boundaries of robotics, our team also believes that
          </p>
        </div>
        <div className='ActivitiesContent'>
          <span>
            Robocon Stage 1 Results 2021
          </span>
          <img className='AchievementImg' src={Result2021} />
          <p>
            With a never-ending desire to push the boundaries of robotics, our team also believes that
          </p>
        </div>
      </div>
      <div className="ActivitiesHead ProjectHead">
        <h1>Gallery</h1>
      </div>
      <div className="GalleryOut">
        <img src={ActivitiesContent} />
        <img src={ActivitiesContent} />
        <img src={ActivitiesContent} />
        <img src={ActivitiesContent} />
        <img src={ActivitiesContent} />
        <img src={ActivitiesContent} />
        <img src={ActivitiesContent} />
        <img src={ActivitiesContent} />
        <img src={ActivitiesContent} />
        {/* <img src={Gallery1} className="Gallery Gallery1" />
        <img src={Gallery2} className="Gallery Gallery2" />
        <img src={Gallery3} className="Gallery Gallery3" />
        <img src={Gallery4} className="Gallery Gallery4" />
        <img src={Gallery5} className="Gallery Gallery5" />
        <img src={Gallery6} className="Gallery Gallery6" /> */}
        {/* <img src={Gallery7} className="Gallery Gallery7" /> */}
        {/* <video className="IPASSliderImgs" controls>
          <source src={Gallery7} type="video/mp4" />
        </video> */}
        {/* <img src={Gallery8} className="Gallery Gallery8" /> */}
        {/* <video className="IPASSliderImgs" controls>
          <source src={Gallery8} type="video/mp4" />
        </video>
        <img src={Gallery9} className="Gallery Gallery9" />
        <img src={Gallery10} className="Gallery Gallery10" />
        <img src={Gallery11} className="Gallery Gallery11" />
        <img src={Gallery12} className="Gallery Gallery12" />
        <img src={Gallery13} className="Gallery Gallery13" />
        <img src={Gallery14} className="Gallery Gallery14" /> */}
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
        <h1>About Alumni</h1>
      </div>
      <div id='AlumniContainer' className='AlumniContainer'>
        <img src={GaneshJagatap} alt="Alumni" />
        <div>
          <span>
            Ganesh Jagatap
          </span>
          <p>
            To become a team that builds robots with capabilities of solving problems of our society and thus creating a better tomorrow.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse tenetur corrupti id doloremque tempora ea iste. Harum quasi veritatis praesentium laborum ipsa est tenetur labore, animi illo delectus ad commodi, quos quam ipsum minus fugit officiis!
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
            To become a team that builds robots with capabilities of solving problems of our society and thus creating a better tomorrow.
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
            To become a team that builds robots with capabilities of solving problems of our society and thus creating a better tomorrow.
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
            To become a team that builds robots with capabilities of solving problems of our society and thus creating a better tomorrow.
          </p>
        </div>
      </div>
    </div>
  )
}
