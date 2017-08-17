const express = require('express');
const mustache = require('mustache-Express');
const dal = require('./dal.js');
const app = express();
const bodyParser = require('body-parser');
let todoArr = require('./todo.js');
let completeArr = require('./comp.js');


app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', __dirname + "/views");

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.get('/', function(req, res){
  res.render('index', {todoArr: dal.getPendingItems(), completeArr: dal.getCompItems()})
})

app.post('/', function(req, res){
  dal.addItem(req.body.itemAdd);
  res.redirect('/');
})

app.post('/delete/:id', function(req, res){
  dal.removeItem(req.params.id);
  res.redirect('/');
})

app.get('/edit/:id', function (req, res){
  let chosenItem = dal.getItem(req.params.id)
  res.render('editItem', chosenItem)
})

app.post('/edit/:id', function(req, res){
  dal.editItem(req.params.id, req.body)
  res.redirect('/');
})

app.listen(3000, function(req, res){
  console.log("App started on 3000.")
})

//dont let your memes be dreams
