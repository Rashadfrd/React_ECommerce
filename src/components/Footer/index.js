import React from 'react'
import classes from './style.module.css'

const Footer = () => {
  return (
    <div className={classes.box}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.column}>
            <p className={classes.heading}>About Us</p>
            <a className={classes.footerlink} href="#">Aim</a>
            <a className={classes.footerlink} href="#">Vision</a>
            <a className={classes.footerlink} href="#">Testimonials</a>
          </div>
          <div className={classes.column}>
            <p className={classes.heading}>Services</p>
            <a className={classes.footerlink} href="#">Writing</a>
            <a className={classes.footerlink} href="#">Internships</a>
            <a className={classes.footerlink} href="#">Coding</a>
            <a className={classes.footerlink} href="#">Teaching</a>
          </div>
          <div className={classes.column}>
            <p className={classes.heading}>Contact Us</p>
            <a className={classes.footerlink} href="#">Uttar Pradesh</a>
            <a className={classes.footerlink} href="#">Ahemdabad</a>
            <a className={classes.footerlink} href="#">Indore</a>
            <a className={classes.footerlink} href="#">Mumbai</a>
          </div>
          <div className={classes.column}>
            <p className={classes.heading}>Social Media</p>
            <a className={classes.footerlink} href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </a>
            <a className={classes.footerlink} href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </a>
            <a className={classes.footerlink} href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </a>
            <a className={classes.footerlink} href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
   