var express = require('express');
var router = express.Router();


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


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages: messages });
  
});

router.get('/new', function(req, res) { 
  res.render('form');
});

// how to access the data from the form in here 

router.post('/new', function(req, res) {
  messages.push({text: req.body.userMsg, user: req.body.authorName, added: new Date()})

  res.redirect(303, '/')
})









module.exports = router;
