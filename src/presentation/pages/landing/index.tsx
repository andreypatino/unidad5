/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

//##Compañeros de grupo Karen Tatiana Jaimes, Andrey Sarria, Poldark Diaz

//##API que se utilizo es el seguiente https://jsonplaceholder.typicode.com/posts/1
//lib
import axios from "axios";
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//assets

// style
// component
import Header from '../../components/header/index';
import Footer from '../../components/footer';
import Slider from '../../components/slider';
import Cards from "../../components/cards";
import RightMenu from "../../components/rightMenuContent";


const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function landing() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log('Respuesta del API -->', response.data);
      setPost(response.data.title);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
       <Header />
          <Slider />
          <h1>Respuesta del API</h1>
          <p>{post}</p>
          <Container>
            <Row>
              <Col xs lg="3">
                <RightMenu />
              </Col>
              <Col>
                <Cards/>
              </Col>
        </Row>
        
          </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <Footer />  
    </div>
  );
}