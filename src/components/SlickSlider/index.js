import React from 'react'
import Slider from 'react-slick'

const SlickSlider = ({ data = [], Item, countElement = 1, secondSettings={} }) => {
  const settings = {
    slidesToShow: countElement,
    slidesToScroll: countElement,
    autoplay: true,
    dots: true,
    fade: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    ...secondSettings,
  }

  return (
    <div>
      <Slider {...settings}>
        {data?.map(
          (index) => (
            <Item key={index} />
          )
        )}
      </Slider>
    </div>
  )
}
export default SlickSlider
