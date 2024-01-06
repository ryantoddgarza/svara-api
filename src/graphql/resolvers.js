const Raga = require('../models/Raga.model');

const resolvers = {
  Query: {
    allRagas: async () => Raga.find(),
  },
};

module.exports = resolvers;
