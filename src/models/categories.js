'use strict';

const categorieSchema = require('./categorie-schema');
const dataModel = require('./model.js');

class Categorie extends dataModel { }

module.exports = new Categorie(categorieSchema);
