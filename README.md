# blood-dragom
#   B l o o d - d r a g o n 

create database blood;
use blood;


CREATE TABLE post (
    fk_tatuador int,
    id_post INT PRIMARY KEY,
    data DATE,
    horario TIME,
    descricao VARCHAR(50),
    hashtag VARCHAR(25),
    imagem VARCHAR(255)
);

CREATE TABLE cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    email VARCHAR(80),
    telefone VARCHAR(15),
    senha VARCHAR(30)
);
CREATE TABLE tatuador (
    id_tatuador INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    email VARCHAR(80),
    telefone VARCHAR(15),
    senha VARCHAR(30),
    mei VARCHAR(14)
);
-- Populando a tabela cliente com dados aleatórios
INSERT INTO cliente (nome, email, telefone, senha)
VALUES 
('Ana Souza', 'ana.souza@example.com', '555-1234', 'senha123'),
('Carlos Silva', 'carlos.silva@example.com', '555-5678', 'senha456'),
('Mariana Oliveira', 'mariana.oliveira@example.com', '555-8765', 'senha789'),
('João Costa', 'joao.costa@example.com', '555-4321', 'senha101'),
('Lucas Pereira', 'lucas.pereira@example.com', '555-6789', 'senha202'),
('Fernanda Lima', 'fernanda.lima@example.com', '555-1122', 'senha303');

-- Populando a tabela post com dados aleatórios
INSERT INTO post (fk_tatuador,id_post, data, horario, descricao, hashtag, imagem)
VALUES
(1,1, '2024-12-01', '10:00:00', 'Primeiro post da Ana! Super feliz!', '#felicidade'),
(2,2, '2024-12-02', '14:30:00', 'Hoje é um ótimo dia para aprender SQL!', '#tecnologia'),
(3,3, '2024-12-03', '08:15:00', 'Boa manhã a todos! Vamos com tudo!', '#motivação'),
(4,4, '2024-12-04', '18:45:00', 'Nova receita de bolo publicada no blog!', '#culinária'),
(5,5, '2024-12-05', '12:00:00', 'O trabalho está ficando incrível, muito orgulho!', '#carreira'),
(6,6, '2024-12-06', '20:00:00', 'Final de semana chegando! Hora de relaxar!', '#relaxamento');

-- Populando a tabela tatuador com dados aleatórios
INSERT INTO tatuador (nome, email, telefone, senha, mei)
VALUES
('Carlos Souza', 'carlos.souza@example.com', '555-1234', 'senha123', '12345678000195'),
('Juliana Silva', 'juliana.silva@example.com', '555-5678', 'senha456', '98765432000188'),
('Ricardo Oliveira', 'ricardo.oliveira@example.com', '555-8765', 'senha789', '12312312000102'),
('Fernanda Lima', 'fernanda.lima@example.com', '555-4321', 'senha101', '32132122000105'),
('Lucas Pereira', 'lucas.pereira@example.com', '555-6789', 'senha202', '65465433000112'),
('Tatiane Costa', 'tatiane.costa@example.com', '555-9999', 'senha303', '11223344000199'),
('Mário Almeida', 'mario.almeida@example.com', '555-3456', 'senha404', '99887766000101'),
('Camila Rocha', 'camila.rocha@example.com', '555-5432', 'senha505', '22334455000122'),
('Leandro Santos', 'leandro.santos@example.com', '555-6780', 'senha606', '66778899000133'),
('Patrícia Oliveira', 'patricia.oliveira@example.com', '555-1122', 'senha707', '77889911000144');

