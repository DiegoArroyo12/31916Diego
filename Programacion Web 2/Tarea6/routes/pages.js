const express = require("express");
const path = require("path");
const router = express.Router();

router.get('/Tarea6', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public','/index.html'))
});

router.get('/calculadora', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public','/calculadora.html'))
});

router.get('/qr', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public','/qr.html'))
});

router.get('/style.css', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public','/style.css'))
});

router.get('/script.js', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public','/script.js'))
});

module.exports=router;