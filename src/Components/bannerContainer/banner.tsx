import "./banner.css";
import { bannerImg, laptopImg } from "../../Constant";

const Banner = () => {
  return (
    <div className="main-banner-container">
      <div className="outer-container">
        <div className="intro-desc-container">
          <div className="intro-desc">
            <div className="name-header">Amarnath Ramesh</div>
            <div className="desc-header">
              Full Stack Developer, Bengaluru, Karnataka, India
            </div>
            <div className="year-no">6+</div>
            <div className="year-desc">Years of Experience</div>
          </div>
        </div>

        <img src={bannerImg} alt="Error Working" />

        <img src={laptopImg} alt="Error Working" />
      </div>
    </div>
  );
};

export default Banner;
