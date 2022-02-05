require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('app');
const app = express();
process.env.PORT = process.env.PORT || 80;

app.use(express.static('./dist'));
app.use(morgan('dev'));

app.get('/', async (req, res) => await res.sendFile('./dist/index.html'));

app.listen(process.env.PORT, () => debug('Server started on port %i', process.env.PORT));