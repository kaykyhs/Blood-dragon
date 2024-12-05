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
    database: 'blood'
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar:', err);
        return;
    }
    console.log('Conectado ao banco');
});
app.get('/api/cliente',(req,res)=> {
    db.query('SELECT * FROM CLIENTE',(err, results) => {
        if (err){
        console.error('erro ao buscar dados:',err);
        res.status(500).send('Erro ao buscar dados');
        return;
    }
    res.send(results);
    });
});
app.post('/api/tatuador',(req,res) => {
    con 
})

