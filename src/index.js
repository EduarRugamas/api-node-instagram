const express = require("express");
const api_ig = require("node-instagram").default;
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const engine = require("ejs-mate");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

//config middlewares
app.use(morgan('dev'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//router
app.use(require('./routes/index'));


app.listen(PORT, ()=> {
    console.log(`App Running on PORT: ${PORT}`)
});











