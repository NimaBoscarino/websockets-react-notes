const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 8080 });
 

const messages = []

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received', message);

    wss.clients.forEach(client => {
      let clientCount = {
        type: 'clientCount',
        payload: {
          count: wss.clients.size
        }
      }

      client.send(JSON.stringify(clientCount))
    })
  });

});

console.log('listening')
