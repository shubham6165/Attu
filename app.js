// Imports
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const port = 80;

// use Static Files
app.use(express.static('public'));
app.use('/CSS', express(__dirname + 'public/CSS'))
app.use('/JS', express(__dirname + 'public/JS'))
app.use('/images', express(__dirname + 'public/images'))

// Set  Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Navigation
app.get("/", (req, res) => {
    res.render('index');
})


// listen on port
app.listen(port, () => {
    console.log(`App listening on port${port}`);
})



