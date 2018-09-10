import { Component, createRef } from 'react';
import Header from './header'
import Footer from './footer'
import withRouter from 'umi/withRouter'
import { connect } from 'dva'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd'

class Layout extends Component {

  constructor(props) {
    super(props)
    this.layRef = createRef()
  }

  componentDidMount() {
    console.log('mount')
  }

  render() {
    const { children, location } = this.props

    return (
    <LocaleProvider locale={zhCN} ref={this.layRef}>
    <>
      <Header location={location} layRef={this.layRef}/>
      {
        children
      }
      <Footer/>
    </>
    </LocaleProvider>
    )
  }

}

// 绑定存储属性
const mapStateToProps = ({globals}) => {
  return { position: globals.position };
};

export default withRouter(connect(mapStateToProps)(Layout))
