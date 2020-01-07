const express = require('express');
const http = require('http');

const app = express();


const path = require('path');
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT);