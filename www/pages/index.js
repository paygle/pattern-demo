import React from 'react';
import { withRouter } from 'next/router'
import PatHeader from '../components/pat-header'
import Head from 'next/head'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider, Input } from 'antd'
// import Moment from 'moment'
// import 'moment/locale/zh-cn'

class Index extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
    <LocaleProvider locale={zhCN}>
      <div className="body-wrapper">
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <link rel='stylesheet' href='/_next/static/style.css' />
        </Head>
        <PatHeader/>
        <Input placeholder="Basic usage" />
      </div>
    </LocaleProvider>
    )
  }

}

export default withRouter(Index)
