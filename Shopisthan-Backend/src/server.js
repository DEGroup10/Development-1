const express = require('express')
const env = require('dotenv')
const app = express()
const mongoose = require('mongoose');


//routes
const adminRoutes = require('./routes/admin/auth');



// environment variable 
env.config();

//mongodb connection
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@e-commcluster.m62kr.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
 ).then(() => {
        console.log('Database connected');
    });

app.use(express.json());
app.use('/api',adminRoutes);


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})