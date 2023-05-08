import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
import { useState } from 'react';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const FormDisabledDemo = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  return (
    <>
      <Checkbox
        style={{padding: 50}}
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Editar Perfil
      </Checkbox>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{
          maxWidth: 1100,
          marginLeft: 40,
        }}
      >
        <Form.Item label="Nombre">
          <Input />
        </Form.Item>
        <Form.Item label="E-mail">
          <Input />
        </Form.Item>
        <Form.Item label="Telefono">
          <Input />
        </Form.Item>
        <Form.Item label="Programa académico">
          <Input />
        </Form.Item>
        <Form.Item label="Fecha de Nacimiento">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Sede">
          <Select>
            <Select.Option value="cucuta">Cúcuta</Select.Option>
            <Select.Option value="bucaramanga">Bucaramanga</Select.Option>
            <Select.Option value="valledupar">Valledupar</Select.Option>
            <Select.Option value="bogota">Bogotá</Select.Option>
          </Select>
        </Form.Item>    
        <Form.Item label="Subir imagen" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Subir
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button>Guardar</Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default () => <FormDisabledDemo />;