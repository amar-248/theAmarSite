import React from "react";
import "./gridContainer.scss";
import { Col, Row } from 'antd';
import { angularImg,reactImg,reduxImg,htmlImg,cssImg,jsImg,nodeImg,dbImg} from '../../Constant';

const GridLayout = () => {
  return (
    <div className="grid-layout">
    <Row gutter={[24, 90]}  justify='space-between'>
    <Col  span={5}>
        <div className="grid-row-container">
          <div className="grid-row">
          <img className="imgHolder" src={htmlImg} alt='html'></img>
            <div className="content-desc">
                Here we are going to learn about HTML start from scratch and will be working with Html tags.
            </div>
          </div>
          <div className="anchor-container">
          <a href="javascript:void(0)">Click to Know More</a>
          </div>
        </div>
      </Col>
      <Col  span={5}>
        <div className="grid-row-container">
          <div className="grid-row">
          <img className="imgHolder" src={cssImg} alt='css'></img>
            <div className="content-desc">
                Here we are going to learn about CSS and it's features and how we can add it to HTML and make good looking sites.
            </div>
          </div>
          <div className="anchor-container">
          <a href="javascript:void(0)">Click to Know More</a>
          </div>
        </div>
      </Col>
      <Col  span={5}>
        <div className="grid-row-container">
          <div className="grid-row">
          <img className="imgHolder" src={jsImg} alt='js'></img>
            <div className="content-desc">
                Here we are going to learn about JAVASCRIPT start from scratch in a simple and precise way and will also be covering some important topics with examples.
            </div>
          </div>
          <div className="anchor-container">
          <a href="javascript:void(0)">Click to Know More</a>
          </div>
        </div>
      </Col>
      <Col  span={5}>
        <div className="grid-row-container">
          <div className="grid-row">
            <img className="imgHolder" src={angularImg} alt='angular'></img>
            <div className="content-desc">
                Here we are going to learn about ANGULAR 11 start from scratch in a simple and precise way by creating a small project there by understaing
                it in a step by step way.
            </div>
          </div>
          <div className="anchor-container">
          <a href="javascript:void(0)">Click to Know More</a>
          </div>
        </div>
      </Col>
      <Col  span={5}>
        <div className="grid-row-container">
          <div className="grid-row">
          <img className="imgHolder" src={reactImg} alt='react'></img>
            <div className="content-desc">
                Here we are going to learn about REACT JS start from scratch in a simple and precise way by creating a small project there by understaing
                it in a step by step way.
            </div>
          </div>
          <div className="anchor-container">
          <a href="javascript:void(0)">Click to Know More</a>
          </div>
        </div>
      </Col>
      <Col  span={5}>
        <div className="grid-row-container">
          <div className="grid-row">
          <img className="imgHolder" src={reduxImg} alt='redux'></img>
            <div className="content-desc">
                Here we are going to learn about REDUX start from scratch in a simple and precise way and how to use it with React JS.
            </div>
          </div>
          <div className="anchor-container">
          <a href="javascript:void(0)">Click to Know More</a>
          </div>
        </div>
      </Col>
     
      
      
      <Col  span={5}>
        <div className="grid-row-container">
          <div className="grid-row">
          <img className="imgHolder" src={nodeImg} alt='node'></img>
            <div className="content-desc">
                Here we are going to learn about NODE JS start from scratch in a simple and precise way and will also be covering some important concepts.
            </div>
          </div>
          <div className="anchor-container">
          <a href="javascript:void(0)">Click to Know More</a>
          </div>
        </div>
      </Col>
      <Col  span={5}>
        <div className="grid-row-container">
          <div className="grid-row">
          <img className="imgHolder" src={dbImg} alt='db'></img>
            <div className="content-desc">
                Here we are going to learn about DATABASE and will be performing some of the operations with that.
            </div>
          </div>
          <div className="anchor-container">
          <a href="javascript:void(0)">Click to Know More</a>
          </div>
        </div>
      </Col>
    </Row>
  </div>
  );
};

export default GridLayout;
