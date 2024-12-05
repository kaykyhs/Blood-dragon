const express = require('express');
const multer = require('multer');
const mysql = require('mysql2');
const path = require('path');
const cors = require('cors'); 
const app = express();
const PORT = 3000;



app.use(cors()); // Permite todas as origens. 

// Configuração do multer para armazenamento de arquivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Configuração do banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // seu usuário do MySQL
    password: 'root', // sua senha do MySQL
    database: 'imagem_db'
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ' + err.stack);
        return;
    }
    console.log('Conectado ao banco de dados.');
});

// Rota para o upload da imagem
app.post('/upload', upload.single('imagem'), (req, res) => {
    const nome = req.file.originalname;
    const imagem = req.file.buffer;

    const sql = "INSERT INTO imagens (nome, imagem) VALUES (?, ?)";
    db.query(sql, [nome, imagem], (err, result) => {
        if (err) {
            return res.status(500).send('Erro ao salvar a imagem no banco de dados.');
        }
        res.send('Imagem enviada com sucesso!');
    });
});

// Rota para buscar todas as imagens
app.get('/imagens', (req, res) => {
    const sql = "SELECT * FROM imagens";
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send('Erro ao buscar imagens.');
        }
        res.json(results); // Retorna as imagens em formato JSON
    });
});

// Rota para buscar uma imagem específica pelo ID
app.get('/imagem/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM imagens WHERE id = ?";
    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).send('Erro ao buscar a imagem.');
        }
        if (results.length === 0) {
            return res.status(404).send('Imagem não encontrada.');
        }
        const imagem = results[0];
        res.set('Content-Type', 'image/jpeg'); // Defina o tipo de conteúdo correto
        res.send(imagem.imagem); // Envia a imagem como resposta
    });
});

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Rota para servir o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});