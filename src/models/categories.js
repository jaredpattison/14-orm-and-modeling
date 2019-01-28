'use strict';

const categoriesSchema = require('./categories-schema');
const dataModel = require('./model.js');

class Categories extends dataModel { }

module.exports = new Categories(categoriesSchema);

