'use strict';

const express = require('express');
const swaggerUI = require('swagger-ui-express');
const modelFinder = require('../middleware/model-finder.js');
const router = express.Router();
const swaggerDocs = require('../../docs/config/swagger.json');

router.param('model', modelFinder);

// Route Definitions
router.use('/api/v1/doc/', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
router.use('/api/v1/docs', express.static('docs'));
router.get('/api/v1/:model', handleGetAll);
router.post('/api/v1/:model', handlePost);

router.get('/api/v1/:model/:id', handleGetOne);
router.delete('/api/v1/:model/:id', handleDelete);
router.put('/api/v1/:model/:id', handlePut);

// Route Handlers
/**
 * Get all records
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function handleGetAll(req, res, next) {
  req.model.get()
    .then(results => {
      let count = results.length;
      res.json({ count, results });
    })
    .catch(next);
}

/**
 * Get a record
 * @param {number} req 
 * @param {*} res 
 * @param {*} next 
 */
function handleGetOne(req, res, next) {
  let id = req.params.id;
  req.model.get(id)
    .then(records => res.json(records[0]))
    .catch(next);
}

/**
 * Add a record
 * @param {obj} req 
 * @param {*} res 
 * @param {*} next 
 */
function handlePost(req, res, next) {
  req.model.post(req.body)
    .then(result => res.json(result))
    .catch(next);
}

/**
 * Update a record
 * @param {number} req 
 * @param {*} res 
 * @param {*} next 
 */
function handlePut(req, res, next) {
  let id = req.params.id;
  req.model.put(id, req.body)
    .then(records => res.json(records[0]))
    .catch(next);
}

/**
 * Remove a record
 * @param {number} req 
 * @param {*} res 
 * @param {*} next 
 */
function handleDelete(req, res, next) {
  let id = req.params.id;
  req.model.delete(id)
    .then(records => res.json(records[0]))
    .catch(next);
}

module.exports = router;