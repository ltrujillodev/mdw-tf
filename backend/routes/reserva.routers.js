import { Router } from 'express';
import { getReservas, createReserva, getReservaById, updateReserva, deleteReserva } from '../controllers/reserva.controllers.js'

const router = Router();

// Define las rutas
router.get("/", getReservas); // Obtener todas las reservas
router.post("/", createReserva); // Crear una nueva reserva
router.get("/:id", getReservaById); // Obtener una reserva por ID
router.put("/:id", updateReserva); // Actualizar una reserva por ID
router.delete("/:id", deleteReserva); // Eliminar una reserva por ID

export default router
