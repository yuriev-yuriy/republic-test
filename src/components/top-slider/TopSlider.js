import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classNames from "classnames";
import s from "./TopSlider.module.css";

export default function TopSlider() {
  const dots = "slick-dots" + " " + "pins";
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: dots,
  };
  return (
    <React.Fragment>
      <h1 className={s.title}>Why our Directory</h1>
      <Slider className={s.frag} {...settings}>
        <div>
          <div className={s.wrap}>
            <div className={classNames(s.img, s.puzzle)}></div>
            <h3 className={s.subtitle}>Offer coupons</h3>
            <p className={s.text}>
              Grow your customer base by offering free coupons that are
              advertised on social media and discoverable through Google search.
              No hidden or upfront fees and you get a free professional profile.
              Engage your customers and leads while expanding your business.
            </p>
          </div>
        </div>
        <div>
          <div className={classNames(s.img, s.search)}></div>
          <h3 className={s.subtitle}>Search and discover</h3>
          <p className={s.text}>
            Our directory is accessed by families across US and Canada to find
            local service providers and facilities by profession, services
            offered, or ratings and rankingsWe match families based on their
            needs.
          </p>
        </div>
        <div>
          <div className={classNames(s.img, s.note)}></div>
          <h3 className={s.subtitle}>Improve satisfaction</h3>
          <p className={s.text}>
            Get higher ratings and better reviews through transparency,
            media-rich profiles, engaging social blog, professional articles,
            and accreditation.Create events to promote your business and
            advertise them on social media.
          </p>
        </div>
        <div>
          <div className={classNames(s.img, s.idea)}></div>
          <h3 className={s.subtitle}>Profile Boosting</h3>
          <p className={s.text}>
            Get more referrals through improved ratings and reviews, performance
            monitoring, recommendations from other professionals, and profile
            search boosting. Your profiles are discoverable on Google search.
          </p>
        </div>
      </Slider>
    </React.Fragment>
  );
}
