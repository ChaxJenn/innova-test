import jwt from "jsonwebtoken";

const generarJWT = (usuario) => {
    //crea el payload con el id, nombre, y rol del usuario
    const payload = {
        id: usuario._id,
        nombre: usuario.nombre,
        rol: usuario.rol
    }
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "30d", //Expira en 30 dias
    });
};

export default generarJWT