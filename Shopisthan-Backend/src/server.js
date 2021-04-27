const express = require('express')
const env = require('dotenv')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


//routes
const adminRoutes = require('./routes/admin/auth');
const storeRoutes = require('./routes/store/store');
const categoryRoutes = require('./routes/admin/category')
const productRoutes = require('./routes/store/product');
const userRoutes = require('./routes/admin/user/auth');
const cartRoutes = require('./routes/admin/user/cart');


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
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use('/api',adminRoutes);
app.use('/api',storeRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',userRoutes);
app.use('/api', cartRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})
