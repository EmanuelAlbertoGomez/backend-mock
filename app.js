const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 4000;

// Usar el middleware CORS
app.use(cors());

// Endpoint que devuelve los productos desde el JSON
app.get('/backendmock/productos', (req, res) => {
    const filePath = path.join(__dirname, 'mocks','productos.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Error leyendo el archivo de productos' });
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`Backend server is running at http://localhost:${port}`);
});
