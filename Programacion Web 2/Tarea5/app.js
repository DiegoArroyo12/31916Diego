const express = require("express");
const path = require("path");
const rutas = require("./rutas");

const app = express();

app.use(express.static('pages'));

app.use('/', rutas);

app.get("/", (req, res) => {
    res.redirect("/Tarea5")
});

app.listen(3000, () => {
    console.log("Servidor escuchando puerto: ", 3000);
});