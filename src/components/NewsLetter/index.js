import React from "react";
import classes from "./style.module.css";

function NewsLetter() {
  return (
    <section className={classes.newsLetterSection}>
      <div className={classes.newsLetter}>
        <div className={classes.newsLetterLeft}>
          <div className={classes.newsLetterTitle}>
            <h2 className={classes.title}>Join Our Big newsletter.</h2>
            <h2 className={classes.title}>Enjoy Big Discounts.</h2>
          </div>
          <div className={classes.newsLetterFormWrapper}>
            <form className={classes.newsLetterForm}>
              <div className={classes.formItem}>
                <span className={classes.formItemicon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.07667 7.03075C4.23291 6.51858 4.70918 6.146 5.27246 6.146H19.2725C19.8358 6.146 20.312 6.51858 20.4683 7.03075L12.2725 12.4946L4.07667 7.03075ZM2.5225 7.38226C2.52236 7.39026 2.52235 7.39826 2.52246 7.40625V17.396C2.52246 18.9148 3.75368 20.146 5.27246 20.146H19.2725C20.7912 20.146 22.0225 18.9148 22.0225 17.396V7.40622M20.5225 8.79738V17.396C20.5225 18.0864 19.9628 18.646 19.2725 18.646H5.27246C4.58211 18.646 4.02246 18.0864 4.02246 17.396V8.79738L11.8564 14.02C12.1084 14.188 12.4366 14.188 12.6885 14.02L20.5225 8.79738ZM22.0224 7.38229C22.015 5.86981 20.7867 4.646 19.2725 4.646H5.27246C3.75826 4.646 2.52989 5.8698 2.5225 7.38226"
                      fill="#121212"
                    />
                  </svg>
                </span>
                <input
                  className={classes.formItemInput}
                  type="email"
                  placeholder="Your email"
                />
                <button className={classes.formItemBtn} type="submit">
                  SignUp
                </button>
              </div>
              <div className={classes.formItemCheckbox}>
                <input
                  className={classes.checkbox}
                  id="checkbox"
                  type="checkbox"
                />
                <label htmlFor="checkbox">
                  I agree to receive marketing emails
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className={classes.newsLetterRight}>
          <img
            className={classes.newsLetterImg}
            src="https://s3-alpha-sig.figma.com/img/d789/79cf/de98deead1d2a0d328b9ef8711fc6007?Expires=1693785600&Signature=gMkhc-mcA7MtcjrjLhu7JRRx3lplS968lBquS-uAi9CZn3qLnoADfzeVJTfq2tlbT-CJUI6LzDcZCT7BImHeI~Ye2lStMj-E2j306aK9T0MQhy3U-plsz-u4v3n6BqdhRIN8NRudgRZOZMQw26wXqQ4QzL68DR65lyz5dr7pPlQNGGIquis~LmW0ztN4rapLjsR6GLyclRNnMp7Wa9NPx~lu3M2MKTch5QyiPoSdIhgMtNVTChNMQNIMIdY69j7W~Pb4LPyfa-uRUNus-cIv6rT8cRKQBYpYG4y56nLj7dY8JrGYqYsJGZlrO9MG0NzEAo5M4xp6G9Ibjz1CN-Tn3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
