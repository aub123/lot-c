import { Form, Input, Button, Row, Col } from "antd";
import { Footer } from "antd/lib/layout/layout";
import React from "react";
import "./module.css";
import "antd/dist/antd.css";

const onFinish = (values) => {
  console.log("Received values of form: ", values);
};

export default function Login() {
  return (
    // <>
    <div className={"bg"}>
      {/* <div className={"heard"}>

        </div> */}
      <div className={"login_card"}>
        <h1 className={"title"}>Platform of LoT</h1>

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "请输入手机号 / 用户名!" }]}
            style={{ borderBottom: "1px solid #DCDCDC" }}
          >
            <Input placeholder="请输入手机号 / 用户名" bordered={false} />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入密码!" }]}
            style={{ borderBottom: "1px solid #DCDCDC" }}
          >
            <Input bordered={false} type="password" placeholder="请输入密码" />
          </Form.Item>
          <Form.Item
            name="captcha"
            rules={[{ required: true, message: "请输入验证码!" }]}
            style={{ borderBottom: "1px solid #DCDCDC" }}
          >
            <Row>
              <Col span={16}>
                <Input
                  bordered={false}
                  type="password"
                  placeholder="请输入验证码"
                />
              </Col>
              <Col span={6} style={{ float: "right" }}>
                <Button
                  type="link"
                  style={{ color: "#151830", fontWeight: "bold" }}
                >
                  发送验证码
                </Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              style={{ height: "56PX", borderRadius: "12PX" }}
            >
              登录
            </Button>
          </Form.Item>
        </Form>

        <Button size="large" shape="circle"></Button>
        <Footer className={"footer"}>
          <text>此为物联网平台登录页，详情咨询开发人员</text>
        </Footer>
      </div>
    </div>
    // </>
  );
}
