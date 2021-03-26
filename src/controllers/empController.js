// Arvhico que manejara las consultas a las bases de datos.
const empController = {};
const pool = require("../database");

empController.list = async (req, res) => {
  const emps = await pool.query("SELECT * FROM empleado");
  console.log(emps);
  //   res.send(emps);
  res.render("empleados/list", { emps });
};

module.exports = empController;
