CREATE DATABASE web_inacap_empleados;

USE web_inacap_empleados;

CREATE TABLE empleado(
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    rut VARCHAR(20) UNIQUE NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido_pat VARCHAR(50) NOT NULL,
    apellido_mat VARCHAR(50) NOT NULL
);

