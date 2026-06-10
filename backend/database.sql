DROP DATABASE IF EXISTS rotabrasil;
CREATE DATABASE rotabrasil;
USE rotabrasil;

CREATE TABLE Usuario (
	user_ID INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(100) NOT NULL,
    role VARCHAR(50) DEFAULT 'usuario',
    foto_perfil VARCHAR(255)
);

UPDATE Usuario
SET role = 'admin'
WHERE user_ID = 1;

CREATE TABLE Destinos (
	destino_ID INT AUTO_INCREMENT PRIMARY KEY,
    nome_destino VARCHAR(50) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    descricao VARCHAR(200) NOT NULL,
    imagem VARCHAR(255)
);
