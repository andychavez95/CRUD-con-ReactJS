import express from "express";
import cors from "cors";
// Importamos la conexión a la base de datos.
import db from "./database/db.js";
// Importamos las rutas.
import employeeRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/employees", employeeRoutes);

try {
    await db.authenticate();
    console.log("Conexión exitosa a la BBDD");
} catch (error) {
    console.log(`El error de conexión es: ${error}`);
}

app.get("/", (req, res) => {
    res.send('Hola mundo.');
});

app.listen(3001, () => {
    console.log("Servidor corriendo en dirección: http://localhost:3001/");
});
