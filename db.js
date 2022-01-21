const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://muhammed:muhammed123@cluster0.bjazz.mongodb.net/muhammeds-cars' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose