import React from "react";
import classes from "./style.module.css";
import CountUp from "react-countup";

function CompanyServices() {
  return (
    <section className={classes.companyServices}>
      <div className={classes.serviceItem}>
        <div className={classes.serviceItemLeft}>
          <span className={classes.serviceItemTitle}>01. What We Do</span>
          <h2 className={classes.serviceItemSubTitle}>
            Provide perfect services
          </h2>
          <p className={classes.serviceItemDesc}>
            Lorem quis bibendum auctar, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
        </div>
        <div className={classes.serviceItemRight}>
          <div className={classes.serviceItemCard}>
            <CountUp
              className={classes.serviceItemCardYear}
              end={120}
              duration={3}
            />
            <span className={classes.serviceItemCardTitle}>Business Year</span>
            <p className={classes.serviceItemCardDesc}>
              Lorem ipsum dolor sit amet, conctetur adipisci elit. viverra erat
              orci.
            </p>
          </div>
          <div className={classes.serviceItemCard}>
            <CountUp
              className={classes.serviceItemCardYear}
              end={120}
              duration={3}
            />
            <span className={classes.serviceItemCardTitle}>Business Year</span>
            <p className={classes.serviceItemCardDesc}>
              Lorem ipsum dolor sit amet, conctetur adipisci elit. viverra erat
              orci.
            </p>
          </div>
          <div className={classes.serviceItemCard}>
            <CountUp
              className={classes.serviceItemCardYear}
              end={120}
              duration={3}
            />
            <span className={classes.serviceItemCardTitle}>Business Year</span>
            <p className={classes.serviceItemCardDesc}>
              Lorem ipsum dolor sit amet, conctetur adipisci elit. viverra erat
              orci.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.serviceItemEven}>
        <div className={classes.serviceItemEvenLeft}>
          <span className={classes.serviceItemTitle}>02. Happy Customer</span>
          <h2 className={classes.serviceItemSubTitle}>
            Provide fashionable and qualifed products
          </h2>
          <p className={classes.serviceItemDesc}>
            Already millions of people are very satisfied by thi. s page builder
            and the number is growing more and more. Technolog developing,
            requirements are increasing. Riode has brought.
          </p>
        </div>
        <div className={classes.serviceItemEvenRight}>
          <img
            className={classes.serviceItemImg}
            src="https://s3-alpha-sig.figma.com/img/6025/f21e/7b2eebd54d8e608706d18bd3897e6da2?Expires=1694390400&Signature=I8zd62go7wnzuyvrpaXcDN-prFDMrPoT-qvQRAZUKRNIMGb7H5NnQgvR5z6KSFgEe6Rf-gEM3hCjSpdlpeh2pXeJQH2pxt8~uSJJ3GHtcy4M3bNtmK5FuKwSWlE9fYmURBE6ZEd61Oj7mCf3a78VjucfQbbJLXG0eO8w6bXZOKo4vek0MwYS62zhLS951IcQ4ciQBJtOvxJwtROk687olLJf3v6b5XY5wUUGe2KZ1tus82LbYl7MsAwNsXV9onPkvRTTGra0imoCECzu4b7Khtj7SPz3mZudtFA~XNbuMwngqdghQVCekjgJInix931p-h9NA43vLA7Mhp2yihJAYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>
      </div>
      <div className={classes.serviceItemOdd}>
        <div className={classes.serviceItemOddLeft}>
          <span className={classes.serviceItemTitle}>03. Our Store</span>
          <h2 className={classes.serviceItemSubTitle}>
            Expect Restless Amazing Support
          </h2>
          <p className={classes.serviceItemDesc}>
            Already millions of people are very satisfied by thi. s page builder
            and the number is growing more and more. Technolog developing,
            requirements are increasing. Riode has brought.
          </p>
        </div>
        <div className={classes.serviceItemEvenRight}>
          <img
            className={classes.serviceItemImg}
            src="https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?cs=srgb&dl=pexels-shane-aldendorff-786003.jpg&fm=jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default CompanyServices;
