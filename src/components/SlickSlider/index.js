import React from 'react'
import Slider from 'react-slick'

const SlickSlider = ({ data = [], Item, countElement = 1 }) => {
  const settings = {
    slidesToShow: countElement,
    slidesToScroll: countElement,
    autoplay: true,
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
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
