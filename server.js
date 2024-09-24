require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()

const port = process.env.PORT || 4000

// Connect to MongoDB

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.fkj2i.mongodb.net/${process.env.MONGODB_DATABASE_NAME}?retryWrites=true&w=majority`)
    .then(() => console.log('Mongo DB Connected'))
    .catch(err => console.log(err))

// Middleware (ahead of any data processing)

//Enable CORS
app.use(cors())

//Serve static files
app.use(express.static('public'))

//Parse results
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Set EJS as tempalting engine
app.set('view engine', 'ejs')

//LOGIC GOES HERE

app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`)
})