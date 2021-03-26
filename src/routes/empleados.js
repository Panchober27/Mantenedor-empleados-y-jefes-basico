const express = require("express");
const router = express.Router();

// Conexion a la bd.
const pool = require("../database");

// Ruta al listado de los empleados.
router.get("/list-emp", async (req, res) => {
  const emps = await pool.query("SELECT * FROM empleado");
  console.log(emps);
  res.render("empleados/list", { emps }); // Se renderiza la vista
});

module.exports = router;
