'use strict';

const categories = require('./categories-schema.js');
const mongoose = require('mongoose');

const products = mongoose.Schema({
  category: { type:String, required:true },
  name: { type:String, required:true},
  display_name: { type:String, required:false},
  description: { type:String, required:false},
});

module.exports = mongoose.model('products', products);