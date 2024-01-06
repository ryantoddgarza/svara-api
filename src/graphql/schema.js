const { gql } = require('apollo-server-express');

const schema = gql`
  type Query {
    allRagas: [Raga]!
  }

  type Raga {
    name: String!
  }
`;

module.exports = schema;
