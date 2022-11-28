import React, { useState } from "react";
import "./mainFooter.scss";
import { Avatar, Divider, List, Skeleton } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import {amarImg} from "../../Constant"
import {
  LinkedinFilled,
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled
  
} from '@ant-design/icons';
import { useForm } from "antd/lib/form/Form";


const MainFooter = () => {
  const [form] = useForm();
  const [disabledSave, setDisabledSave] = useState(true);
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleFormChange = () => {
    const formValues = form.getFieldsValue()
    if(formValues['Email'] && formValues['Query'] && Object.keys(formValues['Email']).length > 0 && Object.keys(formValues['Query']).length){
      setDisabledSave(false);
    }else{
      setDisabledSave(true);
    }
  }

  return (
    <div className="main-footer-container">
      <div className="footer-container-sub">
        <div className="footer-intro">
          <div className="contents-display">
            <List.Item>
              <Skeleton avatar title={false} loading={false} active>
                <List.Item.Meta
                  avatar={<Avatar src={amarImg} />}
                  title={<a href="https://ant.design">Amarnath Ramesh</a>}
                  description="
                  Full stack developer"
                />
              </Skeleton>
              <div className="mailto">
                <a href="mailto:amar.hallikhed@gmail.com">amar.hallikhed@gmail.com</a>
              </div>
            </List.Item>
          </div>
          <div className="icons-display">
            <LinkedinFilled />
            <FacebookFilled />
            <TwitterSquareFilled />
            <InstagramFilled />
          </div>
        </div>
        <div className="form-container">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            form={form}
            onFieldsChange={handleFormChange}
          >
            <Form.Item
              name="Email"
              rules={[{ required: true }]}
            >
              <Input placeholder="Email" type="email"/>
            </Form.Item>

            <Form.Item name='Query'  rules={[{ required: true }]}>
              <Input.TextArea  placeholder="Please type your query" rows={4} style={{resize:"none"}}/>
            </Form.Item>

            <Form.Item className="btn-conent">
              <Button type="primary" htmlType="submit" disabled={disabledSave} >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="disclaimer">
        Disclaimer : This site is purely for education purpose and for practice/own use or helping students and this does not indulge with any MONETARY (connected with money) related part ,so inclusion of any library 
        icons or any other type of info is just for practice or for own use and does not include any business purpose.
      </div>
    </div>
  );
};

export default MainFooter;
