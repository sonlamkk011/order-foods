import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import TextField from "@mui/material/TextField";

import {
  Button,
  Form,
  Select,
  Upload,
} from "antd";
import "./CreateFoods.scss";
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e?.fileList;
};

const CreateFoods = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <div id="create-foods">
        <div className="container">
          <Form
            name="validate_other"
            {...formItemLayout}
            onFinish={onFinish}
            initialValues={{
              "input-number": 3,
              "checkbox-group": ["A", "B"],
              rate: 3.5,
            }}
          >
            <div className="input">
              
            <TextField
              id="outlined-basic"
              label="name products"
              variant="outlined"
            />
            </div>
            <div className="input">
              
              <TextField
                id="outlined-basic"
                label="name products"
                variant="outlined"
              />
              </div>
              <div className="input">
              
              <TextField
                id="outlined-basic"
                label="name products"
                variant="outlined"
              />
              </div>
              <div className="input">
              
              <TextField
                id="outlined-basic"
                label="name products"
                variant="outlined"
              />
              </div>
            
            <div className="input">
            <Form.Item
              name="upload"
              label=""
              valuePropName="fileList"
              getValueFromEvent={normFile}
              extra=""
            >
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload image</Button>
              </Upload>
            </Form.Item>

            </div>
           
            <Form.Item
              wrapperCol={{
                span: 12,
                offset: 6,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};
export default CreateFoods;
