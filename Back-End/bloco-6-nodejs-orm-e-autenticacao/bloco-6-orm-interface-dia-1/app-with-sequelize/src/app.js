const express = require('express');
const UserRouter = require('./router');

const app = express();

app.use(express.json());

app.use('/user', UserRouter.User);

module.exports = app;

