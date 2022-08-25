import React from 'react';
//lib
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// assets
import carrImg from '../../assets/landing/c1.png'
import carrImg1 from '../../assets/landing/c2.png'
import carrImg2 from '../../assets/landing/c3.png'
//styles
import ModalCarr from '../../components/modal/index'

function Cards(){
    return(
        <div>
            <Container>
            <Row>
                <Col>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={carrImg} />
                        <Card.Body>
                            <Card.Title>Camioneta RENAULT</Card.Title>
                            <Card.Text>
                                Modelo - 2004, KM 20000, Marca RENAULT, Precio $25.000.000
                            </Card.Text>
                           <ModalCarr/>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={carrImg1} />
                        <Card.Body>
                            <Card.Title>Camioneta MERCEDEZ</Card.Title>
                            <Card.Text>
                                Modelo - 2004, KM 60000, Marca MERCEDEZ, Precio $25.000.000
                            </Card.Text>
                            <ModalCarr/>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={carrImg2} />
                        <Card.Body>
                            <Card.Title>Camioneta KIA</Card.Title>
                            <Card.Text>
                                Modelo - 2004, KM 20000, Marca KIA, Precio $25.000.000
                            </Card.Text>
                            <ModalCarr/>
                        </Card.Body>
                    </Card>
                    </Col>
                    
                </Row>
                 <Row>
                <Col>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={carrImg} />
                        <Card.Body>
                            <Card.Title>Camioneta RENAULT</Card.Title>
                            <Card.Text>
                                Modelo - 2004, KM 20000, Marca RENAULT, Precio $25.000.000
                            </Card.Text>
                            <ModalCarr/>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={carrImg1} />
                        <Card.Body>
                            <Card.Title>Camioneta MERCEDEZ</Card.Title>
                            <Card.Text>
                                Modelo - 2004, KM 60000, Marca MERCEDEZ, Precio $25.000.000
                            </Card.Text>
                            <ModalCarr/>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={carrImg2} />
                        <Card.Body>
                            <Card.Title>Camioneta KIA</Card.Title>
                            <Card.Text>
                                Modelo - 2004, KM 20000, Marca KIA, Precio $25.000.000
                            </Card.Text>
                            <ModalCarr/>
                        </Card.Body>
                    </Card>
                    </Col>
                    
            </Row>
          </Container>
        </div>
    );
}
export default Cards;