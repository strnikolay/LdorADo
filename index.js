//import express from 'express';
//import fs from './node_modules/fs';

const express = require('express')
const fs = require('fs');
const PORT = 5500;
const app = express()

app.get('/', (req, res) => {
    res.status(200).json('сервер работает')
})

app.listen(PORT, () => console.log ('server started'))

fs.readFile('1.txt', 'utf-8', (err, data) => {
    console.log(data);
})
