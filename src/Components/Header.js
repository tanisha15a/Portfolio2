import React from "react";
import Typical from "react-typical";
import profileImg from "../assets/profileImg.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      {/*header content*/}
      <div className="header-content">
        <h1>Hy! Am</h1>
        <h2 className="fullname">Emmanuel Tweneboah</h2>
        <h2>
          I'm a{""}
          <Typical
            steps={[
              "Full Stack Developer 🚀 ",
              1000,
              "Frontend Developer ✅ ",
              1000,
              "Backend Developer 🏆",
              1000,
              "React Developer ⚛️",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          information alert Schedule learning time Learning a little each day
          adds up. Research shows that students who make learning a habit are
          more likely to reach their goals. Set time aside to learn and get
          reminders using your learning scheduler.
        </p>
        {/*Payment Links*/}
        <div className="header-payment-container">
          <button>Hire Me</button>
          <i class="fa-brands fa-paypal"></i>
          <i class="fa-brands fa-cc-visa"></i>
          <i class="fa-brands fa-cc-mastercard"></i>
          <i class="fa-brands fa-cc-amex"></i>
        </div>
      </div>
      {/*Image Container*/}
      <div className="profile-img-container">
        <img src={profileImg} alt="" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;
