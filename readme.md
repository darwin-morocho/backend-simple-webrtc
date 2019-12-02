# install

just run

```
npm install
```

# run

in develop

```
npm run dev
```

# Emits

|  name  |                          params                           |                        description                         |
| :----: | :-------------------------------------------------------: | :--------------------------------------------------------: |
| `join` |                          string                           | emit to this event to join the chat with a unique username |
| `call` | `{ username: string, offer: { type: string, sdp: any } }` | call to some user by `username` and you need pass `offer`  |
| `answer` | `{ username: string, answer: { type: string, sdp: any } }` | send your response to someone request call to by `username` and you need pass `answer`  |
| `candidate` | `{ username: string, candidate: { candidate: string, sdpMid: string, sdpMLineIndex: int } }` | when the two parts has been joined to one the call, both need send yours candidates to the other  |
# Ons

|  name  |                          params                           |                        description                         |
| :----: | :-------------------------------------------------------: | :--------------------------------------------------------: |
| `on-join` |                          boolean                           | this listener is the response to your `join` , if the param `boolean` is true you are joined the chat |
| `on-call` | `{ username: string, offer: { type: string, sdp: any } }` | incoming call  |
| `on-answer` | `{ type: string, sdp: any }` | response to your `call`  |
| `on-candidate` | `{ candidate: string, sdpMid: string, sdpMLineIndex: int }` | listen the candidate to the other user  |
