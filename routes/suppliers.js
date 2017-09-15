let express = require('express');
let router = express.Router();
const models = require('../models')

router.get('/', (req, res)=>{
  models.Supplier.findAll()
    .then(suppliers => {
        res.render('suppliers/suppliers_list', {data_suppliers: suppliers, title: "Supplier List"})
        // res.send({data_suppliers: suppliers, title: "Suppliers List"})
    })
    .catch(err => {console.log(err);})
})

router.get('/add', (req, res)=>{
  res.render('suppliers/suppliers_add', {title: 'Add suppliers'})
})

router.post('/add', (req, res)=>{
  models.Supplier.create({
    name: req.body.name,
    kota: req.body.kota,
  })
  .then( suppliers => {
    res.redirect('/suppliers')
  })
  .catch(err => {console.log(err);})
})


router.get('/delete/:id/', (req, res) => {
  models.Supplier.destroy({
    where: {id: req.params.id}
  })
  .then(item => {
    res.redirect('/suppliers')
  })
  .catch(err => {console.log(err);})
})


router.get('/edit/:id/', (req, res) => {
  models.Supplier.findAll({
    where: {id: req.params.id}
  })
  .then(item => {
    res.render('suppliers/suppliers_edit', {data_suppliers: suppliers, title: 'Edit Suppliers'})
    // res.send({data_suppliers: suppliers, title: 'Edit Suppliers'})
  })
  .catch(err=> {console.log(err);})

})

router.post('/edit/:id', (req, res) => {
  models.Supplier.update({
    name: req.body.name,
    kota: req.body.kota,
  },
  {where: {id: req.params.id}
  })
  .then(item => {
    res.redirect('/items')
  })
  .catch(err => {console.log(err);})
})

module.exports = router
