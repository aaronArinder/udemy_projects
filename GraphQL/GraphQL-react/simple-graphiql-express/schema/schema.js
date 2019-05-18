const graphql = require('graphql');

const {
  GraphQLInt,
  GraphQLSchema,
  GraphQLString,
  GraphQLObjectType,
} = graphql;


// datastore mock
const users = [
  { id: '23', firstName: 'Bill', age: 20 },
  { id: '47', firstName: 'Samantha', age: 21 },
];

// UserType schema
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: {type: GraphQLString },
    age: { type: GraphQLInt },
  }
});

/*
 * with the above `users`, a query might look like this:
 *   {
 *     user(id: '23') {
 *     id,
 *     firstName,
 *     age
 *     }
 *   }
 *
 * and the returned data:
 *   {
 *     "data": {
 *       "user": {
 *         "id": "47",
 *         "firstName": "Samantha",
 *         "age": 21
 *       }
 *     }
 *   }
 *
 * see notes on `RootQuery` for how this plays out. If you have the browser open
 * to localhost:3000, remove a prop from the query and see how the returned JSON
 * changes. Try querying a user that doesn't exist. Try removing the argument to user.
 * */

// RootQuery is our entrypoint to the graph. It picks out a node as the starting point.
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  // all nodes of the graph
  fields: {
    // this is how top-level nodes are specified
    user: {
      // including their associated type
      type: UserType,
      // and expected arguments and types
      args: { id: { type: GraphQLString } },
      // this is the hook into our db/datastore to actually grab the data
      resolve (parentValue, args) {
        // return an object; GraphQL makes it into an instance of UserType
        return  users.find(user => user.id === args.id);
      }
    },
  }
});


module.exports = new GraphQLSchema({
  query: RootQuery,
});
