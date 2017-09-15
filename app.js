const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const env = process.env.NODE_ENV || "development";
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.use(express.static('public'))

let index    = require('./routes/index.js')
let items = require('./routes/items.js')
let suppliers = require('./routes/suppliers.js')

// ===================== routing =================================//
app.use('/', index);
app.use('/items', items);
app.use('/suppliers', suppliers)
// =================== end of routing  ========================== //

//=========================================
app.listen(process.env.PORT || 3000, () => {
  console.log('app start on port 3000');
})
