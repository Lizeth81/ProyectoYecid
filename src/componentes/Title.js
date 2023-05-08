import React from 'react'
import { Col, Row, Image } from 'antd';
import logoUdes from '../assets/logo-udes.png';
import '../css/Home.css';


const Title = () => (
  <>
  <Row>
    <Col span={18}>
    <div className="TitletStyle">
            ADMINISTRACIÓN DE LOS PROYECTOS DE GRADO EN EL PROGRAMA< br />
            DE INGENIERÍA DE SISTEMAS DE LA UNIVERSIDAD DE < br />
            SANTANDER UDES CÚCUTA.        
        </div>
    </Col>
    <Col span={6}>
      <div>
        <Image
          width={210}
          src={logoUdes}/>
      </div>
    </Col>
  </Row>
  </>
)
 /* return (
    <>
        <div className="TitletStyle">
            ADMINISTRACIÓN DE LOS PROYECTOS DE GRADO EN EL PROGRAMA 
            DE INGENIERÍA DE SISTEMAS DE LA UNIVERSIDAD DE 
            SANTANDER UDES CÚCUTA.        
        </div>
        <div>
          <img src="../assets/logo-udes.png"/>
        </div>
    </>
  )
}
*/
export default Title
