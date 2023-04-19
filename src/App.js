import React from 'react';
import '../src/css/login.css';
import { Button, Divider, Form, Input, Typography, message } from 'antd';
//const ImgPrincipal = require.context('../src/assets', true);

function App() {

  const login=()=>{
    message.success('¡Inicio de sesión exitosa!');
  };
  return (
    /*<img src={ImgPrincipal('./fondo-udes.jpg')} className="" alt="logo" />*/
    <div className="init">
       <Form className="loginForm" onFinish={login}>
        <Typography.Title style={{textAlign: "center"}} >Iniciar Sesión</Typography.Title>
        <Form.Item rules={[
          {
            required: true, 
            message: "Ingresar un correo electronico"
            }
          ]}label="Usuario" name={"MyEmail"}>
          <Input placeholder="Usuario"/>
        </Form.Item>
        <Form.Item rules={[
          {
            required: true, 
            message: "Ingresar una contraseña"
            }
          ]} label="Contraseña" name={"MyPassword"}>
          <Input.Password placeholder="**********"/>
        </Form.Item>
        <Button type="primary" htmlType="submit" block>Aceptar</Button>
        <br/>
        <br/>
        <a className="linkRestcont" href="#">Reestablecer contraseña</a>
       </Form>
    </div>
  );
}

export default App;
