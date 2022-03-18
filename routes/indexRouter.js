var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.index);

router.get('/dicoba', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
