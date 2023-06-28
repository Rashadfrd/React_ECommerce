import React from 'react'
import Slider from "react-slick";
import classes from './style.module.css'

function Partners() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <section className={classes.partners}>
      <Slider {...settings}>
          <div className={classes.partner}>
            <img className={classes.partnerItem} src="https://kontakt.az/wp-content/uploads/2020/03/Acer_png.webp" alt="" />
          </div>
          <div className={classes.partner}>
            <img className={classes.partnerItem} src="https://kontakt.az/wp-content/uploads/2020/03/Acer_png.webp" alt="" />
          </div>
          <div className={classes.partner}>
            <img className={classes.partnerItem} src="https://kontakt.az/wp-content/uploads/2020/03/Acer_png.webp" alt="" />
          </div>
          <div className={classes.partner}>
            <img className={classes.partnerItem} src="https://kontakt.az/wp-content/uploads/2020/03/Acer_png.webp" alt="" />
          </div>
          <div className={classes.partner}>
            <img className={classes.partnerItem} src="https://kontakt.az/wp-content/uploads/2020/03/Acer_png.webp" alt="" />
          </div>
          <div className={classes.partner}>
            <img className={classes.partnerItem} src="https://kontakt.az/wp-content/uploads/2020/03/Acer_png.webp" alt="" />
          </div>
          <div className={classes.partner}>
            <img className={classes.partnerItem} src="https://kontakt.az/wp-content/uploads/2020/03/Acer_png.webp" alt="" />
          </div>
          <div className={classes.partner}>
            <img className={classes.partnerItem} src="https://kontakt.az/wp-content/uploads/2020/03/Acer_png.webp" alt="" />
          </div>
        </Slider>
    </section>
  )
}

export default Partners
