import React, {createRef} from 'react'
import Link from 'umi/link'
import 'element-closest'
import classNames from 'classnames'
import styles from './index.less'
import getScroll from 'src/utils/getScroll'
import { bindFuntion } from 'src/utils/_util'
import addEventListener from 'src/utils/addEventListener'

class PatLoadimg extends React.Component {

  constructor(props) {
    super(props);
    this.imgRef = createRef()
    this.scrollEvent = null
    this.imgParentCol = null
    this.imgParentRow = null
    this.state = {
      isLoading: false,
      isSlow: false
    }
    bindFuntion(this, ['scrollHander'])
  }

  // 滚动后附带效果处理
  scrollHander() {

    if (this.imgRef.current) {

      // 仅加载一次
      if (!this.imgParentA || !this.imgParentRow) {
        this.imgParentCol = this.imgRef.current.closest('div.ant-col-6')
        this.imgParentRow = this.imgRef.current.closest('div.ant-row')
      }

      const top = getScroll(window, true)
      const imgTop = this.imgParentCol.offsetTop + this.imgParentRow.offsetTop
      const isImgpos = top > imgTop - window.innerHeight
      this.setState({isLoading: isImgpos})
      if (isImgpos) {
        setTimeout(()=> this.setState({isSlow: true}), 100)
      }
    }
  }

  componentDidMount() {
    this.scrollEvent = addEventListener(window, 'scroll', this.scrollHander)
    this.scrollHander()
  }

  componentWillUnmount() {
    if (this.scrollEvent) {
      this.scrollEvent.remove();
    }
  }

  render() {
    const { isLoading, isSlow } = this.state
    const { option } = this.props
    const loadStyl = classNames(styles.patLoadimg, {[styles.isLoading]: isSlow})

    return (
    <div className={loadStyl} ref={this.imgRef}>
      <Link className={styles.warpper} to={option.url}>
        {
          isLoading ?
          <><div className={styles.imgbox}><img src={BASE_URL + option.imgrc} alt=""/></div>
          <p>{option.title}</p></>
          : ''
        }
      </Link>
    </div>
    )
  }

}

export default PatLoadimg
