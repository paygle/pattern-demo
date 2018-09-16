import React, {createRef} from 'react'
import { bindFuntion, assignStyles, mergeObject } from 'src/utils/_util'
import styles from './index.less'

let timeoutHaner
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
    this.time = 2500
    this.timeHandler = null
    this.state = {
      photos: [
        {id: 'p1', imgrc: '/static/workcase.jpg'},
        {id: 'p2', imgrc: '/static/workcase.jpg'},
        {id: 'p3', imgrc: '/static/workcase.jpg'},
        {id: 'p4', imgrc: '/static/workcase.jpg'},
        {id: 'p5', imgrc: '/static/workcase.jpg'}
      ]
    }
    bindFuntion(this, ['imgClickHandler', 'initImgs', 'runRotate', 'runCarousel'])
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

      this.runCarousel()
    }
  }

  runCarousel() {
    this.timeHandler = setInterval(()=>{ this.runRotate() }, this.time)
  }

  runRotate(id) {
    const imgs = this.imgs
    const maxZindex = this.maxZindex
    const halfWidth = this.halfWidth
    const maxImgCenter = this.maxImgCenter      // 最大化时的剧中值
    const smallImgCenter = this.smallImgCenter  // 最小化时的剧中值
    const RImgleftX = this.RImgleftX            // 最右边的left值

    // 点击图片处理
    if (id && imgs.length > 2) {

      for(let key = 0, tmps = [], tmpk; key < imgs.length; key++) {

        if (imgs[key].id === id) {

          mergeObject(imgs[tmpk], {actived: false, isLeft: false, isRight: true})
          tmps.push(imgs[key]) // set right

          tmpk = key === 0 ? imgs.length - 1 : key - 1
          mergeObject(imgs[tmpk], {actived: true, isLeft: false, isRight: true})
          tmps.push(imgs[tmpk]) // set actived


          tmpk = key === imgs.length - 1 ? 0 : key + 1
          mergeObject(imgs[tmpk], {actived: false, isLeft: true, isRight: false})
          tmps.push(imgs[tmpk]) // set left

          for (let i = 0; i < imgs.length; i++) {
            if (tmps.indexOf(imgs[i]) < 0) {
              mergeObject(imgs[i], {actived: false, isLeft: false, isRight: false})
            }
          }
          break;
        }
      }

      // 自动启动设置
      clearTimeout(timeoutHaner)
      timeoutHaner = setTimeout(() => this.runCarousel(), 5000)
    }

    function setBehindpos(elm, index) {
      mergeObject(elm, {actived: false, isLeft: false, isRight: false})
      assignStyles(elm.dom, { zIndex: index - 20, bottom: '100px', left: `${halfWidth - smallImgCenter}px`})
      elm.dom.className = 'behind'
    }

    if (imgs.length > 2) {
      let k = 0, current, behindNode, rightNode, next;
      let cycleCurrent = 0
      let counting = false

      while(cycleCurrent < imgs.length) {

        k >= imgs.length - 1 ? k = 0 : k++
        current = imgs[k]

        if (current.actived) {
          counting = true
          // 原左侧图 -> 背图
          next = imgs[k + 1] || imgs[0]
          behindNode = imgs[k - 1] || imgs[imgs.length - 1]
          if (behindNode) {
            setBehindpos(behindNode, maxZindex - imgs.length)
          }

          // 原激活页 -> 左侧图
          mergeObject(current, {actived: false, isLeft: true, isRight: false})
          assignStyles(current.dom, { zIndex: maxZindex - 5, bottom: '50px', left: 0 })
          current.dom.className = ''

        } else if (current === next ){
          // 原右图 -> 激活主页
          mergeObject(next, {actived: true, isLeft: false, isRight: false})
          next.dom.className = 'actived'
          assignStyles(next.dom, { zIndex: maxZindex, bottom: 0, left: `${halfWidth - maxImgCenter}px` })
          next = null

          // 原背图 -> 右侧图
          rightNode = imgs[k + 1] || imgs[0]
          mergeObject(rightNode, {actived: false, isLeft: false, isRight: true})
          assignStyles(rightNode.dom, { zIndex: maxZindex - 5, bottom: '50px', left: `${halfWidth + RImgleftX}px` })
          rightNode.dom.className = ''

        } else if (!(current.isLeft || current.isRight) ) {
          // 非左右页移动 -> 原背图
          setBehindpos(current, maxZindex - k)
        }

        // 从主图开始计数
        if (counting) cycleCurrent++
      }
    }
  }

  imgClickHandler(id) {
    clearInterval(this.timeHandler)
    this.runRotate(id)
  }

  render() {

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
