const express = require("express");
const { userRouter, connection } = require("./routes/user.routes");
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/',userRouter);

app.listen(process.env.port,() => {

    connection.connect((err) => {
        if(err){
            console.log(`error while connecting to DB`);
        }
        else{
            console.log(`Connected to DB`);
        }
    });

    console.log(`running at ${process.env.port}`);
})

