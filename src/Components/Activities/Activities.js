import React from 'react'
import RobotScreen from '../Images/RobotScreen.gif'
// import ActivitiesTop from '../Images/ActivitiesTop.png'
// import ActivitiesContent from '../Images/ActivitiesContent.png'
import WorkShopHead from '../Images/WorkShops/WorkShopHead.jpeg'

import OpenCVCarousel from '../Carousels/WorkShops/OpenCVCarousel'
import CADCarousel from '../Carousels/WorkShops/CADCarousel'
import DLCarousel from '../Carousels/WorkShops/DLCarousel'
import PCBCarousel from '../Carousels/WorkShops/PCBCarousel'
import ROSCarousel from '../Carousels/WorkShops/ROSCarousel'
import IOTCarousel from '../Carousels/WorkShops/IOTCarousel'

import MazeSolving from '../Images/Projects/MazeSolving.png'
import LabAutomation from '../Images/Projects/LabAutomation.jpg'
import JetFire from '../Images/Projects/JetFire.jpg'

import IPAS from '../Images/Participation/IPAS.jpeg'
import SIH from '../Images/Participation/SIH.png'
import Eyantra from '../Images/Participation/Eyantra.png'

import WorkShopsImg from '../Images/WorkShopsImg.png'
import TechnicalEventsImg from '../Images/TechnicalEventsImg.png'
import StudentDevelopmentImg from '../Images/StudentDevelopmentImg.png'

import './Activities.css'
import './ActivitiesPhone.css'

