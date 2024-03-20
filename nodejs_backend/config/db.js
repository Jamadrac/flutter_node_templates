const mongoose = require('mongoose');
// mongoose.set('debug', true);


const connection = mongoose.createConnection(`mongodb+srv://rabbi:jamadrac@cluster0.rdngft1.mongodb.net/?retryWrites=true&w=majority`).on('open',()=>{console.log("MongoDB Connected");}).on('error',()=>{
    console.log("MongoDB Connection error");
});

module.exports = connection;