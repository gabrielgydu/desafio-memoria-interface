const express = require('express');
const cors = require('cors');
const app = express();
const port = 1234;

app.use(cors());

// API endpoint '/ping' que retorna 'pong!'
app.get('/ping', (req, res) => {
    res.json({ data: 'pong!' });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
