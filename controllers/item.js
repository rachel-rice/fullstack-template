const Item = require("../models/Item");

module.exports = {
    getItems: (req, res) => {
        // Logic to get items
        res.render('item.ejs', { items: [] }); // Example response
    },
    addItem: (req, res) => {
        // Logic to add an item
        res.redirect('/item'); // Example response
    }
};


// NEED TO MAKE SURE THE FOLLOWIN ROUTES ARE INCLUDED

// app.get('/item', async (req, res) => {
//     const items = await Item.find({})
//     res.render('item', {items})
// })

// //Create
// app.post('/item', async (req, res) => {
//     const newItem = new Item(req.body)
//     try {
//         await newItem.save()
//         res.redirect('/item')
//     } catch (err) {
//         res.redirect('/item?error=true')
//     }
// })

// //Update
// app.post('/item/update/:id', async (req, res) => {
//     const {id} = req.params
//     const {name, description} = req.body
//     try {
//       await Item.findByIdAndUpdate(id, {name, description})
//       res.redirect('/item')
//     } catch (err) {
//         res.redirect('/item?error=true')
//     }
// })

// //Delete
// app.delete('/item/update/:id', async (req, res) => {
//     const {id} = req.params
//     try {
//       await Item.findByIdAndDelete(id)
//       res.status(200).json({message: 'Item deleted successfully'})
//     } catch (err) {
//         res.redirect('/item?error=true')
//     }
// })