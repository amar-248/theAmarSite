import { laptopDarkImg, crtManLapImg } from "../../Constant";
import FadeInSection from "../FadeIn/fadeInSection";
import "./descriptionBox.css";

const textContents = [
  ` Hi I am Amarnath Ramesh . I have an overall 7+ of experience , I am a
    full stack developer worked in numerous technologies like C# ,React JS
    ,Redux, Node JS ,loopback , Angular 6 ,Angular 11 ,Angular material ,
    Antd etc.`,
  `This site is to have different featues under one App.`,
  `This site will be updated with latest features as and when progress
    happens.`,
];

const DescriptionBox = () => {
  return (
    <>
      <div className="description-box-container">
        <ul className="description-container">
          {textContents.map((text) => (
            <FadeInSection key={text}>
              <li>{text}</li>
            </FadeInSection>
          ))}
        </ul>

        <img src={crtManLapImg} alt="Error Working" />
      </div>
      <div className="element"></div>
    </>
  );
};

export default DescriptionBox;
