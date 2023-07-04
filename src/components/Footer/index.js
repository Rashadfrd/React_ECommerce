import React from 'react'
import classes from './style.module.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-3.png'
import payment from '../../assets/payment.png'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  const date = new Date();
  const now = date.getFullYear()
  return (
    <div className={classes.box}>
      <div className={classes.container}>
        <div className={classes.footerTop}>
          <div>
            <Link to={'/'}> <img src={logo} alt="" width={80} /></Link>
          </div>
          <div className={classes.footerTopTitle}>
            <p className={classes.pItem}>Subscribe to our Newsletter</p>
            <p className={classes.pItem}>Get all the latest information, Sales and Offers.</p>
          </div>
          <div className={classes.newsLetterFormContainer}>
            <form className={classes.newsLetterForm}>
              <input className={classes.formItem} type="email" placeholder='Email address here...' />
              <button className={classes.submitBtn}>Subscribe</button>
            </form>
          </div>
        </div>
        <hr style={{color:'#fff'}}/>
        <div className={classes.row}>
          <div className={classes.column}>
            <p className={classes.heading}>About Us</p>
            <a className={classes.footerlink} href="#">Aim</a>
            <a className={classes.footerlink} href="#">Vision</a>
            <a className={classes.footerlink} href="#">Testimonials</a>
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
        <hr style={{color:'#fff'}}/>
        <div className={classes.footerBottom}>
          <div> React eCommerce All rights reserved {now}</div>
          <div><img src={payment} width={300} alt="" /></div>
          <div className={classes.socials}>
            <div className={`${classes.socialItem} ${classes.socialFb}`}><BsFacebook color='#fff' /></div>
            <div className={`${classes.socialItem} ${classes.socialInsta}`}><BsInstagram color='#fff' /></div>
            <div className={`${classes.socialItem} ${classes.socialTw}`}><BsTwitter color='#fff' /></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
   