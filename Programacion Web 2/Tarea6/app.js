const express = require("express");
const path = require("path");
const route = require("./routes/pages");

const app = express();

app.use(express.static('public'));

app.use('/', route);

app.get('/', (req, res) => {
    res.redirect('/Tarea06')
});

app.listen(3001, () => {
    console.log(`Escuchando desde localhost:${3001}`);
});