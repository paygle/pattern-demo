import React from 'react';
import Link from 'umi/link'
// import styles from './index.less';
import {
  Row, Col
 } from 'antd'

class Index extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <>
        <div className="m-banner">
          <div className="bg-img"><img src="/static/keybg.png" /></div>
          <img className="bgt-img" src="/static/logo-x.png" />
        </div>

        <div className="m-content">
          <div className="mc-title">服务项目</div>
          <Row gutter={16}>
            <Col span={6}>1</Col>
            <Col span={6}>2</Col>
            <Col span={6}>3</Col>
            <Col span={6}>4</Col>
          </Row>
        </div>

        <div className="news-more">
          <div className="m-content">
            <div className="rect-fr"></div>
            <Row gutter={16}>
              <Col span={16}>
                <span className="news-title">新闻动态</span>
                <div className="acticle-titile">
                  <span className="date">
                    <em>09-04</em><b>2018</b>
                  </span>
                  <span>怎么样制作网页 这些技巧要知晓</span>
                </div>
              </Col>
              <Col span={8}>
                <Link to="/news" className="link-more">更多内容</Link>
              </Col>
            </Row>
          </div>
        </div>

        <div className="m-content">
          <div className="mc-title">案例作品</div>
          <Row gutter={16}>
            <Col span={6}>1</Col>
            <Col span={6}>2</Col>
            <Col span={6}>3</Col>
            <Col span={6}>4</Col>
          </Row>
          {/* <Link href="/"><a className="link-more">更多案例</a></Link> */}
        </div>

        <div className="more-brand">
          <div className="m-content">
            <Row gutter={16}>
              <Col span={4}>1</Col>
              <Col span={4}>2</Col>
              <Col span={4}>3</Col>
              <Col span={4}>4</Col>
              <Col span={4}>5</Col>
              <Col span={4}>6</Col>
            </Row>
          </div>
        </div>

        <div className="m-content">
          <div className="mc-title">关于我们</div>
            <div className="m-text">
                AB模板网，成立于2012年，由一群有着创新精神和极客精神的年轻人组成。<br/>
                为众多企业提供了品牌创意策划、线上形象设计以及产品开发服务。我们喜爱创新，热衷挑战。对每个项目<br/>
                的设计研发我们都投入很大的精力与心血，并准备着为一个好的创意通宵达旦。
            </div>
            {/* <Link href="/"><a className="link-more">查看更多</a></Link> */}

            <div className="environment">
              旋转马
            </div>
        </div>
      </>
    )
  }
}

export default Index
