# W 4 D 2: React and Websockets (More Websockets) - SOCK-ET

REPO: https://github.com/NimaBoscarino/websockets-react-notes

https://www.youtube.com/watch?v=CP6SBXl4KiI

# Resources

- [WS](https://www.npmjs.com/package/ws)
- [SocketIO Docs](https://socket.io/docs/)
- [SocketIO Cheatsheet](https://socket.io/docs/emit-cheatsheet/)
- [SocketIO Client](https://github.com/socketio/socket.io-client)
- One of the tutorials I've used before in a lecture...
    - https://medium.com/dailyjs/combining-react-with-socket-io-for-real-time-goodness-d26168429a34

Goals: 

- review some of yesterday's material
- fun with websockets
- show off Socket.HEYO

## Phase 1: Review

- multiple clients
- interactive
- endpoints
- connections
- opening/closing
- updates
- sending
- receiving
- realtime communication
- sockets
- web
- full duplex as opposed to simplex

- HTTP is transactional (client makes request, gets response, that's it)
  - Paper planes
- WebSockets
  - Being on the phone


```js
this.chattySocket = new WebSocket("ws://localhost:3001")
this.zuckoSocket = new WebSocket("ws://thezuckmeister.com")
```

```js
$.get('google.com')
$.get('facebook.com')
```

## Set up socket connections

### Client-side

```js
let socket = new WebSocket("SOMEURL")

// You're using react, meaning that we have to save that socket somewhere

componentWillMount/constructor/componentDidMount() {
  this.socket = new WebSocket("SOMEURL")
}
```

### Server-side

We need to have an actual server set up, listening for socket connections. And we attach a listener to every new connection. (something like, "ON CONNECTION")

```js
function someCallback(aConnection) {
  // do something with that connection
}

wss.on('connection', someCallback)
```

## Sending messages from the client

```js
socket.send('some string')
socket.send(JSON.stringify(someObject))

// with React
someFunction() {
  this.socket.send('some string')
  this.socket.send(JSON.stringify(someObject))
}
```

## Server-side

To every new connection, we have to attach a listener for new messages.

```js

function someOtherCallback(message) {
  // do something with that message
}

aConnection.on('message', someOtherCallback)
```

## Aside...

If we have HTTP for communicating. And we have WS for communicating some data.

Can we serve an entire application JUST using websockets?

- sure, why not?
- But HTTP requests have a nice format
  - VERBS (GET, POST, DELETE)
  - Headers (cookies, authentication stuff, content-type)
  - Path (google.com/search) , (tiny.com/urls/12)

You can do 4 THINGS with websockets

If you want routes, you need to do that work. 

POST /messages
POST /systemMessages
POST /login

JSON.stringify({
  type: 'asdasd',
  payload: 'asdasdasd'
})

if (type === 'systemMessage') {

} else if (type === 'message') {
  ...
}

## Phase 2: Fun

#### PHASE II: Cool Simple Demo

Basically a chat app with a bit of flair to it. Check out the `graffiti-wall` folder for the front end (`react-graffiti`) and the back end (`server-graffiti`).

#### PHASE III: Kanye Simon!

Similar to the Graffiti webapp, this also has a backend and frontend. We used Socket.IO for this instead of WS. 


## Phase 3: More Fun - Choose your own fun 

- aka. Watch Nima struggle a bit. We did a client counter. See the code in `clientCountReact.jsx` and `clientCountServer.js`.

Enjoy! - Nima