var express = require('express');
var router = express.Router();
const aboutUsController = require('../controllers/aboutUsController');

/* GET home page. */
router.get('/', aboutUsController.index);
module.exports = router;
