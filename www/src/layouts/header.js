import React from 'react'
import Link from 'umi/link'
import CSSModules from 'react-css-modules' // 免去多写一个styles前缀
import styles from './header.less'

class Header extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div styleName="patHeader">
        <Link to="/" styleName="mlogo">
          <img src="/static/logo.png"/>
        </Link>
        <div styleName="menus">
          <span>首页</span>
          <span>服务</span>
          <span>展示</span>
          <span>关于</span>
          <span>联系</span>
          <span styleName="contact">12345678</span>
        </div>
      </div>
    )
  }

}

export default CSSModules(Header, styles)
