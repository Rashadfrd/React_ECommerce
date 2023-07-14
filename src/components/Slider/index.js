import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import classes from './style.module.css'
import {BsChevronUp}  from 'react-icons/bs'

function Sliderr() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', toggleVisibility);
  
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  return (
  <>
    {ReactDOM.createPortal(
      <div onClick={scrollToTop} className={`${classes.slider} ${isVisible ? null : classes.hide}`}>
      <BsChevronUp size={26} color='#fff' />
    </div>,
    document.getElementById('slideToTop')
    )}
    </>
  )
}

export default Sliderr
