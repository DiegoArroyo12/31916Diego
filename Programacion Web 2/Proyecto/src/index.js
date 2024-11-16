const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', routes);

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto: ", 3000);
});

// node src/index.js