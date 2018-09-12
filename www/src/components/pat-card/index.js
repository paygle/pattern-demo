import React from 'react'
import styles from './index.less'

class PatCard extends React.Component {
  render() {
    const { imgrc, title, content } = this.props
    return (
    <div className={styles.patCard}>
      <div className={styles.wrapper}>
        <img src={imgrc} alt=""/>
        <p>{ title }</p>
      </div>
      <div className={styles.patCardContent}>{content}</div>
    </div>
    )
  }

}

export default PatCard
