const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 3080;
const os = require("os");
const hostname = os.hostname();
const path = require('path');
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/api/products', (req, res) => {
  const prefix = req.protocol + '://' + req.get('host');
  // Fake data
  const products = [{
    sku: 'MYSHOES',
    name: 'Black Running Shoes',
    imageUrl: prefix + '/assets/images/products/black-shoes.jpg',
    department: ['Men', 'Shoes', 'Running Shoes'],
    price: 109.99
  }, {
    sku: 'NEATOJACKET',
    name: 'Blue Jacket',
    imageUrl: prefix +  '/assets/images/products/blue-jacket.jpg',
    department: ['Women', 'Apparel', 'Jackets & Vests'],
    price: 238.99
  }, {
    sku: 'NICEHAT',
    name: 'A Nice Black Hat',
    imageUrl: prefix +  '/assets/images/products/black-hat.jpg',
    department: ['Men', 'Accessories', 'Hats'],
    price: 29.99
  }];
  res.json(products);
});

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
