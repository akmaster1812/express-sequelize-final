let express = require('express');
let router = express.Router();
const models = require('../models')



router.get('/', (req, res) => {
  res.render('index', {title: 'Index Toko'})
})



module.exports = router
