import React from 'react';
import Link from 'umi/link';
import PatLoadimg from '../components/pat-loadimg'
import { Row, Col, Pagination } from 'antd'

class Casus extends React.Component {

  render() {
    // 案例数据
    const casusData = [
      {id: 1, imgrc: '/static/workcase.jpg', title: '案例展示一', url: '/casus-detail'},
      {id: 2, imgrc: '/static/workcase.jpg', title: '案例展示二', url: '/casus-detail'},
      {id: 3, imgrc: '/static/workcase.jpg', title: '案例展示三', url: '/casus-detail'},
      {id: 4, imgrc: '/static/workcase.jpg', title: '案例展示四', url: '/casus-detail'},
      {id: 5, imgrc: '/static/workcase.jpg', title: '案例展示五', url: '/casus-detail'},
      {id: 6, imgrc: '/static/workcase.jpg', title: '案例展示六', url: '/casus-detail'},
      {id: 7, imgrc: '/static/workcase.jpg', title: '案例展示七', url: '/casus-detail'},
      {id: 8, imgrc: '/static/workcase.jpg', title: '案例展示八', url: '/casus-detail'},
      {id: 9, imgrc: '/static/workcase.jpg', title: '案例展示九', url: '/casus-detail'},
      {id: 10, imgrc: '/static/workcase.jpg', title: '案例展示十', url: '/casus-detail'},
      {id: 11, imgrc: '/static/workcase.jpg', title: '案例展示十一', url: '/casus-detail'},
      {id: 12, imgrc: '/static/workcase.jpg', title: '案例展示十二', url: '/casus-detail'}
    ]

    return (
    <>
    <div className="m-banner">
      <div className="bg-img"><img src="/static/bg234.jpg" alt=""/></div>
    </div>
    <div className="page-title">
      <div className="m-width" style={{position: 'relative'}}><span className="text">参考案例</span></div>
    </div>
    <div className="main-content" style={{position:'relative'}}>
      <Row gutter={16}>
        {
          casusData.map((item)=>
            <Col key={item.id} span={6}>
              <PatLoadimg option={item}/>
            </Col>
          )
        }
      </Row>
      <div className="bottom-footer" style={{textAlign: 'center'}}>
        <Pagination total={5} />
      </div>
    </div>
    </>
    )
  }

}

export default Casus
