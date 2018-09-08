import { Component } from 'react';
import Header from './header'
import withRouter from 'umi/withRouter'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {
  LocaleProvider, Input
 } from 'antd'

class Layout extends Component {

  componentDidMount() {
    console.log('mount')
  }

  render() {
    const { children } = this.props

    return (
    <LocaleProvider locale={zhCN}>
      <div className="body-wrapper">
        <Header/>
        {
          children
        }
        <Input placeholder="Basic usage" />
      </div>
    </LocaleProvider>
    )
  }

}

export default withRouter(Layout)
