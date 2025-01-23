const express = require('express');
const app = express();
const mongoose = require('mongoose');
const logger = require("morgan");
const connectDB = require("./config/database");
const cors = require('cors');
const mainRoutes = require("./routes/main");
const Item = require('./models/Item')


//Use .env file in config folder - calling in database.js file now
// require("dotenv").config({ path: "./config/.env" });

//Connect To MongoDB Database
connectDB();

//Set EJS as tempalting engine for views
app.set('view engine', 'ejs')

//Enable CORS
app.use(cors())

//Serve static folder
app.use(express.static('public'));

//Body parsing - parse results
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Logging
app.use(logger("dev"));

// Middleware above (ahead of any data processing)

//Routes 
// MOVED TO ROUTES FOLDER
// app.get('/', (req, res) => {
//     res.render('index')
// })

app.get('/item', async (req, res) => {
    const items = await Item.find({})
    res.render('item', {items})
})

//Create
app.post('/item', async (req, res) => {
    const newItem = new Item(req.body)
    try {
        await newItem.save()
        res.redirect('/item')
    } catch (err) {
        res.redirect('/item?error=true')
    }
})

//Update
app.post('/item/update/:id', async (req, res) => {
    const {id} = req.params
    const {name, description} = req.body
    try {
      await Item.findByIdAndUpdate(id, {name, description})
      res.redirect('/item')
    } catch (err) {
        res.redirect('/item?error=true')
    }
})

//Delete
app.delete('/item/update/:id', async (req, res) => {
    const {id} = req.params
    try {
      await Item.findByIdAndDelete(id)
      res.status(200).json({message: 'Item deleted successfully'})
    } catch (err) {
        res.redirect('/item?error=true')
    }
})

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);

//Server running
app.listen(process.env.PORT, () => {
    console.log(`Server is running, you better catch it`);
  });