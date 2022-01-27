
const mongoose = require('mongoose');

const { Schema } = mongoose;


const schema = new Schema({
  title: {
    type: String,
    required: true,
   
  },
  service: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  urlImg: {
    type: String,
    required: false
  }
});

const Developments = mongoose.model('Developments', schema);

module.exports = Developments;