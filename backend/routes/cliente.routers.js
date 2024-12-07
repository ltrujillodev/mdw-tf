import { Router } from 'express';
import { getClientes, createCliente, updateCliente, deleteCliente } from '../controllers/cliente.controllers.js';

const router = Router();

// Obtener todos los clientes
router.get('/', getClientes);

// Crear un cliente
router.post('/', createCliente);

// Editar un cliente
router.put('/:id', updateCliente);

// Eliminar un cliente
router.delete('/:id', deleteCliente);

export default router;
