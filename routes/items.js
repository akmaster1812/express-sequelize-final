let express = require('express');
let router = express.Router();
const models = require('../models')

router.get('/', (req, res)=>{
  models.Item.findAll()
    .then(items => {
        res.render('items/items_list', {data_items: items, title: "Items List"})
        // res.send({data_items: items, title: "Items List"})
    })
    .catch(err => {console.log(err);})
})

router.get('/add', (req, res)=>{
  res.render('items/items_add', {title: 'Add Items'})
})

router.post('/add', (req, res)=>{
  models.Item.create({
    name: req.body.name,
    brand: req.body.brand,
    codeitem: req.body.codeitem
  })
  .then( item => {
    res.redirect('/items')
  })
  .catch(err => {console.log(err);})
})


router.get('/delete/:id/', (req, res) => {
  models.Item.destroy({
    where: {id: req.params.id}
  })
  .then(item => {
    res.redirect('/items')
  })
  .catch(err => {console.log(err);})
})


router.get('/edit/:id/', (req, res) => {
  models.Item.findAll({
    where: {id: req.params.id}
  })
  .then(item => {
    res.render('items/items_edit', {data_items: item, title: 'Edit Items'})
    // res.send({data_items: item, title: 'Edit Items'})
  })
  .catch(err=> {console.log(err);})

})

router.post('/edit/:id', (req, res) => {
  models.Item.update({
    name: req.body.name,
    brand: req.body.brand,
    codeitem: req.body.codeitem
  },
  {where: {id: req.params.id}
  })
  .then(item => {
    res.redirect('/items')
  })
  .catch(err => {console.log(err);})
})

module.exports = router
