const express = require('express');
const router = express.Router();
const db = require('./db');
const path = require('path');

// Ruta principal
router.get('/index', (req, res) => {
    res.render('index');
});

// Ruta para agregar
router.get('/agregar', (req, res) => {
    const sqlDeportes = `SELECT * FROM Deportes`;
    db.query(sqlDeportes, (err, resultDeportes) => {
        if (err) throw err;
        res.render('agregar', { deportes: resultDeportes });
    });
});

// Ruta para agregar a la base de datos
router.post('/agregar', (req, res) => {
    const { Nombre, Apellido, Telefono, IdDeporte } = req.body;
    const sql = `INSERT INTO Usuarios (Nombre, Apellido, Telefono) VALUES (?, ?, ?)`;

    db.query(sql, [Nombre, Apellido, Telefono], (err, result) => {
        if (err) throw err;

        // Obtiene el ID del usuario recién insertado
        const IdUsuario = result.insertId;
        const sqlDeportes = `INSERT INTO UsuarioDeportes (IdUsuario, IdDeporte) VALUES (?, ?)`;
        db.query(sqlDeportes, [IdUsuario, IdDeporte], (err) => {
            if (err) throw err;            
            res.redirect('/index');
        });
    });
});

// Ruta de registrados
router.get('/registrados', (req, res) => {
    const sql = `
        SELECT Usuarios.IdUsuario, Usuarios.Nombre, Usuarios.Apellido, Usuarios.Telefono,
               GROUP_CONCAT(Deportes.NombreDeporte SEPARATOR ', ') AS Deportes
        FROM Usuarios
        LEFT JOIN UsuarioDeportes ON Usuarios.IdUsuario = UsuarioDeportes.IdUsuario
        LEFT JOIN Deportes ON UsuarioDeportes.IdDeporte = Deportes.IdDeporte
        GROUP BY Usuarios.IdUsuario;
    `;
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.render('registrados', { usuarios: results });
    });
});

// Seleccionar el usuario a editar
router.get('/seleccion', (req, res) => {
    const sql = `
        SELECT Usuarios.IdUsuario, Usuarios.Nombre, Usuarios.Apellido, Usuarios.Telefono,
               GROUP_CONCAT(Deportes.NombreDeporte SEPARATOR ', ') AS Deportes
        FROM Usuarios
        LEFT JOIN UsuarioDeportes ON Usuarios.IdUsuario = UsuarioDeportes.IdUsuario
        LEFT JOIN Deportes ON UsuarioDeportes.IdDeporte = Deportes.IdDeporte
        GROUP BY Usuarios.IdUsuario;
    `;
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.render('seleccion', { usuarios: results });
    });
});

// Obtener los datos del usuario a editar
router.get('/editar/:IdUsuario', (req, res) => {
    const { IdUsuario } = req.params;
    const sqlUsuario = `
            SELECT Usuarios.IdUsuario, Usuarios.Nombre, Usuarios.Apellido, Usuarios.Telefono,
                GROUP_CONCAT(Deportes.IdDeporte) AS IdDeportes,
                GROUP_CONCAT(Deportes.NombreDeporte SEPARATOR ', ') AS Deportes
            FROM Usuarios
            LEFT JOIN UsuarioDeportes ON Usuarios.IdUsuario = UsuarioDeportes.IdUsuario
            LEFT JOIN Deportes ON UsuarioDeportes.IdDeporte = Deportes.IdDeporte
            WHERE Usuarios.IdUsuario = ?;`;
    const sqlDeportes = `SELECT * FROM Deportes`;

    db.query(sqlUsuario, [IdUsuario], (err, resultUsuario) => {
        if (err) throw err;
        db.query(sqlDeportes, (err, resultDeportes) => {
            if (err) throw err;            
            res.render('editar', { 
                usuario: resultUsuario[0], 
                deportes: resultDeportes 
            });
        });
    });
});

// Insetar los nuevos datos del usuario
router.post('/editar/:IdUsuario', (req, res) => {
    const { Nombre, Apellido, Telefono, IdDeporte } = req.body;
    const { IdUsuario } = req.params;
    const sql = `UPDATE Usuarios SET Nombre = ?, Apellido = ?, Telefono = ? WHERE IdUsuario = ?`;
    const sqlDeportes = `UPDATE UsuarioDeportes SET IdDeporte = ? WHERE IdUsuario = ?`;

    db.query(sql, [Nombre, Apellido, Telefono, IdUsuario], (err) => {
        if (err) throw err;
        db.query(sqlDeportes, [IdDeporte, IdUsuario], (err) => {
            res.redirect('/seleccion');
        });
    });
});

// Ruta para la eliminar
router.get('/eliminar', (req, res) => {
    const sql = `
        SELECT Usuarios.IdUsuario, Usuarios.Nombre, Usuarios.Apellido, Usuarios.Telefono,
               GROUP_CONCAT(Deportes.NombreDeporte SEPARATOR ', ') AS Deportes
        FROM Usuarios
        LEFT JOIN UsuarioDeportes ON Usuarios.IdUsuario = UsuarioDeportes.IdUsuario
        LEFT JOIN Deportes ON UsuarioDeportes.IdDeporte = Deportes.IdDeporte
        GROUP BY Usuarios.IdUsuario;
    `;
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.render('eliminar', { usuarios: results });
    });
});

// Eliminar usuarios
router.post('/eliminar/:IdUsuario', (req, res) => {
    const { IdUsuario } = req.params;
    const sql = `DELETE FROM Usuarios WHERE IdUsuario = ?`;
    db.query(sql, [IdUsuario], (err) => {
        if (err) throw err;
        res.redirect('/index');
    });
});

module.exports = router;
