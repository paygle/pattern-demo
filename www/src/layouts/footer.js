import React from 'react'
// import CSSModules from 'react-css-modules' // 免去多写一个styles前缀
// import styles from './footer.less'
import {
  Row, Col, Form, Icon, Input, Button, Checkbox
 } from 'antd'

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

    return (
    <Form onSubmit={this.handleSubmit} className="login-form">
      <FormItem>
        {getFieldDecorator('userName', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(
          <Checkbox>Remember me</Checkbox>
        )}
        <a className="login-form-forgot" href="">Forgot password</a>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </FormItem>
    </Form>
    )
  }
}

const WrappedSubmitForm = Form.create()(submitForm)

class Footer extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
    <div className="patFooter">
      <div className="m-content">
        <Row gutter={16}>
          <Col span={12}>
            <div className="mf-title">联系我们</div>
            <div className="mf-text">
              一次需求提交或许正是成就一个出色产品的开始。<br/>
              欢迎填写表格或发送合作邮件至：848778591@qq.com
            </div>
            <h3>Pattern模版网仿站业务部</h3>
            <p>848778591</p>
            <p>邮箱：848778591@qq.com</p>
            <p>地址：广东省广州市天河区棠下</p>
            <div className="contact-more">
              <a href="/">qq</a>
              <a href="/">微信</a>
            </div>
          </Col>
          <Col span={12}>
            <WrappedSubmitForm/>
          </Col>
        </Row>
      </div>
    </div>
    )
  }

}

export default Footer // CSSModules(Footer, styles)
