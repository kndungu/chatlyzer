import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Container>
      <Row>
        <Col className="sparkle-container">
          <Image
            src="https://assets.data.world/assets/new-sparkle-logo.da2d4c3dbd24c2b928c6c4cf41525872.png"
            rounded
          />
          <Form className="token-input-container">
            <Form.Row>
              <Col>
                <Form.Control
                  type="password"
                  placeholder="Enter your data.world token"
                />
              </Col>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
