const express = require('express');
const app=express();
const port =8009
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose');
const bodyParser = require('body-parser')
const session = require('express-session');
app.use(bodyParser.json());
app.use(express.json());
// app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const MongoStore = require('connect-mongo');

app.use(session({ 
    name: 'Ecomm Bazar',
    secret: 'mykey',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 10000)
    },
    store: MongoStore.create({

        mongoUrl: 'mongodb://localhost/ecombazzar',
        autoRemove: 'disabled'

    },
    function(err){
        console.log(err || 'error in connect - mongodb setup ok');
    }
    )
}));

app.use('/', require('./routes'));


app.listen(port,function(err){
    if(err){
        console.log("error in starting server");
        
    }
    console.log('server start on port',port);
})