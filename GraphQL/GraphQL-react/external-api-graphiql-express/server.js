const express         = require('express');
const expressGraphQL  = require('express-graphql');
const schema          = require('./schema/schema');
const PORT            = 4000;

const app = express();

// set up GraphQL middleware
app.use('/graphql', expressGraphQL({
  graphiql: true,
  schema,
}));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
