import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props)

    this.socket = new WebSocket("ws://localhost:8080")
    this.socket.onopen = () => {
      this.socket.send('I HAVE CONNECTED')
    }

    this.state = {
      clientCount: 0
    }

    this.handleClientCount = this.handleClientCount.bind(this)
    // this.handleMessage = this.handleMessage.bind(this)

    this.socket.onmessage = this.handleMessage

  }



  handleMessage = (message) => {
    // does something with the message, parse it, choose correct handler
    let parsedData = JSON.parse(message.data)
    console.log(parsedData)

    let messageType = parsedData.type
    if (messageType === 'clientCount') {
      console.log(this)
      this.handleClientCount(parsedData.payload)
    }
  }

  handleClientCount(data) {
    this.setState({
      clientCount: data.count
    })
  }

  render() {
    return (
      <div>
        <h1>Client Count: {this.state.clientCount}</h1>
      </div>
    );
  }
}
export default App;
