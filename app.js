const express = require('express')
const mongoose = require("mongoose");//Add mongoose : database 


app = express()

require('dotenv').config();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Connexion à la base de donnée 
const connectDb = () => {
  try{
    mongoose.connect(process.env.DB_URI);
    console.log("Database connected");
  }catch (error){
    console.log(error);
  }
}


app.set('view engine', 'ejs')


//app.use('/', require('./routes/hello'))
app.use('/api/', require('./routes/hello'))


// app.get('/', (req, res) => {
//     res.send('hello haingo. How are you?')
// })

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})