import React from 'react'
import Slider from "react-slick";
import classes from './style.module.css'
import { partners } from '../../utils/constants';

function Partners() {
    var settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4,
              dots: false,
              className: "center",
              infinite: true,
              centerPadding: "60px",
              swipeToSlide: true,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 3,
              dots: false,
              className: "center",
              infinite: true,
              centerPadding: "60px",
              swipeToSlide: true,
            }
          },
          {
            breakpoint: 735,
            settings: {
              slidesToShow: 3,
              dots: false,
              className: "center",
              infinite: true,
              centerPadding: "60px",
              swipeToSlide: true,
            }
          },
        ]
      };
  return (
    <section className={classes.partners}>
        <div className={classes.container}>
            <Slider {...settings}>
                {
                    partners.map((item) => {
                        return (
                            <div key={item.id} className={classes.partner}>
                                <img className={classes.partnerItem} src={item.src} alt="" />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    </section>
  )
}

export default Partners
