import React from 'react'
import RobotScreen from '../Images/RobotScreen.gif'
import ActivitiesTop from '../Images/ActivitiesTop.png'
import ActivitiesContent from '../Images/ActivitiesContent.png'
import WorkShopHead from '../Images/WorkShops/WorkShopHead.jpeg'

import OpenCVCarousel from '../Carousels/WorkShops/OpenCVCarousel'
import CADCarousel from '../Carousels/WorkShops/CADCarousel'
import DLCarousel from '../Carousels/WorkShops/DLCarousel'
import PCBCarousel from '../Carousels/WorkShops/PCBCarousel'
import ROSCarousel from '../Carousels/WorkShops/ROSCarousel'
import IOTCarousel from '../Carousels/WorkShops/IOTCarousel'

import ColDetCarousel from '../Carousels/Projects/ColDetCarousel'
import IPASCarousel from '../Carousels/Projects/IPASCarousel'

import IPASSliderVideo from '../Images/Projects/IPAS.mp4';

import './Activities.css'
import './ActivitiesPhone.css'

export default function Activities() {
  return (
    <div>
      <div id='ActivitiesHeadID' className="ActivitiesHead">
        <div>
          <h1>Workshops by our Team CiPHER</h1>
          <img className='ActivitiesHeadImgPhone' src={RobotScreen} />
          <p>
            With a never-ending desire to push the boundaries of robotics, our team also believes that "Sharing Knowledge ensures the entry of New," thus our team hosts an annual "Robotics workshop" to assist students in expanding their knowledge and diving into the realm of robotics. We teach students numerous robotics principles and assist them in implementing them in their projects.
          </p>
        </div>
        <img className='ActivitiesHeadImg' src={RobotScreen} />
      </div>
      <div className="ActivitiesTop">
        <img src={WorkShopHead} />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
        </p>
      </div>
      <div className="ActivitiesContentOut">
        <div className='ActivitiesContent'>
          <span>
            OpenCV
          </span>
          <OpenCVCarousel />
          {/* <img src={ActivitiesContent} /> */}
          <p>
            With a never-ending desire to push the boundaries of robotics, our team also believes that
          </p>
        </div>
        <div className='ActivitiesContent'>
          <span>
            CAD Design
          </span>
          {/* <img src={ActivitiesContent} /> */}
          <CADCarousel />
          <p>
            With a never-ending desire to push the boundaries of robotics, our team also believes that
          </p>
        </div>
        <div className='ActivitiesContent'>
          <span>
            Deep Learning
          </span>
          {/* <img src={ActivitiesContent} /> */}
          <DLCarousel />
          <p>
            With a never-ending desire to push the boundaries of robotics, our team also believes that
          </p>
        </div>
        <div className='ActivitiesContent'>
          <span>
            PCB Design
          </span>
          {/* <img src={ActivitiesContent} /> */}
          <PCBCarousel />
          <p>
            With a never-ending desire to push the boundaries of robotics, our team also believes that
          </p>
        </div>
        <div className='ActivitiesContent'>
          <span>
            ROS
          </span>
          {/* <img src={ActivitiesContent} /> */}
          <ROSCarousel />
          <p>
            With a never-ending desire to push the boundaries of robotics, our team also believes that
          </p>
        </div>
        <div className='ActivitiesContent'>
          <span>
            Getting Into The IOT World
          </span>
          {/* <img src={ActivitiesContent} /> */}
          <IOTCarousel />
          <p>
            With a never-ending desire to push the boundaries of robotics, our team also believes that
          </p>
        </div>
      </div>
      <div className="ActivitiesHead ProjectHead">
        <h1>Projects</h1>
      </div>
      <div className="ProjectContainer">
        <span>
          Color Detection and Line Follower
        </span>
        {/* <img src={ActivitiesContent} /> */}
        <ColDetCarousel />
        <p>
          With a never-ending desire to push the boundaries of robotics, our team also believes that "Sharing Knowledge ensures the entry of New," thus our team hosts an annual "Robotics workshop" to assist students in expanding their knowledge and diving into the realm of robotics. We teach students numerous robotics principles and assist them in implementing them in their projects. With a never-ending desire to push the boundaries of robotics, our team also believes that "Sharing Knowledge ensures the entry of New," thus our team hosts an annual
        </p>
        <div className='FillProjectSpace'></div>
      </div>
      <div className="ProjectContainer">
        <span>
          IPAS
        </span>
        {/* <img src={ActivitiesContent} /> */}
        {/* <IPASCarousel /> */}
        <video className="IPASSliderImgs" controls>
          <source src={IPASSliderVideo} type="video/mp4" />
        </video>
        <p>
          With a never-ending desire to push the boundaries of robotics, our team also believes that "Sharing Knowledge ensures the entry of New," thus our team hosts an annual "Robotics workshop" to assist students in expanding their knowledge and diving into the realm of robotics. We teach students numerous robotics principles and assist them in implementing them in their projects. With a never-ending desire to push the boundaries of robotics, our team also believes that "Sharing Knowledge ensures the entry of New," thus our team hosts an annual
        </p>
      </div>
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
    </div>
  )
}
