import React from 'react'
import './pat-header.less'

export default class PatHeader extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="pat-header">
        <div className="mlogo">
          <img src="/static/img/logo.png"/>
        </div>
        <div className="menus">
          <span className="menu-item">首页</span>
          <span className="menu-item">服务</span>
          <span className="menu-item">展示</span>
          <span className="menu-item">关于</span>
          <span className="menu-item">联系</span>
          <span className="contact">12345678</span>
        </div>
      </div>
    )
  }

}
