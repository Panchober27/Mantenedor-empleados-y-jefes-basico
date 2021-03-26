const express = require("express");
const morgan = require("morgan");
const path = require("path");

// Inicializando el servidor.
const app = express();

// Seteos del servidor.
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares.
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Variables Globales.
app.use((req, res, next) => {
  next();
});

// Rutas del servidor.😁
app.use(require("./routes/index"));
app.use(require("./routes/empleados"));

// Archivos estaticos.
app.use(express.static(path.join(__dirname, "public")));

// Prendiendo el servidor.
app.listen(app.get("port"), () => {
  console.log("Servidor iniciado en el puerto: " + app.get("port"));
});
