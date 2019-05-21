const instruction = require('./response')

const http = require("http");
var helmet = require('helmet');
var bodyParser = require('body-parser');
const hostname = 'localhost';
var express = require('express'),
app = express(),
server = require('http').createServer(app),
port = 8080;
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/setInstruction', instruction.setInstruction);
app.get('/getInstruction', instruction.getInstruction);


//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
