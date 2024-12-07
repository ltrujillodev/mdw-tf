// routes/facturacionRouter.js
import { Router } from 'express';
import {getFacturas , deleteFactura , createFactura} from '../controllers/facturacion.controllers.js';


const router = Router();

// Obtener todas las facturas
router.get('/', getFacturas);
// Crear una nueva factura
router.post('/', createFactura);
// Eliminar una factura
router.delete('/:id', deleteFactura);

router.post('/agregar', async (req, res) => {
    try {
      const { nombre, razonSocial, fecha, ruc, direccion, importe } = req.body;
      const nuevaFactura = new Facturacion({ nombre, razonSocial, fecha, ruc, direccion, importe });
      await nuevaFactura.save();
      res.status(201).json(nuevaFactura);
    } catch (error) {
      res.status(500).json({ message: 'Error al agregar factura', error });
    }
  });

export default router;
