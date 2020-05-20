const router = require('express').Router();
const exampleController = require('../controller/example.controller');

router.route('/').get(exampleController.example);

module.exports = router;
