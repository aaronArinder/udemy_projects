#### Overview
This mocks an external API call with GraphQL and json-server. It shows the ease with which GraphQL handles asynchronous RootQuery resolves. `json-server` mocks RESTful services excellently. For example, the JSON

```
{
  "users": [
    {
      "id": "23", "firtName": "Bill", "age": 20
    }
  ]
}
```

will have an associated route generated: `localhost:3000/users/:id`. This is super useful when comparing GraphQL and REST.

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
