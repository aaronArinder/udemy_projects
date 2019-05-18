const graphql = require('graphql');
const axios = require('axios');

const {
  GraphQLInt,
  GraphQLSchema,
  GraphQLString,
  GraphQLObjectType,
} = graphql;


// UserType schema
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: {type: GraphQLString },
    age: { type: GraphQLInt },
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve (parentValue, args) {
        // mocking an external api call with json-server; ezpz
        return axios.get(`http://localhost:3000/users/${args.id}`)
          .then(response => response.data);
      }
    },
  }
});


module.exports = new GraphQLSchema({
  query: RootQuery,
});
