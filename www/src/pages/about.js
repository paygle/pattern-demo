import React from 'react';
import {
  Row, Col
 } from 'antd'

class About extends React.Component {

  render() {
    return (
    <>
    <div className="m-banner">
      <div className="bg-img"><img src="/static/bg345.jpg" alt=""/></div>
    </div>
    <div className="page-title">
      <div className="m-width" style={{position: 'relative'}}><span className="text">关于PATTRERN模板网</span></div>
    </div>
    <div className="main-content about-wrapper">
      <Row gutter={16}>
        <Col span={16}>
          <div className="about-bg1">
            <img src="/static/about1.png" alt=""/>
            <div className="about-desc1">
            pattern模板网成立于2018年 由一群有着创新精神和极客精神的年轻人组成。为众多企业提供了品牌创意策划、线上形象设计以及产品开发服务。
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className="about-bg2">
            <div className="about-desc2">
              <p>拒绝平庸，挑战常规</p>
              我们喜爱创新，热衷挑战 对每个项目的设计研发我们都投入很大的精力与心血，并准备着为一个好的创意通宵达旦。
            </div>
          </div>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <div className="about-bg3">
            <div className="about-desc3">
              <p>我们的朋友，我们的视角</p>
              客户是朋友、是伙伴，我们认真聆听，精心对待 我们从客户的角度出发，为客户提供我们专业的见解和帮助，我们不会一味附和客户，而是坚持一些正确的理念帮助客户做到最好，为客户在商业目标中赢得先机！
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className="about-bg4">
            <img src="/static/about2.gif" alt=""/>
            <div className="about-desc4">
              <p>愿景</p>
              通过用户交互体验和技术的不断改善，让设计变得更加简易实用，我们会不停地前进，敢于创新，但不忘初衷。
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className="about-bg5">
            <div className="about-desc3">
              <p>我们的能量源于对美的追求</p>
              设计是我们的专长 网站设计开发、移动端设计开发、UI设计、品牌营销策划、系统程序开发解决方案是我们的主营。
            </div>
          </div>
        </Col>
      </Row>
    </div>
    </>
    )
  }
}

export default About
