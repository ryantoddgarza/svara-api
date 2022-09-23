const { gql } = require('apollo-server-express');

const schema = gql`
  type Query {
    getAllRagas: [Raga]!
  }

  type Raga {
    name: String!
  }
`;

module.exports = schema;
