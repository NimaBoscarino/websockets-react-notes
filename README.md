W6D4 - React and Websockets
===========================

Just a bunch of live coding really.

REPO: https://github.com/NimaBoscarino/websockets-react-notes

# Resources

- [WS](https://www.npmjs.com/package/ws)
- [SocketIO Docs](https://socket.io/docs/)
- [SocketIO Cheatsheet](https://socket.io/docs/emit-cheatsheet/)
- [SocketIO Client](https://github.com/socketio/socket.io-client)
- One of the tutorials I used during lecture...
    - https://medium.com/dailyjs/combining-react-with-socket-io-for-real-time-goodness-d26168429a34


# Goals:
- review some of yesterdays material
- fun with websockets, specifically in REACT!
- Show off Socket.IO

# PHASE I: REVIEW

- What are websockets????
    - a way to keep an open connection between a client and a server
    - allows for two way communication
    - How do we set up?
        - client side:
            - new WebSocket connection
            - send things!
            - receive things, without asking!
        - server side:
            - install ws
            - set up requests and responses

- Why do this?
    - allows to have transmission of data in almost-real-time
    - a chat application
    - filesharing
    - MMORPG
    - video streaming
    - notifications!

- can we serve an ENTIRE app via ws?
    - yeah, in theory
    - Express
        - GET -> /people/12
        - POST
        - PUT
        - DELETE -> /people/12

        Express: .get(people/:id)

# PHASE II: Cool Simple Demo

Basically a chat app with a bit of flair to it. Check out the `graffiti-wall` folder for the front end (`react-graffiti`) and the back end (`server-graffiti`).

# PHASE III: Kanye Simon!

Similar to the Graffiti webapp, this also has a backend and frontend. We used Socket.IO for this instead of WS. 

Enjoy! - Nima