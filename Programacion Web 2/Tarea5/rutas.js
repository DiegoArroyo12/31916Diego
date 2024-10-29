const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/Tarea5', (req, res) => {
    res.sendFile(path.join(__dirname, '../Tarea5/pages', '/index.html'))
});

router.get('/second', (req, res) => {
    res.sendFile(path.join(__dirname, '../Tarea5/pages', '/second.html'))
});

router.get('/third', (req, res) => {
    res.sendFile(path.join(__dirname, '../Tarea5/pages', '/third.html'))
});

module.exports = router;