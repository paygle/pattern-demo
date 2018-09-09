import React from 'react'
import Link from 'umi/link'
import CSSModules from 'react-css-modules' // 免去多写一个styles前缀
import styles from './header.less'

const HomeMenu = props => (
<>
  <span>首页</span>
  <span>服务</span>
  <span>展示</span>
  <span>关于</span>
  <span>联系</span>
</>
)

const OtherMenu = props => (
<>
  <Link to="/">首页</Link>
  <Link to="/casus">展示</Link>
  <Link to="/news">新闻</Link>
  <Link to="/about">关于</Link>
</>
)

const isHome = location => /^\/$/.test(location.pathname)

class Header extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    const {location} = this.props

    return (
      <div styleName="patHeader">
        <Link to="/" styleName="mlogo">
          <img src="/static/logo.png"/>
        </Link>
        <div styleName="menus">
          {
            isHome(location) ? <HomeMenu/> : <OtherMenu/>
          }
          <span styleName="contact">12345678</span>
        </div>
      </div>
    )
  }

}

export default CSSModules(Header, styles)
