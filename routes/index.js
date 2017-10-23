var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// router.get('/app',function (req,res,next) {
//   res.render('app',{title:'appjade'})
//
// })
router.get('/sg',function (req,res,next) {
    res.render('sg',{title:'sgjade'})

})

module.exports = router;
