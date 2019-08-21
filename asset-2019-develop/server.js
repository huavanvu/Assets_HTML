const express = require('express')
const app = express();
const port = 3000;
const path = require('path');

app.set('views', './src/pages');

app.engine('ejs', require('ejs-locals'));

app.get('/', function (req, res) {
  res.render('homepage/index.ejs');
});

app.get('/ket-qua', function (req, res) {
  res.render('resultpage/index.ejs');
});

app.get('/ket-qua/tin-tuc', function (req, res) {
  res.render('resultpage/news/index.ejs');
});

app.get('/ket-qua/thong-tin', function (req, res) {
  res.render('resultpage/info/index.ejs');
});

app.get('/ket-qua/bang-gia', function (req, res) {
  res.render('resultpage/pricelist/index.ejs');
});

app.get('/ban-do', function (req, res) {
  res.render('resultpage/map/index.ejs');
});


app.get('/tin-tuc-chi-tiet', function (req, res) {
  res.render('newsdetailpage/index.ejs');
});

app.get('/can-ho-chung-cu', function (req, res) {
  res.render('modalpage/canhochungcu.ejs')
});

app.use('/', express.static('node_modules'));
app.use('/', express.static('src'));


app.listen(process.env.PORT || 3000, function () {
  console.log("Express server listening on http://localhost:%d in %s mode", this.address().port, app.settings.env);
});