'use strict';

const productSchema = require('./products-schema');
const dataModel = require('./model.js');

class Products extends dataModel { }

module.exports = new Products(productSchema);
