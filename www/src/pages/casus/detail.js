import React from 'react';
import Link from 'umi/link';

class CasusDeatial extends React.Component {

  render() {
    const casusData = {
      id: 'case1',
      date: '2018-9-9',
      title: '案例展示一',
      describe: '这里是客户网的描述，在后台进行编辑，图片也在这里插入，自己注意排版，发布后要记得更新！！！这里是客户网的描述，在后台进行编辑，图片也在这里插入，自己注意排版，发布后要记得更新！！',
      imgrc: 'static/case1.jpg'
    }
    return (
    <>
    <div className="m-width" style={{marginTop: '80px'}}>
      <p><span className="case-title">{casusData.title}</span></p>
      <p>{casusData.date}</p>
      <div className="case-content">{casusData.describe}</div>
    </div>
    <div className="case-visit-web"><Link to="/">访问网站</Link></div>
    <div className="m-width case-show-img"><img src={BASE_URL + casusData.imgrc} alt=""/></div>
    </>
    )
  }

}

export default CasusDeatial
