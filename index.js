const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Configurações do banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'passwd',
    database: 'db_aula'
});

// Conectar ao banco de dados
connection.connect(error => {
    if (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        return;
    }
    console.log('Conectado ao banco de dados');
});

// Rota para listar dados
app.get('/consulta-dados', (req, res) => {
    connection.query('SELECT * FROM table_name', (error, results) => {
        if (error) {
            return res.status(500).send('Erro ao consultar dados');
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Aplicação executando em http://localhost:${port}`);
});
