import React from 'react'
import Slider from 'react-slick'

const SlickSlider = ({ data = [], Item, countElement = 1 }) => {
  const settings = {
    slidesToShow: countElement,
    slidesToScroll: countElement,
    dots: false,
    infinite: true,
    speed: 500,
  }

  return (
    <div>
      <Slider {...settings}>
        {data?.map(
          () => (
            <Item />
          )
        )}
      </Slider>
    </div>
  )
}
export default SlickSlider
