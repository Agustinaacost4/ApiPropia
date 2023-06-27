const express = require('express');
const router = express.Router();
const { list, detail, store, update, destroy } = require('../../controllers/actorsApiController');


// Llega como:  /api/v1/actors
router
    .get('/', list)
    .get('/:id', detail)
    .post('/', store)
    .put("/:id", update)
    .delete("/:id", destroy)


module.exports = router;