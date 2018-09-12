import React, {createRef} from 'react'
import { bindFuntion, assignStyles } from '../../utils/_util'
import CSSModules from 'react-css-modules' // 免去多写一个styles前缀
import styles from './index.less'

class PatCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.imgRef = createRef()
    this.imgs = []
    this.state = {
      photos: [
        {id: 'p1', imgrc: '/static/workcase.jpg'},
        {id: 'p2', imgrc: '/static/workcase.jpg'},
        {id: 'p3', imgrc: '/static/workcase.jpg'}
      ]
    }
    bindFuntion(this, ['imgClickHandler', 'initImgs'])
  }

  componentWillMount() {
    this.imgs = this.state.photos.map((img) =>{
      return {...img, dom: null, actived: false, styles: null}
    })
  }

  componentDidMount() {
    this.initImgsData()
  }

  initImgsData() {
    const imgsDom = this.imgRef.current
    if (imgsDom) {
      // 逆时针分布，顺时针转动
      const len = this.imgs.length
      const width = imgsDom.getBoundingClientRect().width
      const halfWidth = parseInt(width / 2, 10)
      const paddingWidth = halfWidth - 199 - 50
      const halfLen = parseInt(len / 2, 10)
      // const isOdd = len % 2 > 0
      // const persize = 0.7 / halfLen
      const maxZindex = 999
      for (let i = 0, img, leftX; i < len; i++) {
        img = this.imgs[i]
        if (i === 0) img.actived = true;
        img.dom = imgsDom.querySelector(`#img${img.id}`)
        if (i < halfLen) {
          if (i === 0) {
            img.dom.className = 'actived'
            leftX = halfWidth - 199
          } else if (i === 1) {
            leftX = leftX - 50
          } else if (paddingWidth) {

          }
          img.styles = { zIndex: maxZindex - i, left: leftX }
        }
        assignStyles(img.dom, img.styles)
      }
    }
  }

  imgClickHandler(id) {

  }

  render() {
    debugger
    return (
    <div styleName="PatCarousel">
      <div styleName="line"></div>
      <ul styleName="photoWrapper" ref={this.imgRef}>
        {
          this.state.photos.map((photo) =>
          <li id={`img${photo.id}`} onClick={(e) => this.imgClickHandler(photo.id)} key={photo.id}>
            <img src={photo.imgrc} alt=""/>
          </li>)
        }
      </ul>
    </div>
    )
  }

}

export default CSSModules(PatCarousel, styles)
