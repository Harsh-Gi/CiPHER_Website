import React, { useEffect } from 'react'
import '../WorkShops/Carousels.css'
import SliderImg1 from '../../Images/Projects/ColDet1.jpg';
import SliderImg2 from '../../Images/Projects/ColDet2.jpg';
export default function ColDetCarousel() {

  useEffect(() => {
    const interval = setInterval(() => {
      nextImg();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  let i = 0, sliderPos = 0;
  let sliderImgSrc = [SliderImg1, SliderImg2];
  let imgSlider = [];
  for (i = 0; i < sliderImgSrc.length; i++) {
    imgSlider.push(<img src={sliderImgSrc[i]} className="sliderImgs ColDetSliderImgs ProjectsImgs" alt="Slider" />);
  }
  i = 0;
  return (
    <>
      <div id='ImageScroller' className="ImageScroller ColDetImageScroller ProjectsImgScroller">
        <div className="container" id='ColDetSliderContainer'>
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
      let imgSliderContainer = document.getElementById('ColDetSliderContainer');
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
      let imgSliderContainer = document.getElementById('ColDetSliderContainer');
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