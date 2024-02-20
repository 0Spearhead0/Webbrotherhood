const express = require('express');
const server = express();

server.all('/', (req, res) => {
    res.send('');
});

module.exports = () => {
    server.listen(4000, () => {
        console.log('Server Ready.');
    });
    return true;
};