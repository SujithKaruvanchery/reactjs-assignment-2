import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import axios from "axios";
import "./App.css";

import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Today Deals</Nav.Link>
                <Nav.Link href="#action3">Best Sellers</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-dark">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Container>
        <Row className="g-4">
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={4} xl={3} xxl={3}>
              <Card style={{}} className="cardbody">
                <Card.Img
                  variant="top"
                  src={product.image}
                  className="product-image mx-auto d-block"
                />
                <Card.Body>
                  <Card.Title className="product-title">
                    {product.title}
                  </Card.Title>
                  <Card.Title className="product-price">
                    ${product.price}
                  </Card.Title>
                  <Card.Text className="product-description">
                    {product.description}
                  </Card.Text>
                  <div className="buttons">
                    <div>
                      <Button variant="dark" size="sm">Add to Cart</Button>
                    </div>
                    <div>
                      <Button variant="outline-dark" className=" btn-two" size="sm">
                        View Product
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <footer>
        <hr />
        <p>Copyrights 2024-25 All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
