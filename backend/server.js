const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
const connectDB = async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
        );
        console.log("MongoDB connected")
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}
connectDB();

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});