import { Component, createRef } from 'react';
import Header from './header'
import Footer from './footer'
import withRouter from 'umi/withRouter'
import { connect } from 'dva'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import getScroll from '../utils/getScroll';
import addEventListener from '../utils/addEventListener'
import { bindFuntion } from './../utils/_util';
import raf from 'raf'
import { LocaleProvider } from 'antd'


// 前半段从0开始加速，后半段减速到0的缓动
const easeInOutCubic = (t, b, c, d) => {
  if ((t /= d / 2) < 1) return c / 2 * t * t*t + b;
  return c / 2*((t -= 2) * t * t + 2) + b;
}

class Layout extends Component {

  constructor(props) {
    super(props)
    this.layRef = createRef()
    this.scrollEvent = null
    this.state = {
      isDomReady: false,
      posIstop: true
    }
    bindFuntion(this, ['scrollIndexHandler', 'scrollHander'])
  }


  setScrollTop(value) {
    console.log('setTop: ', value)
    document.body.scrollTop = value;
    document.documentElement.scrollTop = value;
  }

  scrollIndexHandler(domId) {
    debugger
    const { isDomReady } = this.state
    if (isDomReady) {

      const idDom = document.getElementById(domId || 'root')
      const startTop = getScroll(window, true)
      const endTop = idDom.offsetTop
      const startTime = Date.now();
      const frameFunc = () => {
        const timestamp = Date.now();
        const time = timestamp - startTime;
        this.setScrollTop(easeInOutCubic(time, startTop, endTop - startTop, 450));
        console.log('Time: ', time)
        if (time < 450) {
          raf(frameFunc);
        } else {
          this.setScrollTop(endTop);
        }
      };
      raf(frameFunc);
    }
  }
  // 滚动后附带效果处理
  scrollHander() {
    const top = getScroll(window, true)
    if (top > 50) {
      this.setState({posIstop: false})
    } else {
      this.setState({posIstop: true})
    }
  }

  componentDidMount() {
    this.state.isDomReady = true;
    this.scrollEvent = addEventListener(window, 'scroll', this.scrollHander)
  }

  componentWillUnmount() {
    if (this.scrollEvent) {
      this.scrollEvent.remove();
    }
  }

  render() {
    const { children, location } = this.props
    const { posIstop } = this.state

    return (
    <LocaleProvider locale={zhCN} ref={this.layRef}>
    <>
      <Header
        layRef={this.layRef}
        location={location}
        posIstop={posIstop}
        scrollHandler={this.scrollIndexHandler}
        />
      {
        children
      }
      <Footer/>
    </>
    </LocaleProvider>
    )
  }

}

// 绑定存储属性
const mapStateToProps = ({globals}) => {
  return { position: globals.position };
};

export default withRouter(connect(mapStateToProps)(Layout))
