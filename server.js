const express = require('express')
const app = express();
const port = 3000;
const path = require('path');

/* Homepage */
app.get('/', function(request, response) {
  const filePath = path.resolve(__dirname, './src/pages/homepage', 'index.html');
  response.sendFile(filePath);
});

/* Login page */
app.get('/dang-nhap', function (request, response) {
  const filePath = path.resolve(__dirname, './src/pages/logpages/', 'login.html');
  response.sendFile(filePath);
});

/* Sign-in page */
app.get('/dang-ki', function(request, response) {
  const filePath = path.resolve(__dirname, './src/pages/logpages/', 'signin.html');
  response.sendFile(filePath);
});

/* Modal pages */
app.get('/biet-thu-nghi-duong', function (request, response) {
  const filePath = path.resolve(__dirname, './src/pages/modalpage/', 'biet-thu-nghi-duong.html');
  response.sendFile(filePath);
});

app.get('/can-ho-chung-cu', function (request, response) {
  const filePath = path.resolve(__dirname, './src/pages/modalpage/', 'can-ho-chung-cu.html');
  response.sendFile(filePath);
});

app.get('/dat', function (request, response) {
  const filePath = path.resolve(__dirname, './src/pages/modalpage/', 'dat.html');
  response.sendFile(filePath);
});

app.get('/du-an-chung-cu-mo-rong', function (request, response) {
  const filePath = path.resolve(__dirname, './src/pages/modalpage/', 'du-an-chung-cu-mo-rong.html');
  response.sendFile(filePath);
});

app.get('/du-an-chung-cu', function (request, response) {
  const filePath = path.resolve(__dirname, './src/pages/modalpage/', 'du-an-chung-cu.html');
  response.sendFile(filePath);
});

app.get('/du-an-do-thi', function (request, response) {
  const filePath = path.resolve(__dirname, './src/pages/modalpage/', 'du-an-do-thi.html');
  response.sendFile(filePath);
});

app.get('/du-an-nghi-duong', function (request, response) {
  const filePath = path.resolve(__dirname, './src/pages/modalpage/', 'du-an-nghi-duong.html');
  response.sendFile(filePath);
});

app.get('/du-an-phuc-hop', function (request, response) {
  const filePath = path.resolve(__dirname, './src/pages/modalpage/', 'du-an-phuc-hop.html');
  response.sendFile(filePath);
});

app.get('/nha-rieng', function (request, response) {
  const filePath = path.resolve(__dirname, './src/pages/modalpage/', 'nha-rieng.html');
  response.sendFile(filePath);
});

app.get('/thong-tin-mo-rong-duong', function (request, response) {
  const filePath = path.resolve(__dirname, './src/pages/modalpage/', 'thong-tin-mo-rong-duong.html');
  response.sendFile(filePath);
});

/* News detail page */
app.get('/thong-tin-chi-tiet', function (request, response) {
  const filePath = path.resolve(__dirname, './src/pages/newsdetailpage/', 'index.html');
  response.sendFile(filePath);
});

/* Result pages */
app.get('/ket-qua', function (request, response) {
  const filePath = path.resolve(__dirname, './src/pages/resultpage/', 'index.html');
  response.sendFile(filePath);
});

app.get('/ket-qua/thong-tin', function (request, response) {
  const filePath = path.resolve(__dirname, './src/pages/resultpage/info/', 'index.html');
  response.sendFile(filePath);
});

app.get('/ban-do', function (request, response) {
  const filePath = path.resolve(__dirname, './src/pages/resultpage/map/', 'index.html');
  response.sendFile(filePath);
});

app.get('/ket-qua/tin-tuc', function (request, response) {
  const filePath = path.resolve(__dirname, './src/pages/resultpage/news/', 'index.html');
  response.sendFile(filePath);
});

app.get('/ket-qua/bang-gia', function (request, response) {
  const filePath = path.resolve(__dirname, './src/pages/resultpage/pricelist/', 'index.html');
  response.sendFile(filePath);
});

app.use('/', express.static('node_modules'));
app.use('/', express.static('src'));


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on http://localhost:%d in %s mode", this.address().port, app.settings.env);
});