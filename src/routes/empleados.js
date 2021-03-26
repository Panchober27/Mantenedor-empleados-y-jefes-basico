const express = require("express");
const router = express.Router();

// Controlador de los empleados.
const empController = require("../controllers/empController");

// Conexion a la bd.
const pool = require("../database");

// Ruta al listado de los empleados.
router.get("/list-emp", empController.list);

module.exports = router;
