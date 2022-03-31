import React from 'react'
import Tilt from 'react-vanilla-tilt'
// import Lottie from 'react-lottie';
// import animationData from '../Images/RobotGIF1.json'
import RobotGIF from '../Images/RobotGIF.gif'
// import * as LottiePlayer from "@lottiefiles/lottie-player";
import Vision from '../Images/Vision.gif'
import Mission from '../Images/Mission.gif'
import RoboconImg1 from '../Images/RoboconImg1.png'
import RoboconImg2 from '../Images/RoboconImg2.png'
import Sponsors from '../Images/Sponsors.png'
import SMTLogo from '../Images/SMTLogo.png'
import NachiElectronicsLogo from '../Images/NachiElectronicsLogo.png'
import './Home.css'
import './HomePhone.css'

export default function Home() {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice"
  //   }
  // };
  return (
    <div>
      {/* <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script> */}
      <div id='WelcomeSection' className='WelcomeSection'>
        <img className='RobotGIFClass' src={RobotGIF} alt="Robot" />
        {/* <lottie-player className='RobotGIFClass' src="https://assets4.lottiefiles.com/packages/lf20_jh9gfdye.json" background="transparent" speed="1" loop autoplay></lottie-player> */}
        {/* <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        /> */}
        <div>
          <h1>
            Learn • Adapt • Grow
          </h1>
          <p>
            We are Team CiPHER - the official Robocon team of JSPM Rajarshi Shahu College of Engineering, Tathawade, Pune, India. Our team is led by young robotics enthusiasts from various disciplines of engineering who collaborate to construct, design, and innovate robots. Every year, our team competes in an International Robotics Competition - ABU ROBOCON. Along with that, we also host several workshops for students to introduce them to the realm of Robotics.          </p>
        </div>
      </div>
      <div id='VisionOut' className='VisionOut'>
        <img className='VisionImg' src={Vision} alt="Vision" />
        {/* <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_sbemphqa.json" background="transparent" speed="1" loop autoplay /> */}
        {/* <lottie-player style={{ width: '20vw' }} className='VisionName' src="https://assets8.lottiefiles.com/packages/lf20_z0jt5alc.json" background="transparent" speed="1" loop autoplay></lottie-player> */}
        <div>
          <img className='VisionImgPhone' src={Vision} alt="Vision" />
          <span>
            Vision
          </span>
          <p>
            To develop problem-solving and lifelong learning skills in young engineers through a project-based approach and to create a robot-friendly and innovation-based environment.          </p>
        </div>
      </div>
      <div id='MissionOut' className='MissionOut'>
        <div>
          <span>
            Mission
          </span>
          <img className='VisionImgPhone' src={Mission} alt="Mission" />
          <p>
            We, as Team CiPHER, compete every year in ABU Robocon to represent as Team India, putting in endless hours to show that India can lead the world in the field of robotics. We, as a community, strive to connect with diligent, selfless, and enthusiastic individuals.          </p>
        </div>
        <img className='VisionImg' src={Mission} alt="Mission" />
      </div>
      <div id="RoboconOutID">
        <div id='RoboconOut' className="RoboconOut">
          <div className='RoboconHeadingOut'>
            <p className='RoboconHeading'>
              ROBOCON
            </p>
            <p className='RoboconSubHeading'>
              The Asia-Pacific Robot Contest
            </p>
          </div>
          <div className="RoboconDetailOut">
            <span className='roboconDetailHeadPhone'>
              ABU ROBOCON
            </span>
            <img src={RoboconImg1} alt="RoboconImg1" />
            <div>
              <span className='roboconDetailHead'>
                ABU Robocon
              </span>
              <p>
                The Asia-Pacific Robot Contest (ABU Robocon) is an Asian Oceanian College robot competition, founded in 2002 by Asia-Pacific Broadcasting Union. In the competition robots compete to complete a task within a set period of time. The contest aims to create friendship among young people with similar interests who will lead their countries in the 21st century, as well as help advance engineering and broadcasting technologies in the region. The event is broadcast in many countries through ABU member broadcasters.
              </p>
            </div>
          </div>
          <div className="RoboconDetailOut">
            <span className='roboconDetailHeadPhone'>
              DD Robocon India
            </span>
            <img src={RoboconImg2} alt="RoboconImg2" />
            <div>
              <span className='roboconDetailHead'>
                DD Robocon India
              </span>
              <p>
                Doordarshan Robocon India 2022 (DD Robocon) is a National Competition organized by IIT Delhi for Asian-Oceanian college robot competition, organized internationally by Asia-Pacific Broadcasting Union. In the competition robots compete to complete a task within a set period of time. The contest aims to create friendship among young people with similar interests who will lead their countries in the 21st century, as well as help advance engineering and broadcasting technologies in the region.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id='Sponsors' className='Sponsors'>
        <p>
          Our Proud Sponsors
        </p>
        <div>
          <img src={SMTLogo} alt='SMTLogo' />
          <img src={NachiElectronicsLogo} alt='NachiElectronicsLogo' />
        </div>
      </div>
    </div>
  )
}
