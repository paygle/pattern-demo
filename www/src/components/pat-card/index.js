import React from 'react'
// import CSSModules from 'react-css-modules' // 免去多写一个styles前缀
// import styles from './index.less'

class PatCard extends React.Component {

  componentDidUpdate() {

  }

  render() {
    const { imgrc, title, content } = this.props
    return (
    <div className="patCard">
      <img src={imgrc}/>
      <p>{ title }</p>
      <div className="patCardContent">{content}</div>
    </div>
    )
  }

}

export default PatCard // CSSModules(PatCard, styles)
