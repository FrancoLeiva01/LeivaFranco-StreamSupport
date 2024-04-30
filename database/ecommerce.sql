CREATE DATABASE ecommerce;

USE ecommerce;

CREATE TABLE category (
    id_category INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);
 
CREATE TABLE productos (
product_id INT AUTO_INCREMENT PRIMARY KEY,
product_name VARCHAR(100) NOT NULL,
product_description TEXT,
price DECIMAL (10, 2) NOT NULL,
stock INT NOT NULL
);

CREATE TABLE usuarios (
idUsuario int auto_increment primary key,
user varchar(100) UNIQUE NOT NULL,
password varchar(50) NOT NULL,
email varchar(50) NOT NULL
);

CREATE table ordenesDeVenta (
idOrden int auto_increment primary key,
orden_date DATETIME NOT NULL,
total_order DECIMAL (10, 2) NOT NULL,
idUsuario INT,
FOREIGN KEY (idUsuario) REFERENCES usuarios (idUsuario)
);

CREATE table detallesDeVenta (
IdDetalle int auto_inCrement primary key,
idOrden INT NOT NULL,
product_id int NOT NULL, 
cantidad int not null,
price DECIMAL (10, 2) NOT NULL,
FOREIGN KEY (idOrden) REFERENCES ordenesDeVenta (idOrden),
FOREIGN KEY (product_id) REFERENCES productos (product_id)
);