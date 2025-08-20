const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//  Load enviornment variables
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});