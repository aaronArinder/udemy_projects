#### Overview
This mocks an external API call with GraphQL and json-server. It shows the ease with which GraphQL handles asynchronous RootQuery resolves.

#### To run
1) `node server.js`
2) `npm run json:server`

Example query:
```
{
  user(id: "23") {
    firstName,
  }
}
```
