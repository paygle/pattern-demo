import React from 'react'
import Link from 'umi/link'
import raf from 'raf'
import CSSModules from 'react-css-modules' // 免去多写一个styles前缀
import styles from './header.less'

const HomeMenu = (props) => (
  <>
    <span onClick={(e) => props.scroll()}>首页</span>
    <span onClick={(e) => props.scroll('domIdService')}>服务</span>
    <span onClick={(e) => props.scroll('domIdCasus')}>展示</span>
    <span onClick={(e) => props.scroll('domIdAbout')}>关于</span>
    <span onClick={(e) => props.scroll('domIdContact')}>联系</span>
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

// 是否在首页
const isHome = location => /^\/$/.test(location.pathname)

/**
 * 绑定函数到 target
 * @param {Object} target   要绑定的对象
 * @param {Array} funcNames 函数名称数组
 */
const bindFuntion = (target, funcNames) => {
  if (target && typeof target === 'object' && Array.isArray(funcNames)) {
    funcNames.forEach((f)=>{
      if (typeof target[f] === 'function') {
        target[f] = target[f].bind(target)
      }
    })
  }
}

// 前半段从0开始加速，后半段减速到0的缓动
const easeInOutCubic = (t, b, c, d) => {
  if ((t /= d / 2) < 1) return c / 2 * t * t*t + b;
  return c / 2*((t -= 2) * t * t + 2) + b;
}

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isDomReady: false
    }
    bindFuntion(this, ['scrollIndexPage'])
  }

  componentDidMount() {
    this.state.isDomReady = true;
  }

  getCurrentScrollTop = () => {
    return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
  }

  setScrollTop(value) {
    document.body.scrollTop = value;
    document.documentElement.scrollTop = value;
  }

  scrollIndexPage(domId) {
    debugger
    const { isDomReady } = this.state
    if (isDomReady) {

      // const domRoot = document.getElementById('root')
      const scrollTop = this.getCurrentScrollTop()
      const startTime = Date.now();
      const frameFunc = () => {
        const timestamp = Date.now();
        const time = timestamp - startTime;
        this.setScrollTop(easeInOutCubic(time, scrollTop, 0, 450));
        if (time < 450) {
          raf(frameFunc);
        } else {
          this.setScrollTop(0);
        }
      };
      raf(frameFunc);
    }
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
            isHome(location) ? <HomeMenu scroll={this.scrollIndexPage}/> : <OtherMenu/>
          }
          <span styleName="contact">12345678</span>
        </div>
      </div>
    )
  }

}

export default CSSModules(Header, styles)
