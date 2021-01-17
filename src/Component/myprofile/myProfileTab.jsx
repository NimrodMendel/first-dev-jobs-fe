import { Form, Input, Button } from 'antd';
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const MyProfileTab = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  let btnResponsiv;
  window.innerWidth < 575 ? btnResponsiv = 0 : btnResponsiv = 4

  return (
    <>
    
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'bio']} label="Bio">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'phone']} label="Phone">
        <Input/>
      </Form.Item>
      
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: btnResponsiv }}>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default MyProfileTab;