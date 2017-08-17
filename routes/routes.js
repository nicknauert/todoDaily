const express = require('express');
const router = express.Router();
const dal = require('../dal')

router.route('/')
  .get(function(req, res){
    res.render('index', {todoArr: dal.getPendingItems(), completeArr: dal.getCompItems()})
  })
  .post(function(req, res){
    dal.addItem(req.body.itemAdd);
    res.redirect('/');
  }
)

router.route('/delete/:id')
  .post(function(req, res){
    dal.removeItem(req.params.id);
    res.redirect('/');
  }
)

router.route('/edit/:id')
  .get(function (req, res){
    let chosenItem = dal.getItem(req.params.id)
    res.render('editItem', chosenItem)
  })
  .post( function(req, res){
    dal.editItem(req.params.id, req.body)
    res.redirect('/');
  }
)

module.exports = router
