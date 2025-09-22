import Usuario from "../models/Usuario.js"
import bcrypt from "bcryptjs"
import generarJWT from "../helpers/generarJWT.js";

//Exportar usuario
export const perfilUsuario = (req, res) => {
    try {
        res.json({
            msg:"Perfil del usuario",
            usuario: req.usuario // viene del middleare del auth
        });
    } catch (error) {
        res.status(500).json({ msg:"error en el servidor"})
    }
}


//Registrar usuario
const registrarUsuario = async (req, res) => {
    const { nombre, email, password } = req.body;

    try {
        //Verificar si el usuairo ya existe
        const existeUsuario = await Usuario.findOne({email});
        if (existeUsuario) {
            return res.status(400).json({ msg: "El usuario ya existe"});
        }

        //Encriptar Password
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        //Crear Usuario
        const nuevoUsuario = new Usuario({
            nombre,
            email,
            password: passwordHash,
        });

        await nuevoUsuario.save();
        res.status(201).json({ msg: "Usuario registrado"});
    } catch (error) {
        console.error(error);
    }
}

const loginUsuario = async (req, res) => {
    const {email, password} = req.body;

    try {
        const usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(400).json({ msg: "Usuario no encontrado "});
        }

        const passwordCorrecto = await bcrypt.compare(password, usuario.password)
        if (!passwordCorrecto) {
            return res.status(400).json({ msg: "Credenciales invalidas"})
        }

        res.json({ 
            msg: "Login exitoso", 
            token: generarJWT(usuario), // Aqui se manda el token
            usuario: {
                nombre: usuario.nombre,
                email: usuario.email,
                rol: usuario.rol,
            }
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en el servidor" })
    }
}

export { registrarUsuario, loginUsuario};