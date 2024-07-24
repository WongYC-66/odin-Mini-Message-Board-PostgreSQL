const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages });
});
router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function(req, res, next) {
  let text = req.body.text
  let user = req.body.user
  if(text && user) messages.push({text, user, added: new Date()})
  res.redirect('/')
});



module.exports = router;
