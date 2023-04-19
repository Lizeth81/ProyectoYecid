import React from 'react';
import '../src/css/login.css';
import { Button, Divider, Form, Input, Typography } from 'antd';
//const ImgPrincipal = require.context('../src/assets', true);

function App() {
  return (
    /*<img src={ImgPrincipal('./fondo-udes.jpg')} className="" alt="logo" />*/
    <div className="init">
       <Form className="loginForm">
        <Typography.Title style={{textAlign: "center"}}>Iniciar Sesión</Typography.Title>
        <Form.Item label="Usuario" name={"MyEmail"}>
          <Input placeholder="Usuario"/>
        </Form.Item>
        <Form.Item label="Contraseña" name={"MyPassword"}>
          <Input placeholder="**********"/>
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
