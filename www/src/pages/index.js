import React from 'react';
import Link from 'umi/link'
import { connect } from 'dva'
import classNames from 'classnames'
import PatCard from 'src/components/pat-card'
import PatLoadimg from 'src/components/pat-loadimg'
import PatCarousel from 'src/components/pat-carousel'
import {
  Row, Col
 } from 'antd'

class Index extends React.Component {

  render() {
    const { isBlogPOSI } = this.props
    // 新闻框移动样式
    const blogPosCls = classNames({
      rectFr: true,
      'is-set': isBlogPOSI
    })

    // 案例数据
    const casusData = [
      {id: 1, imgrc: '/static/workcase.jpg', title: '案例展示一', url: '/casus/detail'},
      {id: 2, imgrc: '/static/workcase.jpg', title: '案例展示二', url: '/casus/detail'},
      {id: 3, imgrc: '/static/workcase.jpg', title: '案例展示三', url: '/casus/detail'},
      {id: 4, imgrc: '/static/workcase.jpg', title: '案例展示四', url: '/casus/detail'},
      {id: 5, imgrc: '/static/workcase.jpg', title: '案例展示五', url: '/casus/detail'},
      {id: 6, imgrc: '/static/workcase.jpg', title: '案例展示六', url: '/casus/detail'},
      {id: 7, imgrc: '/static/workcase.jpg', title: '案例展示七', url: '/casus/detail'},
      {id: 8, imgrc: '/static/workcase.jpg', title: '案例展示八', url: '/casus/detail'},
      {id: 9, imgrc: '/static/workcase.jpg', title: '案例展示九', url: '/casus/detail'},
      {id: 10, imgrc: '/static/workcase.jpg', title: '案例展示十', url: '/casus/detail'},
      {id: 11, imgrc: '/static/workcase.jpg', title: '案例展示十一', url: '/casus/detail'},
      {id: 12, imgrc: '/static/workcase.jpg', title: '案例展示十二', url: '/casus/detail'}
    ]

    // 合作伙伴数据
    const partnerData = [
      {id: 1, imgrc: '/static/partner.png', title: '合作者一', url: '/'},
      {id: 2, imgrc: '/static/partner.png', title: '合作者二', url: '/'},
      {id: 3, imgrc: '/static/partner.png', title: '合作者三', url: '/'},
      {id: 4, imgrc: '/static/partner.png', title: '合作者四', url: '/'},
      {id: 5, imgrc: '/static/partner.png', title: '合作者五', url: '/'},
      {id: 6, imgrc: '/static/partner.png', title: '合作者六', url: '/'}
    ]

    return (
      <>
        <div className="m-banner">
          <div className="bg-img"><img src="/static/keybg.png" alt=""/></div>
          <img className="bgt-img" src="/static/logo-x.png" alt=""/>
        </div>

        <div className="m-content">
          <div id="domIdService" className="mc-title">
            <span className="big">SERVICE</span>
            <span className="desc">
              <i className="line"></i>
              服务项目
            </span>
          </div>
          <Row gutter={16}>
            <Col span={6}>
              <PatCard
                imgrc={'/static/web.png'}
                title={'网站设计开发WEB'}
                content={'高端品牌网站设计/电商平台建设/营销类网站/响应式网页设计/手机网页开发'}
                />
            </Col>
            <Col span={6}>
              <PatCard
                imgrc={'/static/app.png'}
                title={'移动应用开发APP'}
                content={'iOS/Android/微信公众平台 APP交互设计、视觉设计、HTML5开发、功能定制开发'}
                />
            </Col>
            <Col span={6}>
              <PatCard
                imgrc={'/static/ui.png'}
                title={'UI/UX设计DESIGN'}
                content={'图形界面设计/交互设计/用户测试研究/用户体验设计'}
                />
            </Col>
            <Col span={6}>
              <PatCard
                imgrc={'/static/inter.png'}
                title={'互联网平台建设Internet'}
                content={'多操作系统多平台的应用软件交互设计、视觉设计、应用端开发服务'}
                />
            </Col>
          </Row>
        </div>

        <div id="domIdBlog" className="blog-more">
          <div className="m-content">
            <div className={blogPosCls}></div>
            <Row gutter={16}>
              <Col span={16}>
                <span className="blog-title">博客动态</span>
                <Link className="acticle-titile" to="/blog/detail">
                  <span className="date">
                    <em>09-04</em><i></i><b>2018</b>
                  </span>
                  <span>怎么样制作网页 这些技巧要知晓</span>
                </Link>
              </Col>
              <Col span={8} className="lkmore">
                <Link to="/blog" className="link-more">更多内容</Link>
              </Col>
            </Row>
          </div>
        </div>

        <div className="m-content">
          <div id="domIdCasus" className="mc-title">
            <span className="big">CASE</span>
            <span className="desc">
              <i className="line"></i>
              案例作品
            </span>
          </div>
          <Row gutter={16}>
            {
              casusData.map((item)=>
                <Col key={item.id} span={6}>
                  <PatLoadimg option={item}/>
                </Col>
              )
            }
          </Row>
          <div className="link-center">
            <Link to="/casus" className="link-more">更多案例</Link>
          </div>
        </div>

        <div className="more-partner">
          <div className="m-content">
            <Row gutter={16}>
              {
                partnerData.map((item)=>
                  <Col key={item.id} span={4}>
                    <img src={item.imgrc} alt={item.title}/>
                  </Col>
                )
              }
            </Row>
          </div>
        </div>

        <div className="m-content">
          <div id="domIdAbout" className="mc-title">
            <span className="big">ABOUT</span>
            <span className="desc">
              <i className="line"></i>
              关于我们
            </span>
          </div>
          <div className="about-text">
              Pattern模板网，成立于2018年，由一群有着创新精神和极客精神的年轻人组成。<br/>
              为众多企业提供了品牌创意策划、线上形象设计以及产品开发服务。我们喜爱创新，热衷挑战。对每个项目<br/>
              的设计研发我们都投入很大的精力与心血，并准备着为一个好的创意通宵达旦。
          </div>
          <div className="link-center">
            <Link to="/about" className="link-more">查看更多</Link>
          </div>
          <PatCarousel/>
        </div>
      </>
    )
  }
}

// 绑定存储属性
const mapStateToProps = ({globals}) => {
  return { isBlogPOSI: globals.isBlogPOSI  };
};

export default connect(mapStateToProps)(Index)
