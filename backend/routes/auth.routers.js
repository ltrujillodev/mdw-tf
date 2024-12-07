import { Router } from "express";
import {
  register,
  login,
  logout,
  getUsers,
  profile,
} from "../controllers/auth.controllers.js";
import { authRequired } from "../middlewares/ValidateToken.js";

const router = Router();

// Ruta para registrar un usuario
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", authRequired, profile);
router.get("/users", getUsers);

export default router;
