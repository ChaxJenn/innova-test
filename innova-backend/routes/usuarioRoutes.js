import express from "express";
import { registrarUsuario, loginUsuario, perfilUsuario } from "../controllers/usuarioController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

//Registro
router.post("/register", registrarUsuario);

//Login
router.post("/login", loginUsuario);

//Ruta protegiada (Ej: perfil del usuario)
router.get("/perfil", auth, perfilUsuario)

export default router