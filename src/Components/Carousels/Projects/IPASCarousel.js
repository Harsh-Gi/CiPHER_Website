import React, { useEffect } from 'react'
import '../WorkShops/Carousels.css'
import SliderImg1 from '../../Images/Projects/IPAS.jpeg';
import SliderImg2 from '../../Images/Projects/IPAS.mp4';
export default function IPASCarousel() {

  useEffect(() => {
    const interval = setInterval(() => {
      nextImg();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  let i = 0, sliderPos = 0;
  let sliderImgSrc = [SliderImg1, SliderImg2];
  // let imgSlider = [];
  // for (i = 0; i < sliderImgSrc.length; i++) {
  //   imgSlider.push(<img src={sliderImgSrc[i]} className="sliderImgs IPASSliderImgs ProjectsImgs" alt="Slider" />);
  // }
  i = 0;
  return (
    <>
      <div id='ImageScroller' className="ImageScroller IPASImageScroller ProjectsImgScroller">
        <div className="container" id='IPASSliderContainer'>
          {/* {imgSlider.map((item, index) => {
            return item
          })} */}
          <img src={SliderImg1} className="sliderImgs IPASSliderImgs ProjectsImgs" alt="Slider" />
          <video className="sliderImgs IPASSliderImgs ProjectsImgs" controls>
            <source src={SliderImg2} type="video/mp4" />
          </video>
        </div>
        <button className='prevNextBtn prevBtn' onClick={prevImg}>&#10096;</button>
        <button className='prevNextBtn nextBtn' onClick={nextImg}>&#10097;</button>
      </div>
    </>
  )
  function nextImg() {
    try {
      // let sliderImgs = document.getElementsByClassName('sliderImgs');
      let imgSliderContainer = document.getElementById('IPASSliderContainer');
      if (i === (sliderImgSrc.length - 1)) {
        i = 0;
        sliderPos = 0;
        imgSliderContainer.style.left = sliderPos.toString() + 'vw';
      } else {
        i = i + 1;
        sliderPos = sliderPos - 30;
        imgSliderContainer.style.left = sliderPos.toString() + 'vw';
      }
      console.log("Next " + i + " " + sliderPos);
    } catch (err) { }
  }
  function prevImg() {
    try {
      let imgSliderContainer = document.getElementById('IPASSliderContainer');
      if (i === 0) {
        i = sliderImgSrc.length - 1;
        sliderPos = ((sliderImgSrc.length) * -30) + 30;
        imgSliderContainer.style.left = sliderPos.toString() + 'vw';
      } else {
        i = i - 1;
        sliderPos = sliderPos + 30;
        imgSliderContainer.style.left = sliderPos.toString() + 'vw';
      }
    } catch (err) { }
  }
}