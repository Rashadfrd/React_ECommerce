import React from 'react'
import classes from './index.module.css'
import { Link } from 'react-router-dom'

function Deals() {
  return (
    <section className={classes.dealsOfTheMonth}>
      <div className={classes.dealsLeft}>
        <div className={classes.dealsTitle}>
            <h2>Deals of the Month</h2>
            <p className={classes.dealsInfo}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
        </div>
        <div className={classes.dealsTime}>
        <div className={classes.dealsTimeDay}><span className={classes.dealsTimeNum}>120</span> <span>Days</span></div>
        <div className={classes.dealsTimeHour}><span className={classes.dealsTimeNum}>18</span> <span>Hours</span></div>
        <div className={classes.dealsTimeMinute}><span className={classes.dealsTimeNum}>15</span> <span>Mins</span></div>
        <div className={classes.dealsTimeSecond}><span className={classes.dealsTimeNum}>10</span> <span>Secs</span></div>
        </div>
        <div className={classes.dealsBtnWrapper}>
        </div>
            <Link className={classes.dealsBtn} to='/products'>View All Products → </Link>
      </div>
      <div className={classes.dealsRight}>
        <img className={classes.dealsImg} src="https://s3-alpha-sig.figma.com/img/76e5/ef3b/704ddc3326a58d85bdba23a54ad1ca1f?Expires=1693785600&Signature=QGGhy7k9ex1WmkGk0N30WjE2G4Q-1bwcRyFNOaUeYvmhP-QJj~hjd87w7OYTmUDZ8rZpBBvkKMxXAVd6kSUEdzSWwk8Lk6LIixXvMQTck46qOLcz6YshdBfb5~n8-6~M5oVbdI-SUX4uOkohE-SjjVca2esmYGT9LqiYCw~9ZlpRaPAWq0R4LmlqmuHmBZqw3kj~4L99h2c-u~64E2xH9giC9J0Wssu~KMZSDu-UkEBlpWyC2ueo~inZexN5j-CkQf3-B50GP97im1NCJIPejx5RWqZj1kQIduinDPCDcwE2y24Bhpvt7RAjwh4A4yNjRaGu0e2py9ky-QuK9Vjv2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
      </div>
    </section>
  )
}

export default Deals
