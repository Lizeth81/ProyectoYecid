import { ContainerOutlined, UserOutlined, DesktopOutlined, CloseOutlined} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem( 'Perfil', '1', <UserOutlined />), 
    getItem('Trabajo de grado', 'sub1', <ContainerOutlined />, [
      getItem('Propuesta de grado', '2'),
      getItem('Anteproyecto', '3'),
      getItem('Proyecto final', '4'),
    ]),
    getItem('Repositorio', '5', <DesktopOutlined />), 
    getItem('Cerrar Sesión', '6', <CloseOutlined />), 
];

const MenuSider = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 35,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
     </Layout>
  );
};
export default MenuSider;