var express = require('express');
var router = express.Router();

/* GET users listing. */

//router.get('/',(req,res) => {
 // User.findAll({
 //   attributes: ['name','lastname']
 // }).then(users => res.json(users));
//});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
