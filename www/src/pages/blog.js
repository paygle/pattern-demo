import React from 'react'
import Link from 'umi/link'
import styles from './blog.less'
import { Row, Col, Pagination } from 'antd'

class Blog extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      acticles: [
        {
          id: 'at1',
          url: '/blog-detail',
          date: '2018-09-15',
          title: '商城网站建设 配色类别值的注意',
          content: '色彩，为我们的日常生活添加了很多的乐趣和生活情调。每天早上的日出，由灰中带红，红中有亮的色调组成，看到日出，我们的心情也会很好的。可以说，色彩在我们的日常生活中发挥着重要的作用。对于网站建设来说，色彩的重要性更是厉害。而在商城网站建设中，色彩可以分为一种色彩，两种色彩或者是一整个色系的应用，下面，我们就来具体的学习一下。'
        },
        {
          id: 'at2',
          url: '/blog-detail',
          date: '2018-09-15',
          title: '商城网站建设 配色类别值的注意',
          content: '色彩，为我们的日常生活添加了很多的乐趣和生活情调。每天早上的日出，由灰中带红，红中有亮的色调组成，看到日出，我们的心情也会很好的。可以说，色彩在我们的日常生活中发挥着重要的作用。对于网站建设来说，色彩的重要性更是厉害。而在商城网站建设中，色彩可以分为一种色彩，两种色彩或者是一整个色系的应用，下面，我们就来具体的学习一下。'
        },
        {
          id: 'at3',
          url: '/blog-detail',
          date: '2018-09-15',
          title: '商城网站建设 配色类别值的注意',
          content: '色彩，为我们的日常生活添加了很多的乐趣和生活情调。每天早上的日出，由灰中带红，红中有亮的色调组成，看到日出，我们的心情也会很好的。可以说，色彩在我们的日常生活中发挥着重要的作用。对于网站建设来说，色彩的重要性更是厉害。而在商城网站建设中，色彩可以分为一种色彩，两种色彩或者是一整个色系的应用，下面，我们就来具体的学习一下。'
        }
      ]
    }
  }

  render() {
    const {acticles} = this.state

    return (
    <>
    <div className="m-banner">
      <div className="bg-img"><img src="/static/bg123.jpg" alt=""/></div>
    </div>
    <div className="page-title">
      <div className="m-width" style={{position: 'relative'}}><span className="text">博客动态</span></div>
    </div>
    <div className="main-content" style={{position:'relative'}}>
      {
        acticles.map((item) => (
          <Row className={styles.acticleItem} gutter={24} key={item.id}>
            <Col span={4}>
              <span className={styles.day}>{item.date.replace(/^\d{4}\-\d+\-/g, '')}</span>
              <span className={styles.ymomth}>{item.date.replace(/\-\d+$/g, '')}</span>
            </Col>
            <Col span={20}>
              <Link to={item.url}>
                <p>{item.title}</p>
                <div className="content">{item.content}</div>
              </Link>
            </Col>
          </Row>
        ))
      }
      <div className="bottom-footer" style={{textAlign: 'center'}}>
        <Pagination total={acticles.length} />
      </div>
    </div>
    </>
    )
  }

}

export default Blog
