const path = require('path')
const express = require('express')
const rootDir = require('../utils/path')
const router = express.Router();
const adminData = require('./admin');

router.get('/', (req,res)=>{
    const products = adminData.products;
    res.render('shop', {products, docTitle: 'Shop', path: '/'});
})

module.exports = router;