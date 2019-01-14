'use strict';

const products = require('./products-schema.js');
const mongoose = require('mongoose');

const categories = mongoose.Schema({
  name: { type:String, required:true},
  description: { type:String, required:false},
}, {toObject:{virtuals:true}, toJSON:{virtuals:true}});

categories.virtual('')

module.exports = mongoose.model('categories', categories);