'use strict';

const categories = require('./categories-schema.js');
const mongoose = require('mongoose');

const products = mongoose.Schema({
  category: { type:String, required:true },
  name: { type:String, required:true},
  description: { type:String, required:false},
  price: { type:Number, required:true},
});

module.exports = mongoose.model('products', products);