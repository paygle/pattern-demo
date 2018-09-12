import React from 'react'
import CSSModules from 'react-css-modules' // 免去多写一个styles前缀
import styles from './footer.less'
import {
  Row, Col, Form, Icon, Input, Button
 } from 'antd'

const { TextArea } = Input;
const FormItem = Form.Item

class submitForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const iconStyle = { color: 'rgba(0,0,0,.25)' }

    return (
    <Form onSubmit={this.handleSubmit} styleName="contactForm">
      <Row gutter={24}>
        <Col span={12}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入姓名！' }],
            })(
              <Input size="large" prefix={<Icon type="user" style={iconStyle} />} placeholder="姓名" />
            )}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem>
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: '请输入手机号码！' }],
            })(
              <Input size="large" prefix={<Icon type="phone" style={iconStyle} />} placeholder="手机" />
            )}
          </FormItem>
        </Col>
        <Col span={24}>
          <FormItem>
            {getFieldDecorator('company', {})(
              <Input size="large" prefix={<Icon type="team" style={iconStyle} />} placeholder="公司" />
            )}
          </FormItem>
        </Col>
        <Col span={24}>
          <FormItem>
            {getFieldDecorator('requirement', {
              rules: [{ required: true, message: '请填写合作需求！' }],
            })(
              <TextArea autosize={{minRows: 6}} placeholder="合作需求" />
            )}
          </FormItem>
        </Col>
        <Col span={24}>
          <Button type="primary" styleName="btnpdlr20" size="large" htmlType="submit" className="submit-button">提交</Button>
        </Col>
      </Row>
    </Form>
    )
  }
}

const WrappedSubmitForm = Form.create()(CSSModules(submitForm, styles))

class Footer extends React.Component {

  render() {

    return (
    <div id="domIdContact" className="patFooter">
      <div className="m-content">
        <Row gutter={16}>
          <Col span={12}>
            <div className="mf-title">联系我们</div>
            <div className="mf-text">
              一次需求提交或许正是成就一个出色产品的开始。<br/>
              欢迎填写表格或发送合作邮件至：848778591@qq.com
            </div>
            <h3>Pattern模版 - 网仿站业务部</h3>
            <p>848778591</p>
            <p>邮箱：848778591@qq.com</p>
            <p>地址：广东省广州市天河区棠下</p>
            <div className="contact-more">
              <a target="_blank" href="https://wpa.qq.com/msgrd?v=3&uin=848778591&site=qq&menu=yes">
                <img src="/static/qq.png" alt="" />
              </a>
              <a href="#">
                <img src="/static/weixin.png" alt="" />
              </a>
            </div>
          </Col>
          <Col span={12}>
            <WrappedSubmitForm/>
          </Col>
        </Row>
      </div>
      <div className="footnote">
        Copyright © 2017-2018 Www.pattern.cn. pattern模板网 版权所有　粤ICP备11047180号-6
      </div>
    </div>
    )
  }

}

export default CSSModules(Footer, styles)
