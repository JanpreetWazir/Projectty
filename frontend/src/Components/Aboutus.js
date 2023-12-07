import React, { forwardRef } from "react";
import SvgImage from "../Assets/sports.jpg";
import "../Style/Aboutus.css";

const AboutComponent = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="py-3 py-md-5 py-xl-8 try">
      <div className="container">
      <div className="text-[50px] font-bold text-center gradient-text event_section_heading mt-5 text-black ">
          About Us
        </div>
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-md-6">
            {/* 50% width for the image */}
            <img
              className="img-fluid rounded sizeimg"
              loading="lazy"
              src={SvgImage}
              alt=""
              style={{ width: '100%', margin: 0, padding: 0 }}
            />
          </div>
          <div className="col-12 col-md-6">
            {/* 50% width for the text */}
            <div className="row justify-content-center">
              <div className="col-12 col-xl-11">
                <p className="lead mb-1 aboutfont">
                Our Sports Club, established in [year], is a nonprofit organization passionately dedicated to fostering a love for sports and physical activity within our community. Through a diverse range of events, including tournaments, sports clinics, festivals, interclub competitions, and community runs, we aim to promote sportsmanship, teamwork, and an active lifestyle. We provide coaching and support to our members, helping them achieve their athletic goals. Join us in our mission to embrace sports excellence and promote a healthy way of life."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutComponent;
