import React from 'react'
import Slider from 'react-slick'

const SlickSlider = ({ data = [], fade=true, Item, countElement = 1, secondSettings={}, deleteTicket }) => {
  const settings = {
    slidesToShow: countElement,
    slidesToScroll: countElement,
    autoplay: true,
    dots: true,
    // infinite: true,
    arrows: false,
    speed: 1000,
    ...secondSettings,
  }

  return (
    <div>
      <Slider {...settings}>
        {data?.map(
          (item ,index) => (
            <Item key={index} data={item} deleteTicket={deleteTicket} />
          )
        )}
      </Slider>
    </div>
  )
}
export default SlickSlider
