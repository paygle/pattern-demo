import React from 'react'
import Link from 'umi/link'
import classNames from 'classnames'
import CSSModules from 'react-css-modules' // 免去多写一个styles前缀
import styles from './header.less'

const HomeMenu = (props) => (
  <>
    <span role="moveto" onClick={(e) => props.scroll()}>首页</span>
    <span role="moveto" onClick={(e) => props.scroll('domIdService')}>服务</span>
    <span role="moveto" onClick={(e) => props.scroll('domIdCasus')}>展示</span>
    <span role="moveto" onClick={(e) => props.scroll('domIdAbout')}>关于</span>
    <span role="moveto" onClick={(e) => props.scroll('domIdContact')}>联系</span>
  </>
)

const OtherMenu = props => (
<>
  <Link role="routeto" to="/">首页</Link>
  <Link role="routeto" to="/casus">展示</Link>
  <Link role="routeto" to="/news">新闻</Link>
  <Link role="routeto" to="/about">关于</Link>
</>
)

// 是否在首页
const isHome = location => /^\/$/.test(location.pathname)

class Header extends React.Component {

  render() {
    const {location, scrollHandler, posIstop} = this.props
    const scrollStyl = classNames({patHeader:true, 'is-shrink': !posIstop})

    return (
      <div className={scrollStyl}>
        <Link to="/" styleName="mlogo">
          <img src="/static/logo.png" alt=""/>
        </Link>
        <div className="menus">
          {
            isHome(location) ? <HomeMenu scroll={scrollHandler}/> : <OtherMenu/>
          }
          <span className="contact">848778591</span>
        </div>
      </div>
    )
  }

}

export default CSSModules(Header, styles)
