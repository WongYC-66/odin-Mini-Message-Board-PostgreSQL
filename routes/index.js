// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date()
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date()
//   }
// ];


var express = require('express');
const db = require('../db/query.js')

var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {

  const messages = await db.getAllMessages()

  res.render('index', { title: 'Mini Message Board', messages });
});

// route to FORM page
router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Post new' });
});

// handle FORM submission
router.post('/new', function (req, res, next) {
  let text = req.body.text
  let user = req.body.user
  if (text && user) {
    db.postOneMessage(text, user, String(new Date))
  }
  res.redirect('/')
});



module.exports = router;
