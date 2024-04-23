CREATE DATABASE registro;
USE registro;

CREATE table usuarios (
idUsuario int auto_increment primary key UNIQUE,
nombre varchar(100),
contraseña varchar(50),
email varchar(50)
);

CREATE table productos (
idProducto int auto_increment primary key,
nombre varchar (100),
descripcion varchar (200),
precio varchar (50),
stock varchar(50)
);

CREATE table ordenesDeVenta (
idOrden int auto_increment primary key,
usuario int,
fecha varchar (50),
estado varchar (50),
FOREIGN KEY (usuario) REFERENCES usuarios (idUsuario) 
);

CREATE table detallesdDeVenta (
IdDetalle int auto_inCrement primary key,
orden int,
producto int,
cantidad varchar (100),
precio varchar (50),
FOREIGN KEY (orden) REFERENCES ordenesDeVenta (idOrden),
FOREIGN KEY (producto) REFERENCES productos (idProducto)
);