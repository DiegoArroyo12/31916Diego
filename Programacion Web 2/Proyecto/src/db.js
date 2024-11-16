const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'OmarBases2409Diego',
    database: 'node_crud',
    port: '3306'
});

connection.connect((err) => {
    if(err) {
        console.error('Hubo un error al conectarse a la base de datos:',err);
        return;
    }
    console.log('Conexión a la base de datos exitosa.');
});

module.exports = connection;