const express = require("express");
const router = express.Router();

// Controlador de los empleados.
const empController = require("../controllers/empController");


// Ruta al listado de los empleados.
router.get("/list-emp", empController.list);

module.exports = router;
