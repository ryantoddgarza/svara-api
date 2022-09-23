const Raga = require('../models/Raga.model');

const resolvers = {
  Query: {
    getAllRagas: async () => Raga.find(),
  },
};

module.exports = resolvers;
