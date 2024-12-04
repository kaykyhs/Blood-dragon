const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');


/*coneção com o servidor*/
const app = express();
app.use(cors());
app.use(bodyParser.json());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root', /* posivel problema na senha. testar sem ela ou com a senha senac */
    database: 'dragontatoo'
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar:', err);
        return;
    }
    console.log('Conectado ao bamco');
});


