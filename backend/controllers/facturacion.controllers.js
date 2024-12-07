//facturacion.controllers
import Facturacion from '../models/facturacion.model.js'
import Reserva from '../models/reserva.models.js'

// Crear una nueva factura
export const createFactura = async (req, res) => {
    try {
        const { negocio, razonSocial, ruc, direccion, fecha, importe, reservaId } = req.body;
    
        // Buscar la reserva asociada (esto es opcional, si deseas verificar que exista)
        const reserva = await Reserva.findById(reservaId);
        if (!reserva) {
          return res.status(404).json({ message: 'Reserva no encontrada' });
        }
    
        const nuevaFactura = new Facturacion({
          negocio,
          razonSocial,
          ruc,
          direccion,
          fecha,
          importe,
          reserva: reserva._id,  // Asocia la factura a la reserva
        });
    
        await nuevaFactura.save();
        res.status(201).json(nuevaFactura); // Devuelve la factura creada
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear la factura', error });
      }
};

// Eliminar una factura
export const deleteFactura = async (req, res) => {
  try {
    const { id } = req.params;
    await Facturacion.findByIdAndDelete(id);
    res.status(200).json({ message: 'Factura eliminada con éxito' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la factura' });
  }
};

// Obtener todas las facturas
export const getFacturas = async (req, res) => {
    try {
        const facturas = await Facturacion.find(); // Consulta la colección de facturas
        console.log('Facturas encontradas en la base de datos:', facturas); // Log para depuración
        res.status(200).json(facturas); // Devuelve las facturas
      } catch (error) {
        console.error('Error al obtener las facturas:', error); // Si ocurre un error, lo muestra
        res.status(500).json({ error: 'Error al obtener las facturas' });
      }
};

export const obtenerFacturas = async (req, res) => {
    try {
      const facturas = await Facturacion.find().populate('reserva'); // Relaciona la colección Reservas
      res.json(facturas); // Devuelve las facturas como un array de objetos JSON
    } catch (error) {
      console.error('Error al obtener facturas:', error);
      res.status(500).json({ error: 'Error al obtener las facturas' });
    }
  };