export default function Activities() {
  return (
    <div>
      <div id='ActivitiesHeadID' className="ActivitiesHead">
        <div>
          {/* <h1>Workshops by our Team CiPHER</h1> */}
          <h1>Activities</h1>
          <img className='ActivitiesHeadImgPhone' src={RobotScreen} />
          <p>
            Our team lives by the quote “Knowledge shared is knowledge multiplied” Hence, to help students expand their knowledge, we conduct several workshops, technical events and student development programs. Amidst the global pandemic, we tried our level best to simplify the crux of robotics, by conducting online workshops. We taught students numerous robotics principles and assisted them in implementing those in their projects.          </p>
        </div>
        <img className='ActivitiesHeadImg' src={RobotScreen} />
      </div>

      <div className="ActivitiesHead">
        <div className='ProjectContainer'>
          <span>
            Workshops
          </span>
          <img src={WorkShopsImg} />
          <p>
            We host several workshops for students to introduce them to the realm of robotics through project based learning.
          </p>
        </div>
        <div className='ProjectContainer'>
          <span>
            Technical Events
          </span>
          <img src={TechnicalEventsImg} />
          <p>
            We organize various robotics competitions for our college's technical event (INNOVISION) in association with TRS.
          </p>
        </div>
        <div className='ProjectContainer'>
          <span>
            Student Dev. Prog.
          </span>
          <img src={StudentDevelopmentImg} />
          <p>
            We organize weekly talks with students in association with TRS to introduce them to robotics domain.
          </p>
        </div>
      </div>

      <div className="ProjectHead ActivitiesHead">
        <div>
          <h1 style={{ width: "100%", textAlign: "center" }}>Workshops by our Team CiPHER</h1>
        </div>
      </div>

      <div className="ActivitiesTop">
        <img src={WorkShopHead} />
        <p>
          We conducted a workshop series wherein we covered various topics that included Open CV, CAD Design, Deep Learning, PCB Design, Robotics operating system (ROS), and Getting into the IoT World. All the sessions were held in a very informative and interactive manner, with instructors ensuring every student gets the most out of it.
        </p>
      </div>
      <div className="ActivitiesContentOut">
        <div className='ActivitiesContent'>
          <span>
            OpenCV
          </span>
          <OpenCVCarousel />
          {/* <img src={ActivitiesContent} /> */}
          {/* <p>
            With a never-ending desire to push the boundaries of robotics, our team also believes that
          </p> */}
        </div>
        <div className='ActivitiesContent'>
          <span>
            CAD Design
          </span>
          {/* <img src={ActivitiesContent} /> */}
          <CADCarousel />
          {/* <p>
            With a never-ending desire to push the boundaries of robotics, our team also believes that
          </p> */}
        </div>
        <div className='ActivitiesContent'>
          <span>
            Deep Learning
          </span>
          {/* <img src={ActivitiesContent} /> */}
          <DLCarousel />
          {/* <p>
            With a never-ending desire to push the boundaries of robotics, our team also believes that
          </p> */}
        </div>
        <div className='ActivitiesContent'>
          <span>
            PCB Design
          </span>
          {/* <img src={ActivitiesContent} /> */}
          <PCBCarousel />
          {/* <p>
            With a never-ending desire to push the boundaries of robotics, our team also believes that
          </p> */}
        </div>
        <div className='ActivitiesContent'>
          <span>
            ROS
          </span>
          {/* <img src={ActivitiesContent} /> */}
          <ROSCarousel />
          {/* <p>
            With a never-ending desire to push the boundaries of robotics, our team also believes that
          </p> */}
        </div>
        <div className='ActivitiesContent'>
          <span>
            Getting Into The IOT World
          </span>
          {/* <img src={ActivitiesContent} /> */}
          <IOTCarousel />
          {/* <p>
            With a never-ending desire to push the boundaries of robotics, our team also believes that
          </p> */}
        </div>
      </div>
      <div className="ProjectHead ActivitiesHead">
        <h1 style={{ width: "100%", textAlign: "center" }}>Projects</h1>
      </div>
      <div className='ProjectOut'>
        <div className='ProjectContainer'>
          <span>
            Maze Solver
          </span>
          <img src={MazeSolving} />
          <p>
            A robot that can detect the path without any assistance or help.
          </p>
        </div>
        <div className='ProjectContainer'>
          <span>
            Lab Automation
          </span>
          <img src={LabAutomation} />
          <p>
            Lab Automation using RFID based non-contact technology Lock.
          </p>
        </div>
        <div className='ProjectContainer'>
          <span>
            Jet Fire
          </span>
          <img src={JetFire} />
          <p>
            Modify the robot to include more capability for research purpose.
          </p>
        </div>
      </div>

      <div className="ProjectHead ActivitiesHead">
        <h1 style={{ width: "100%", textAlign: "center" }}>Participation</h1>
      </div>
      <div className='ProjectOut'>
        <div className='ProjectContainer'>
          <span>
            Mars IPAS Challenge
          </span>
          <img src={IPAS} />
          <p>
            Participated in Mars International Planetary Aerial Systems (IPAS) Challenge and designed Mars Aerial System.
          </p>
        </div>
        <div className='ProjectContainer'>
          <span>
            Smart India Hackathon
          </span>
          <img src={SIH} />
          <p>
            Every year our team members participate in Smart India Hackathon to try and test innovative ideas.
          </p>
        </div>
        <div className='ProjectContainer'>
          <span>
            E-Yantra Robotics Competition
          </span>
          <img src={Eyantra} />
          <p>
            Every year our team members participate in eYRC to enhance Robotics skills through project based learning approach.
          </p>
        </div>
      </div>





      {/* <div className="ProjectContainer">
        <span>
          Color Detection and Line Follower
        </span>
        <ColDetCarousel />
        <p>
          With a never-ending desire to push the boundaries of robotics, our team also believes that "Sharing Knowledge ensures the entry of New," thus our team hosts an annual "Robotics workshop" to assist students in expanding their knowledge and diving into the realm of robotics. We teach students numerous robotics principles and assist them in implementing them in their projects. With a never-ending desire to push the boundaries of robotics, our team also believes that "Sharing Knowledge ensures the entry of New," thus our team hosts an annual
        </p>
        <div className='FillProjectSpace'></div>
      </div> */}
      {/* <div className="ProjectContainer">
        <span>
          IPAS
        </span>
        <video className="IPASSliderImgs" controls>
          <source src={IPASSliderVideo} type="video/mp4" />
        </video>
        <p>
          With a never-ending desire to push the boundaries of robotics, our team also believes that "Sharing Knowledge ensures the entry of New," thus our team hosts an annual "Robotics workshop" to assist students in expanding their knowledge and diving into the realm of robotics. We teach students numerous robotics principles and assist them in implementing them in their projects. With a never-ending desire to push the boundaries of robotics, our team also believes that "Sharing Knowledge ensures the entry of New," thus our team hosts an annual
        </p>
      </div> */}

      {/* <div className="ActivitiesContentOut">
        <div className='ActivitiesContentL'>
          <img src={ActivitiesContent} />
          <div className='ActivitiesContentP'></div>
          <p>
            With a never-ending desire to push the boundaries of robotics, our team also believes that "Sharing Knowledge ensures the entry of New," thus our team hosts an annual "Robotics workshop" to assist students in expanding their knowledge and diving into the realm of robotics. We teach students numerous robotics principles and assist them in implementing them in their projects.
          </p>
        </div>
        <div className='ActivitiesContentR'>
          <p>
            With a never-ending desire to push the boundaries of robotics, our team also believes that "Sharing Knowledge ensures the entry of New," thus our team hosts an annual "Robotics workshop" to assist students in expanding their knowledge and diving into the realm of robotics. We teach students numerous robotics principles and assist them in implementing them in their projects.
          </p>
          <div className='ActivitiesContentP'></div>
          <img src={ActivitiesContent} />
        </div>
      </div> */}
    </div >
  )
}
