import { Router } from 'express';
console.log("Cargando las rutas de negocios...");
import { getNegocios, createNegocio, updateNegocio, deleteNegocio } from '../controllers/negocio.controllers.js';

const router = Router();

// Verifica que recibes la solicitud GET correctamente
router.get('/', (req, res) => {
    console.log("Se recibió una solicitud GET para /api/negocios");
    getNegocios(req, res);  // Llama al controlador para manejar la solicitud
  });

// Rutas
router.get('/', getNegocios);          // Obtener todos los negocios
router.post('/', createNegocio);       // Crear un nuevo negocio
router.put('/:id', updateNegocio);     // Actualizar un negocio por ID
router.delete('/:id', deleteNegocio);  // Eliminar un negocio por ID

export default router;
