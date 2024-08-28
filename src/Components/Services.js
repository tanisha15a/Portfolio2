import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-list-container">
        {/*Desciption*/}
        <div className="services-desc-container">
          <h1>
            My Awesome <span>Services</span>
          </h1>
          <p>
            Schedule learning time Learning a little each day adds up. Research
            shows that students who make learning a habit are more likely to
            reach their goals. Set time aside to learn and get reminders using
            your learning scheduler.Schedule learning time Learning a little
            each day adds up. Research shows that students who make learning a
            habit are more likely to reach their goals. Set time aside to learn
            and get reminders using your learning scheduler.
          </p>
          <button>Hire Me</button>
        </div>
        {/*Item*/}
        <div className="services-item-container">
          <div className="services-item">
            <i class="fa-solid fa-code"></i>
            <div className="item-desc">
              <h3>Web Development</h3>
              <p>
                information alert Schedule learning time Learning a little each
                day adds up. Research shows that students who make learning a
                habit are more likely to reach their goals. Set time aside to
                learn and get reminders using your learning scheduler.
              </p>
            </div>
          </div>

          <div className="services-item">
            <i class="fa-solid fa-desktop"></i>
            <div className="item-desc">
              <h3>Desktop Development</h3>
              <p>
                information alert Schedule learning time Learning a little each
                day adds up. Research shows that students who make learning a
                habit are more likely to reach their goals. Set time aside to
                learn and get reminders using your learning scheduler.
              </p>
            </div>
          </div>

          <div className="services-item">
            <i class="fa-solid fa-tablet-alt"></i>
            <div className="item-desc">
              <h3>U/X Design</h3>
              <p>
                information alert Schedule learning time Learning a little each
                day adds up. Research shows that students who make learning a
                habit are more likely to reach their goals. Set time aside to
                learn and get reminders using your learning scheduler.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
