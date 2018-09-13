import React, {createRef} from 'react'
import { bindFuntion, assignStyles } from '../../utils/_util'
import CSSModules from 'react-css-modules' // 免去多写一个styles前缀
import styles from './index.less'

class PatCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.imgRef = createRef()
    this.maxZindex = 99
    this.halfWidth = 0
    this.maxImgCenter = 169    // 最大化时的剧中值
    this.smallImgCenter = 160  // 最小化时的剧中值
    this.RImgleftX = 157       // 最右边的left值
    this.imgs = []
    this.timeHandler = null
    this.state = {
      photos: [
        {id: 'p1', imgrc: '/static/workcase.jpg'},
        {id: 'p2', imgrc: '/static/workcase.jpg'},
        {id: 'p3', imgrc: '/static/workcase.jpg'},
        {id: 'p4', imgrc: '/static/workcase.jpg'}
      ]
    }
    bindFuntion(this, ['imgClickHandler', 'initImgs', 'runRotate'])
  }

  componentWillMount() {
    this.imgs = this.state.photos.map((img) =>{
      return {...img, dom: null, actived: false, isRight: false, isLeft: false}
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
      this.halfWidth = halfWidth
      // const paddingWidth = halfWidth - 199 - 50
      // const halfLen = parseInt(len / 2, 10)
      // const isOdd = len % 2 > 0
      // const persize = 0.7 / halfLen
      const maxZindex = this.maxZindex
      const maxImgCenter = this.maxImgCenter      // 最大化时的剧中值
      const smallImgCenter = this.smallImgCenter  // 最小化时的剧中值
      const RImgleftX = this.RImgleftX            // 最右边的left值
      for (let i = 0, img, zidx, leftX; i < len; i++) {
        img = this.imgs[i]
        img.dom = imgsDom.querySelector(`#img${img.id}`)
        zidx = maxZindex - i

        if (i === 0) {
          img.actived = true;
          img.dom.className = 'actived'
          leftX = halfWidth - maxImgCenter
        } else if (i === 1) {
          img.dom.className = ''
          img.isRight = true
          zidx = maxZindex - 5;
          leftX = halfWidth + RImgleftX
        } else if (i === len - 1) {
          img.dom.className = ''
          img.isLeft = true
          leftX =  0
          zidx = maxZindex - 5;
        } else {
          img.dom.className = 'behind'
          leftX = halfWidth - smallImgCenter
        }
        assignStyles(img.dom, { zIndex: zidx, left: `${leftX}px` })
      }

      this.timeHandler = setInterval(()=>{
        this.runRotate()
      }, 3000)
    }
  }

  runRotate() {
    const imgs = this.imgs
    const maxZindex = this.maxZindex
    const halfWidth = this.halfWidth
    const maxImgCenter = this.maxImgCenter      // 最大化时的剧中值
    const smallImgCenter = this.smallImgCenter  // 最小化时的剧中值
    const RImgleftX = this.RImgleftX            // 最右边的left值

    function setBehindpos(elm, index) {
      elm.actived = false
      elm.isLeft = false
      elm.isRight = false
      assignStyles(elm.dom, { zIndex: index, left: `${halfWidth - smallImgCenter}px`})
      elm.dom.className = 'behind'
    }

    if (imgs.length > 2) {
      let k = 0, current, behindNode, rightNode, next;
      let cycleCurrent = 0
      let counting = false

      while(cycleCurrent < imgs.length) {

        k >= imgs.length - 1 ? k = 0 : k++

        current = imgs[k]

        if (current.actived) { // 激活页移动 -> 尾页
          counting = true
          next = imgs[k + 1] || imgs[0]
          behindNode = imgs[k - 1] || imgs[imgs.length - 1]
          if (behindNode) {
            setBehindpos(behindNode, maxZindex - imgs.length - 20)
          }

          current.actived = false
          current.isLeft = true
          current.isRight = false
          assignStyles(current.dom, { zIndex: maxZindex - 5, left: 0 })
          current.dom.className = ''

        } else if (current.isRight && current === next ){ // 右页移动 -> 激活页
          next.actived = true
          next.isRight = false
          next.dom.className = 'actived'
          assignStyles(next.dom, { zIndex: maxZindex, left: `${halfWidth - maxImgCenter}px` })
          next = null

          rightNode = imgs[k + 1] || imgs[0]
          if (rightNode) {
            rightNode.actived = false
            rightNode.isRight = true
            assignStyles(rightNode.dom, { zIndex: maxZindex - 5, left: `${halfWidth + RImgleftX}px` })
            rightNode.dom.className = ''
          }

        } else if (!(current.isLeft || current.isRight) ) {  // 非左右页移动 -> 隐藏页
          setBehindpos(current, maxZindex - k)
        }

        // 从主图开始计数
        if (counting) cycleCurrent++
      }
    }
  }

  imgClickHandler(id) {

  }

  render() {
    debugger
    return (
    <div className="PatCarousel">
      <div className={styles.line}></div>
      <ul className="photoWrapper" ref={this.imgRef}>
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

export default PatCarousel
