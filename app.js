const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000
const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes)
app.use(shopRoutes)
app.use((req,res,next)=>{
    res.status(404).render('404', {docTitle: '404. Page Not Found'})
})

app.listen(PORT, ()=>{
    console.log('express server running')
});