import React from "react";
import { laptopDarkImg, crtManLapImg } from "../../Constant";
import "./descriptionBox.scss";

const textContents = [
  `
    This Site consists of differet technologies under one roof , there by you need not look into
    differnt sites to understand differnt technologies.
  `,
  `
    Here we will be learing different technologies as in below grid in a simple and precise way with examples.
  `,
  `
    Here we will be focussing on 3 main aspects for any technology i.e what , why and How.
    i.e. what it is ,why we need this and how this can been done.
  `,
  
  `This site will be updated with latest features as and when progress
    happens.`,
];

const DescriptionBox = () => {
  return (
    <>
      <div className="description-box-container">
          <ul className="description-container box">
            {textContents.map((text) => (
                <li>{text}</li>
            ))}
          </ul>
        <img src={crtManLapImg} alt="Error Working" />
      </div>

      
    </>
  );
};

export default DescriptionBox;
