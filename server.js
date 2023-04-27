const express = require('express');
const dotenv = require('dotenv');
const morgan= require('morgan'); 
// const bodyParser = require("body-parser")
const path = require('path');
const connectDB = require('./server/db/connect');



const app=express();

//defining dotenv's path
dotenv.config({path: 'config.env'});

const PORT=process.env.PORT || 3000;

app.use(morgan('tiny'));

// Mongo DB connection
connectDB();


// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true}));

// set view engine "ejs"/ "HTML"
app.set("view engine","ejs");

// if you're adding your views files into seperate folder under views you have to define the path
app.set("views", path.resolve(__dirname, "views"));

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));
app.use('/', express.static(path.join(__dirname, 'views')));

app.use('', require('./server/routes/router'));

app.get('/', (req, res)=>{
    res.render('index')
     })





app.listen(PORT, ()=> {console.log('Server is running on', PORT)})
