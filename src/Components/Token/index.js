import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Token.css";

export default class App extends Component {
  state = {
    token: ""
  };

  handleTokenChange = e => {
    const { value } = e.currentTarget;

    this.setState({ token: value });
  };

  storeToken = e => {
    e.preventDefault();
    const { localStorage, location } = window;
    const { token } = this.state;

    localStorage.setItem("DW_API_TOKEN", token);
    location.href = "/upload";
  };

  render() {
    const { token } = this.state;

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
                    value={token}
                    onChange={this.handleTokenChange}
                  />
                </Col>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={this.storeToken}
                >
                  Submit
                </Button>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
