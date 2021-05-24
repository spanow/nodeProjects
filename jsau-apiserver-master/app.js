const express = require("express");
const session = require('express-session');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors =require("cors");
const user = require('./models/user');

if(process.env.ENV === 'Test'){
    console.log('this is Test');
    mongoose.connect('mongodb://localhost:27017/bookAPi_Test');
}else {
    console.log('this is not a Test');

    mongoose.connect('mongodb://localhost:27017/bookAPi');
}
const port = process.env.PORT || 3000;
const Book = require('./models/bookModel');

const bookRouter = require('./src/routes/bookRouter')(Book);
const userRoutes = require('./src/routes/userRoutes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({secret:"mySecretKey",cookie:{maxAge: 24*60*60*1000}}));
app.use(cors({credentials:true,origin:'http://localhost:4200'}));
app.use("/api", bookRouter);
app.use("/api", userRoutes);

//tp-async-promise-async-await
app.get("/", async (req, res) => {
    try {
        res.redirect('/info');
    }catch (err){
        console.log(err)
        throw err
    }

});

//tp-async-promise-async-await
app.get("/info",async (req,res)=>{
    try {
        res.status(200).send('Jsau-apiserver 1.0.0.0');
    }catch (err){
        console.log(err)
        throw err
    }
});
app.server =app.listen(port, () => {
    console.log("server started in " + port);
});


app.use(session({
    key: 'user',
    secret: "termatMouad",
    name:'uniqueSessionID',
    cookie: {
        expires: 600000
    },
    resave: false,
    saveUninitialized: false,
}));


module.exports= app;
