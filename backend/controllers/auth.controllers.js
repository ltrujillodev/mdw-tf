import User from "../models/auth.models.js";
import bcrypt from "bcrypt";
import { createAccessToken } from "../libs/jwt.js";

// Controlador para registrar un nuevo usuario
export const register = async (req, res) => {
  const { nombres, apellidos, email, password, telefono } = req.body;

  try {
    // Verificar si el usuario ya existe
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ message: "El usuario ya existe con este correo electrónico" });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear un nuevo usuario
    const newUser = new User({
      nombres,
      apellidos,
      email,
      password: hashedPassword,
      telefono,
    });

    // Guardar el usuario en la base de datos
    const userSaved = await newUser.save();

    res.status(201).json({
      message: "Usuario registrado exitosamente",
      user: {
        id: userSaved._id,
        nombres: userSaved.nombres,
        apellidos: userSaved.apellidos,
        email: userSaved.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verificar si el usuario existe
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Usuario no encontrado" });

    // Verificar la contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Contraseña incorrecta" });

    // Crear token de acceso
    const token = createAccessToken({ id: user._id });

    // Enviar el token en la respuesta
    res.json({ message: "Inicio de sesión exitoso", token });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error });
  }
};

//controlador para mostrar la lista de usuarios registrados
export const getUsers = async (req, res) => {
  try {
    const users = await User.find(); // Recupera todos los documentos en la colección de usuarios
    res.json(users); // Envía la lista de usuarios en formato JSON
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los usuarios", error });
  }
};
//http://localhost:3001/api/auth/users

export const logout = (req, res) => {
  // Sobrescribe el token en la cookie con un valor vacío y establece una expiración inmediata
  res.cookie("token", "", {
    httpOnly: true, // Solo accesible desde el servidor
    expires: new Date(0), // Expira inmediatamente
  });

  // Responde al frontend para confirmar el logout
  res.status(200).json({ message: "Logout exitoso" });
};

export const profile = async (req, res) => {
  res.send("Profile");
};
