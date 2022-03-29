import React, { useEffect } from 'react'
import './Carousels.css'
import SliderImg1 from '../../Images/WorkShops/OpenCV/OpenCV1.jpeg';
import SliderImg2 from '../../Images/WorkShops/OpenCV/OpenCV2.jpeg';
import SliderImg3 from '../../Images/WorkShops/OpenCV/OpenCV3.jpeg';
import SliderImg4 from '../../Images/WorkShops/OpenCV/OpenCV4.jpeg';
import SliderImg5 from '../../Images/WorkShops/OpenCV/OpenCV5.jpeg';
import SliderImg6 from '../../Images/WorkShops/OpenCV/OpenCV6.jpeg';
import SliderImg7 from '../../Images/WorkShops/OpenCV/OpenCVStory.jpg';
export default function OpenCVCarousel() {

  useEffect(() => {
    const interval = setInterval(() => {
      nextImg();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  let i = 0, sliderPos = 0;
  let sliderImgSrc = [SliderImg7, SliderImg1, SliderImg2, SliderImg3, SliderImg4, SliderImg5, SliderImg6];
  let imgSlider = [];
  for (i = 0; i < sliderImgSrc.length; i++) {
    imgSlider.push(<img src={sliderImgSrc[i]} className="sliderImgs OpenCVSliderImgs WorkshopsImgs" alt="Slider" />);
  }
  i = 0;
  return (
    <>
      <div id='ImageScroller' className="ImageScroller OpenCVImageScroller WorkshopsImgScroller">
        <div className="container" id='OpenCVSliderContainer'>
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
      let imgSliderContainer = document.getElementById('OpenCVSliderContainer');
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
      let imgSliderContainer = document.getElementById('OpenCVSliderContainer');
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