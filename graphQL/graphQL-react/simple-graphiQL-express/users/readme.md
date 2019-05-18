#### Overview
A simple implementation of GraphQL using Node, Express, and a mock datastore. See comments in `schema/schema.js` for an explanation of how GraphQL works. See `server.js` for hooking in the GraphQL middleware.

#### To run
`node server.js`, and then navigate to `localhost:4000/graphql`. This is GraphiQL, a sweet IDE for playing with GraphQL. It's self-documenting, meaning as you add types and fields to your schema, they'll show up in the bar to the right. Super cool tool.

Example query:
```
{
  user(id: "23") {
    id,
    firstName,
    age,
  }
}
```

Add/remove props to/from the query to see how the returned JSON changes.
