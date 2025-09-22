import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const token = req.header("x-auth-token") || req.header("authorization"); // lo mandaremos en los headers

  if (!token) {
    return res.status(401).json({ msg: "Acceso denegado. Token requerido." });
  }

  //Si viene como "Bearer <token> lo limpiamos"
  const actualToken = token.startsWith("Bearer ") ? token.split(" ")[1] : token


  try {
    const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);
    req.usuario = decoded; // guardamos los datos del token en req.usuario
    next(); // pasa a la siguiente función
  } catch (error) {
    res.status(400).json({ msg: "Token inválido." });
  }
};

export default auth;
