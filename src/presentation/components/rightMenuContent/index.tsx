import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

//assets
import logoCarr from '../../assets/landing/logo.png';

function RightMenu() {
  return (
      <Container>
      <Row>
        <Col>
          <img src={logoCarr} alt="" />        
        </Col>
      </Row>    
      <Row>
        <Col>
          <h3>Termino de Busqueda</h3>        
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Select aria-label="Default select example">
            <option>Seleccione Marca</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </Form.Select>  
        </Col>
          </Row>
     <Row>
        <Col>
          <Form.Select aria-label="Default select example">
            <option>Seleccione Modelo</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </Form.Select>  
        </Col>
          </Row> 
     <Row>
        <Col>
          <Form.Select aria-label="Default select example">
            <option>Seleccione Precio</option>
            <option value="1">5.000.000 - 10.000.000</option>
            <option value="2">11.000.000 - 20.000.000</option>
            <option value="3">21.000.000 - 40.000.000</option>
            </Form.Select>  
        </Col>
     </Row>     
    </Container>
  );
}

export default RightMenu;