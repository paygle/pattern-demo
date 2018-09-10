import React from 'react'
import CSSModules from 'react-css-modules' // 免去多写一个styles前缀
import styles from './index.less'

class PatCarousel extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    const photos = [
      {id: 1, imgrc: '/static/workcase.jpg'},
      {id: 2, imgrc: '/static/workcase.jpg'},
      {id: 3, imgrc: '/static/workcase.jpg'}
    ]

    return (
    <div styleName="PatCarousel">
      <div styleName="line"></div>
      <ul styleName="photoWrapper">
        {
          photos.map((photo) => <li key={photo.id}><img src={photo.imgrc}/></li>)
        }
      </ul>
    </div>
    )
  }

}

export default CSSModules(PatCarousel, styles)
