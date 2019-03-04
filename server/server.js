const express = require('express');
const http = require('http');
const pgp = require('pg-promise')();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const mailjet = require('node-mailjet')
  .connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);

const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.post('/api/send-email', function(req, res) {
  let requestBody = req.body;
  mailjet
    .post("send", {'version': 'v3.1'})
    .request(requestBody)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

const server = http.createServer(app);

server.listen(port, function() {
  console.log("Listening on port " + port + "...");
});