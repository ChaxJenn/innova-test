import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import procedimientoRoutes from "./routes/procedimientoRoutes.js";

dotenv.config();

const app = express();

app.use(cors({
	origin: "http://localhost:5173",
	methods: ["GET", "POST", "PUT", "DELETE"],
	credentials: true
}));

// Middleware para parsear JSON
app.use(express.json());
// Conectar a MongoDB
connectDB();

app.use("/api/usuarios", usuarioRoutes)
app.use("/api/procedimientos", procedimientoRoutes);

// Arrancar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
