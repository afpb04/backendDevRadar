const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-iffww.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
app.use(cors({
  //  origin: 'http://localhoste:3000'
}));
app.use(express.json());
app.use(routes);
app.listen(3000);
//app.listen(3333);