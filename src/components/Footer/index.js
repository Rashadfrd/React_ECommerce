import React from 'react'
import classes from './style.module.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-2.png'
import payment from '../../assets/payment.png'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  const date = new Date();
  const now = date.getFullYear()
  return (
    // <div className={classes.box}>
    //   <div className={classes.container}>
    //     <div className={classes.row}>
    //       <div className={classes.column}>
    //         <p className={classes.heading}>About Us</p>
    //         <a className={classes.footerlink} href="#">Aim</a>
    //         <a className={classes.footerlink} href="#">Vision</a>
    //         <a className={classes.footerlink} href="#">Testimonials</a>
    //         <a className={classes.footerlink} href="#">Testimonials</a>
    //       </div>
    //       <div className={classes.column}>
    //         <p className={classes.heading}>Services</p>
    //         <a className={classes.footerlink} href="#">Writing</a>
    //         <a className={classes.footerlink} href="#">Internships</a>
    //         <a className={classes.footerlink} href="#">Coding</a>
    //         <a className={classes.footerlink} href="#">Teaching</a>
    //       </div>
    //       <div className={classes.column}>
    //         <p className={classes.heading}>Contact Us</p>
    //         <a className={classes.footerlink} href="#">Uttar Pradesh</a>
    //         <a className={classes.footerlink} href="#">Ahemdabad</a>
    //         <a className={classes.footerlink} href="#">Indore</a>
    //         <a className={classes.footerlink} href="#">Mumbai</a>
    //       </div>
    //       <div className={classes.column}>
    //         <p className={classes.heading}>Social Media</p>
    //         <a className={classes.footerlink} href="#">
    //           <i className="fab fa-facebook-f">
    //             <span style={{ marginLeft: "10px" }}>
    //               Facebook
    //             </span>
    //           </i>
    //         </a>
    //         <a className={classes.footerlink} href="#">
    //           <i className="fab fa-instagram">
    //             <span style={{ marginLeft: "10px" }}>
    //               Instagram
    //             </span>
    //           </i>
    //         </a>
    //         <a className={classes.footerlink} href="#">
    //           <i className="fab fa-twitter">
    //             <span style={{ marginLeft: "10px" }}>
    //               Twitter
    //             </span>
    //           </i>
    //         </a>
    //         <a className={classes.footerlink} href="#">
    //           <i className="fab fa-youtube">
    //             <span style={{ marginLeft: "10px" }}>
    //               Youtube
    //             </span>
    //           </i>
    //         </a>
    //       </div>
    //     </div>
    //     <hr style={{color:'#fff'}}/>
    //     <div className={classes.footerBottom}>
    //       <div> React eCommerce All rights reserved {now}</div>
    //       <div><img src={payment} width={300} alt="" /></div>
    //       <div className={classes.socials}>
    //         <div className={`${classes.socialItem} ${classes.socialFb}`}><BsFacebook color='#fff' /></div>
    //         <div className={`${classes.socialItem} ${classes.socialInsta}`}><BsInstagram color='#fff' /></div>
    //         <div className={`${classes.socialItem} ${classes.socialTw}`}><BsTwitter color='#fff' /></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section className={classes.footer}>
    <footer className={classes.top}>
      <img src={logo} />
      <div className={classes.links}>
        <div className={classes.linksColumn}>
          <h2>Get Started</h2>
          <a>Introduction</a>
          <a>Documentation</a>
          <a>Usage</a>
          <a>Globals</a>
          <a>Elements</a>
        </div>
        <div className={classes.linksColumn}>
          <h2>Resources</h2>
          <a>API</a>
          <a>Visibility</a>
          <a>Accessibility</a>
          <a>Community</a>
          <a>Marketplace</a>
        </div>
        <div className={`${classes.socialsColumn}`}>
          <h2>Social Media</h2>
          <p>
            Follow us on social media to find out the latest updates on our
            progress.
          </p>
          <div className={classes.socials}>
            <BsFacebook className={`${classes.socialItem} ${classes.socialFb}`} size={24} />
            <BsInstagram className={`${classes.socialItem} ${classes.socialInsta}`} size={24} />
            <BsTwitter className={`${classes.socialItem} ${classes.socialTw}`} size={24} />
          </div>
        </div>
      </div>
    </footer>
    <footer className={classes.bottom}>
      <p className={classes.copyright}>© 2023 All rights reserved</p>
      <div className={classes.legal}>
        <a> License </a>
        <a> Terms </a>
        <a> Privacy </a>
      </div>
    </footer>
  </section>
  );
};
export default Footer;
   