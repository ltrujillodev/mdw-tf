export const authRequired = (req, res, next) => {
  console.log("REQUEST", req);

  // console.log("Headers:", req.headers); // Para verificar si hay cookies o autorización en los headers
  // console.log("Cookies (req.cookies):", req.cookie); // Para mostrar las cookies parseadas por cookie-parser
  // console.log("Raw Cookies (req.headers.cookie):", req.headers.cookie); // Raw cookie string antes de ser parseada

  const { token } = req.cookies;

  if (!token) {
    console.error("Token no encontrado en las cookies");
    return res.status(401).json({ message: "No token, authorization denied!" });
  }

  console.log("Token:", token); // Visualizar el token

  next();
};
