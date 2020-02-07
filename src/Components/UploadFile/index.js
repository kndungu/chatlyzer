import React, { Component } from "react";

import { chunk } from "lodash";

export default class UploadFile extends Component {
  constructor() {
    super();
    this.fileReader = null;
    this.state = { messages: null };
  }

  parseMessages = messages => {
    //   console.log('The messages', messages)
    // const ab = messages.split(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);

    messages.shift();
    const chunkedMessages = chunk(messages, 4);

    const getTime = m => {
      const [time, rest] = m.split("-");
      return time.replace(",", "").trim();
    };

    const getUser = me => {
      const [user, rest] = me.split(":");
      return user;
    };

    const getMessage = me => {
      const [user, rest] = me.split(":");
      return rest && rest.trim();
    };

    const getMessageUser = m => {
      const [time, message] = m.split("-");
      return message && message.trim();
    };

    chunkedMessages.shift();

    const parsedMessage = chunkedMessages.map(message => {
      return {
        day: message[0],
        month: message[1],
        year: message[2],
        time: getTime(message[3]),
        sender: getUser(getMessageUser(message[3])),
        message: getMessage(getMessageUser(message[3]))
      };
    });
    console.log(parsedMessage);
  };

  handleFileRead = e => {
    const content = this.fileReader.result;
    const messages = content.split(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
    console.log("The messagaes", messages);
    this.parseMessages(messages);
    // this.setState({ messages });
    // return messages;
  };

  handleFileChosen = file => {
    this.fileReader = new FileReader();
    this.fileReader.onloadend = this.handleFileRead;
    this.fileReader.readAsText(file);
  };

  render() {
    const { messages } = this.state;
    if (messages) {
      return (
        <div>
          {messages.map(message => {
            return (
              <div>
                {message}
                <br />
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <input
        type="file"
        id="file"
        accept=".txt"
        onChange={e => {
          this.handleFileChosen(e.target.files[0]);
        }}
      />
    );
  }
}
