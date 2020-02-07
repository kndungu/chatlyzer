import React, { Component } from "react";

import emojiRegex from "emoji-regex";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class UploadFile extends Component {
  parsedMessage = JSON.parse(window.localStorage.getItem("PARSED_MESSAGES"));

  getTotalMessages = () => {
    return (
      <Card style={{ width: "28rem", margin: "0 auto", marginTop: "1.5rem" }}>
        <Card.Body>
          <Card.Title>Total Messages</Card.Title>
          <Card.Text>{this.parsedMessage.length}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  getTotalMessagesByUser = () => {
    const users = [];

    this.parsedMessage.forEach(message => {
      if (users.some(user => user.sender === message.sender)) {
        const index = users.findIndex(user => user.sender === message.sender);
        users.splice(index, 1, {
          sender: users[index].sender,
          messageCount: users[index].messageCount + 1
        });
      } else {
        users.push({ sender: message.sender, messageCount: 0 });
      }
    });

    const result = users.filter(user => user.messageCount > 6);
    const total = users[0].messageCount + users[1].messageCount;
    return (
      <Card style={{ width: "28rem", margin: "0 auto", marginTop: "1.5rem" }}>
        <Card.Body>
          <Card.Title>Number of messages sent by each party</Card.Title>
          {result.map(m => {
            return (
              <Card.Text>
                <div>
                  <b>{m.sender}</b>
                </div>
                <div>{`${m.messageCount} (${(
                  (m.messageCount / total) *
                  100
                ).toFixed(2)}%)`}</div>
              </Card.Text>
            );
          })}
        </Card.Body>
      </Card>
    );
  };

  getTotalMessagesWithEmojis = () => {
    const users = [];
    const regex = emojiRegex();

    this.parsedMessage.forEach(message => {
      if (regex.exec(message.message)) {
        if (users.some(user => user.sender === message.sender)) {
          const index = users.findIndex(user => user.sender === message.sender);
          users.splice(index, 1, {
            sender: users[index].sender,
            messageCount: users[index].messageCount + 1
          });
        } else {
          users.push({ sender: message.sender, messageCount: 0 });
        }
      }
    });

    const result = users.filter(user => user.messageCount > 6);
    return (
      <Card style={{ width: "28rem", margin: "0 auto", marginTop: "1.5rem" }}>
        <Card.Body>
          <Card.Title>Number of emojis sent by each party</Card.Title>
          {result.map(m => {
            return (
              <Card.Text>
                <div>
                  <b>{m.sender}</b>
                </div>
                <div>{m.messageCount}</div>
              </Card.Text>
            );
          })}
        </Card.Body>
      </Card>
    );
  };

  getTotalMessagesWithQuestions = () => {
    const users = [];

    this.parsedMessage.forEach(message => {
      if (message.message && message.message.includes("?")) {
        if (users.some(user => user.sender === message.sender)) {
          const index = users.findIndex(user => user.sender === message.sender);
          users.splice(index, 1, {
            sender: users[index].sender,
            messageCount: users[index].messageCount + 1
          });
        } else {
          users.push({ sender: message.sender, messageCount: 0 });
        }
      }
    });

    const result = users.filter(user => user.messageCount > 6);
    return (
      <Card style={{ width: "28rem", margin: "0 auto", marginTop: "1.5rem" }}>
        <Card.Body>
          <Card.Title>Number of questions asked by each party</Card.Title>
          {result.map(m => {
            return (
              <Card.Text>
                <div>
                  <b>{m.sender}</b>
                </div>
                <div>{m.messageCount}</div>
              </Card.Text>
            );
          })}
        </Card.Body>
      </Card>
    );
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div>
              {this.getTotalMessages()}
              {this.getTotalMessagesByUser()}
              {this.getTotalMessagesWithEmojis()}
              {this.getTotalMessagesWithQuestions()}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
