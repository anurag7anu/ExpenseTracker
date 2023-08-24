const express = require("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors())

mongoose.set('strictQuery', true);
dotenv.config();
mongoose.connect(process.env.MONGO_URL,{
    dbName: "ExpenseManager",
}).then(()=>{
    console.log("DB Connected");
}).catch((err)=>{
    console.log(err);
});


//routes
//user
app.use('/api/v1/users',require('./routes/userRoute'));
//transaction
app.use('/api/v1/transections',require('./routes/transectionRoute'));


app.listen(process.env.PORT, ()=>{
    console.log(`Server is listening to port ${process.env.PORT}`);
});