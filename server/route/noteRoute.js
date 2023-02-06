const express = require('express');
const { getNotes, createNote } = require('../controller/noteController');
const route = express.Router();

route.route('/').get(getNotes).post(createNote)

module.exports = route;