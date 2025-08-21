const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

//  Load enviornment variables
dotenv.config();

const app = express();

//  Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//  Routes
app.use('/admin', adminRoutes);
app.use('/', userRoutes);

//  Database connection
const connectDB = require('./config/db');
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});