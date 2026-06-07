const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.dbUrl);
        console.log("database connected successfully")
    }
    catch (err) {
        console.log(`database connection error : ${err.message}`);
    }
}

module.exports = connectDB;