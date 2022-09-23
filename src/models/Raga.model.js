const mongoose = require('mongoose');

const RagaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Raga = mongoose.model('post', RagaSchema);

module.exports = Raga;
