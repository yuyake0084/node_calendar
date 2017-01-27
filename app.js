const express = require('express');
const path = require('path');
const db = require('mongoskin').db('localhost/testdb', { w: 0 });

db.bind('event');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.bodyParser());
app.listen(3000);