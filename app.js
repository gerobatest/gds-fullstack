const express = require('express')
app = express()

const cors = require('cors') //cross-origin

require('dotenv').config();

//const mongoose = require("mongoose");//Add mongoose : database 

//Middlewares
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"))
app.use(express.urlencoded({ extended: true }));

//get driver connections 
const dbo = require("./db/conn")

//configuration du port 
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {

    //connect avec la base donnée quand le serveur démarre
    dbo.connectToServer(function (err) {
      if(err) console.error(err);
    })
    console.log(`Listening on Port: ${PORT}`)
})











//app.set('view engine', 'ejs')

//app.use('/', require('./routes/hello'))
//app.use('/api/', require('./routes/hello'))

//Connexion à la base de donnée 
/*const connectDb = () => {
  try{
    mongoose.connect(process.env.DB_URI);
    console.log("Database connected");
  }catch (error){
    console.log(error);
  }
}*/


// app.get('/', (req, res) => {
//     res.send('hello haingo. How are you?')
// })
