const express = require('express')
const env = require('dotenv')
const app = express()
const mongoose = require('mongoose');

const cors = require('cors');


//routes
const adminRoutes = require('./routes/admin/auth');
const storeRoutes = require('./routes/store/store');
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/admin/user/auth');
const cartRoutes = require('./routes/admin/user/cart');
const initialDataRoutes = require('./routes/admin/initialData')


// environment variable 
env.config();

// mongodb connection
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

app.use(cors());
app.use(express.json());
app.use('/api',adminRoutes);
app.use('/api',storeRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',userRoutes);
app.use('/api', cartRoutes);
app.use('/api',initialDataRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})
