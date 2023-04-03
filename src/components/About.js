import second from "../images/second.jpg";

import "bootstrap-icons/font/bootstrap-icons.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About(props) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="cardClass ">
      <div
        className="h1 text-center mt-4  text-name  about-heading "
        data-aos="fade-down"
      >
        About Me
      </div>
      <hr className="hr hr-blurry " />

      {/* second layer  */}

      <div className="about-mainLayer row">
        <div className="col  about-imgLayer mx-2 " data-aos="fade-right">
          <img className=" about-img" src={second} alt="...." />
        </div>

        <div className=" col about-infoLayer   " data-aos="fade-left">
          <div className="   wannaKnow-main px-4 ">
            <div className="h1 text-left mt-4 col2-text row  ">
              Wanna Know Me ?
            </div>
            <hr className="hr hr-blurry" />
            <div className=" rowe text-left mt-3  col2-sentence ">
              My name is Manglesh Kumar Born in Gorakhpur. I'm doing my
              graduation of B. Tech Computer Science and Engineering from
              Kanpur. I am a confident patient and a quick learner.
            </div>
            <a
              href="/"
              className=" row knowMore btn   btn-lg mt-4 active"
              role="button"
              aria-pressed="true"
              data-aos="fade-up"
            >
              Know More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
