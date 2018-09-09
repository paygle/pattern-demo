import React from 'react'
// import CSSModules from 'react-css-modules' // 免去多写一个styles前缀
// import styles from './footer.less'
import {
  Row, Col
 } from 'antd'

class Footer extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
    <div className="patFooter">
      <div className="m-content">
        <Row gutter={16}>
          <Col span={12}>
            <div className="mf-title">联系我们</div>
            <div className="mf-text">
              一次需求提交或许正是成就一个出色产品的开始。<br/>
              欢迎填写表格或发送合作邮件至：848778591@qq.com
            </div>
            <h3>Pattern模版网仿站业务部</h3>
            <p>848778591</p>
            <p>邮箱：848778591@qq.com</p>
            <p>地址：广东省广州市天河区棠下</p>
            <div className="contact-more">
              <a href="/">qq</a>
              <a href="/">微信</a>
            </div>
          </Col>
          <Col span={12}>

          </Col>
        </Row>
      </div>
    </div>
    )
  }

}

export default Footer // CSSModules(Footer, styles)
