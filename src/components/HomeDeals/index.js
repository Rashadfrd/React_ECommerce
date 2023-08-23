import React from "react";
import classes from "./style.module.css";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

function Deals() {
  return (
    <section className={classes.dealsOfTheMonth}>
      <div className={classes.dealsLeft}>
        <div className={classes.dealsTitleAndInfo}>
          <h2 className={classes.dealsTitle}>Deals of the Month</h2>
          <p className={classes.dealsInfo}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters
          </p>
        </div>
        <div className={classes.dealsTime}>
          <div className={classes.dealsTimeDay}>
          <CountUp className={classes.dealsTimeNum} end={120} duration={2} /> <span>Days</span>
          </div>
          <div className={classes.dealsTimeHour}>
            <CountUp className={classes.dealsTimeNum} end={18} duration={2} /> <span>Hours</span>
          </div>
          <div className={classes.dealsTimeMinute}>
            <CountUp className={classes.dealsTimeNum} end={15} duration={2} /> <span>Mins</span>
          </div>
          <div className={classes.dealsTimeSecond}>
            <CountUp className={classes.dealsTimeNum} end={10} duration={2} /> <span>Secs</span>
          </div>
        </div>
        <div className={classes.dealsBtnWrapper}></div>
        <Link className={classes.dealsBtn} to="/products">
          View All Products</Link>
      </div>
      <div className={classes.dealsRight}>
        <img
          className={classes.dealsImg}
          src="https://s3-alpha-sig.figma.com/img/76e5/ef3b/704ddc3326a58d85bdba23a54ad1ca1f?Expires=1693785600&Signature=QGGhy7k9ex1WmkGk0N30WjE2G4Q-1bwcRyFNOaUeYvmhP-QJj~hjd87w7OYTmUDZ8rZpBBvkKMxXAVd6kSUEdzSWwk8Lk6LIixXvMQTck46qOLcz6YshdBfb5~n8-6~M5oVbdI-SUX4uOkohE-SjjVca2esmYGT9LqiYCw~9ZlpRaPAWq0R4LmlqmuHmBZqw3kj~4L99h2c-u~64E2xH9giC9J0Wssu~KMZSDu-UkEBlpWyC2ueo~inZexN5j-CkQf3-B50GP97im1NCJIPejx5RWqZj1kQIduinDPCDcwE2y24Bhpvt7RAjwh4A4yNjRaGu0e2py9ky-QuK9Vjv2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
      </div>
    </section>
  );
}

export default Deals;
