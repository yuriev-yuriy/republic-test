import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./BottomSlider.module.css";
import first from "../../images/first.png";
import second from "../../images/second.png";
import third from "../../images/third.png";
import fourth from "../../images/fourth.png";
import fifth from "../../images/fifth.png";
import sixth from "../../images/sixth.png";
import seventh from "../../images/seventh.png";
import eighth from "../../images/eighth.png";
import ninth from "../../images/ninth.png";

export default function BottomSlider() {
  const dots = "slick-dots" + " " + "dots";
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.05,
    slidesToScroll: 1,
    variableWidth: true,
    dotsClass: dots,
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Choose your profession for more details</h2>
      <Slider {...settings}>
        <div className={s.wrap}>
          <img className={s.img} src={first} alt="Sales Agent" />
          <p className={s.p}>Sales Agent</p>
        </div>
        <div className={s.wrap}>
          <img className={s.img} src={second} alt="Сity Business Owner" />
          <p>Сity Business Owner</p>
        </div>
        <div className={s.wrap}>
          <img className={s.img} src={third} alt="Tutor" />
          <p className={s.p}>Tutor</p>
        </div>
        <div className={s.wrap}>
          <img className={s.img} src={fourth} alt="Financial Advisor" />
          <p className={s.p}>Financial Advisor</p>
        </div>
        <div className={s.wrap}>
          <img className={s.img} src={fifth} alt="Personal Care Giver" />
          <p className={s.p}>Personal Care Giver</p>
        </div>
        <div>
          <div className={s.wrap}>
            <img className={s.img} src={sixth} alt="Yoga Trainer" />
            <p className={s.p}>Yoga Trainer</p>
          </div>
        </div>
        <div className={s.wrap}>
          <img className={s.img} src={seventh} alt="Nutritionist" />
          <p className={s.p}>Nutritionist</p>
        </div>
        <div className={s.wrap}>
          <img className={s.img} src={eighth} alt="Astrologer" />
          <p className={s.p}>Astrologer</p>
        </div>
        <div className={s.wrap}>
          <img className={s.img} src={ninth} alt="Senior Care Director" />
          <p className={s.p}>Senior Care Director</p>
        </div>
      </Slider>
    </div>
  );
}
