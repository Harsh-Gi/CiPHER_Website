import React, { useEffect } from 'react'
import './Carousels.css'
import SliderImg1 from '../../Images/WorkShops/DL/DL1.jpeg';
import SliderImg2 from '../../Images/WorkShops/DL/DL2.jpeg';
import SliderImg3 from '../../Images/WorkShops/DL/DL3.jpeg';
import SliderImg4 from '../../Images/WorkShops/DL/DL4.jpeg';
import SliderImg5 from '../../Images/WorkShops/DL/DL5.jpeg';
import SliderImg6 from '../../Images/WorkShops/DL/DLStory.jpg';
export default function DLCarousel() {

  useEffect(() => {
    const interval = setInterval(() => {
      nextImg();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  let i = 0, sliderPos = 0;
  let sliderImgSrc = [SliderImg6, SliderImg1, SliderImg2, SliderImg3, SliderImg4, SliderImg5];
  let imgSlider = [];
  for (i = 0; i < sliderImgSrc.length; i++) {
    imgSlider.push(<img src={sliderImgSrc[i]} className="sliderImgs DLSliderImgs WorkshopsImgs" alt="Slider" />);
  }
  i = 0;
  return (
    <>
      <div id='ImageScroller' className="ImageScroller DLImageScroller WorkshopsImgScroller">
        <div className="container" id='DLSliderContainer'>
          {imgSlider.map((item, index) => {
            return item
          })}
        </div>
        <button className='prevNextBtn prevBtn' onClick={prevImg}>&#10096;</button>
        <button className='prevNextBtn nextBtn' onClick={nextImg}>&#10097;</button>
      </div>
    </>
  )
  function nextImg() {
    try {
      // let sliderImgs = document.getElementsByClassName('sliderImgs');
      let imgSliderContainer = document.getElementById('DLSliderContainer');
      if (i === (sliderImgSrc.length - 1)) {
        i = 0;
        sliderPos = 0;
        imgSliderContainer.style.left = sliderPos.toString() + 'vw';
      } else {
        i = i + 1;
        sliderPos = sliderPos - 36.5;
        imgSliderContainer.style.left = sliderPos.toString() + 'vw';
      }
      console.log("Next " + i + " " + sliderPos);
    } catch (err) { }
  }
  function prevImg() {
    try {
      let imgSliderContainer = document.getElementById('DLSliderContainer');
      if (i === 0) {
        i = sliderImgSrc.length - 1;
        sliderPos = ((sliderImgSrc.length) * -36.5) + 36.5;
        imgSliderContainer.style.left = sliderPos.toString() + 'vw';
      } else {
        i = i - 1;
        sliderPos = sliderPos + 36.5;
        imgSliderContainer.style.left = sliderPos.toString() + 'vw';
      }
    } catch (err) { }
  }
}