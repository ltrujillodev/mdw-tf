//const Reserva = require("../models/reserva.models.js");
import Reserva from '../models/reserva.models.js';
import Negocio from '../models/negocio.models.js';// Importa el modelo de negocio
import Facturacion from '../models/facturacion.model.js';
// Obtener todas las reservas
export const getReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find();
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las reservas", error });
  }
};

export const createReserva = async (req, res) => {
  try {
    // Extraemos los datos del cuerpo de la solicitud
    const { negocioId, fecha, importe, estado, pago } = req.body; 
    console.log('Datos recibidos para la reserva:', req.body);
    // 1. Crear la nueva reserva
    const newReserva = new Reserva({
      negocio: negocioId,  // Asegúrate de pasar el ID del negocio
      fecha,
      importe,
      estado,
      pago,
    });
    console.log('Reserva a guardar:', newReserva);
    await newReserva.save();

    // 2. Obtener los datos del negocio relacionado (por el ID del negocio)
    const negocio = await Negocio.findById(negocioId);  // Busca el negocio por su ID

    if (!negocio) {
        console.log('Negocio no encontrado con ID:', negocioId);
      return res.status(404).json({ message: 'Negocio no encontrado' });
    }

    console.log('Negocio encontrado:', negocio);

    // 3. Crear la factura con los datos de la reserva y el negocio
    const nuevaFactura = new Facturacion({
      negocio: negocio.nombre,  // Nombre del negocio
      razonSocial: negocio.razonSocial,  // Razón social del negocio
      ruc: negocio.ruc,  // RUC del negocio
      direccion: negocio.direccion,  // Dirección del negocio
      fecha: newReserva.fecha,  // Fecha de la reserva
      importe: newReserva.importe,  // Importe de la reserva
    });
    console.log('Factura a guardar:', nuevaFactura);
    // Guardar la factura
    await nuevaFactura.save();

    // 4. Responder con los datos de la reserva y la factura
    res.status(201).json({ reserva: newReserva, factura: nuevaFactura });
  } catch (error) {
    console.error('Error al crear la reserva y factura:', error); 
    res.status(500).json({ message: 'Error al crear la reserva y la factura', error });
  }
};


// export const createReserva = async (req, res) => {
//   try {
//     const { negocio, fecha, importe, estado, pago } = req.body;
//     const newReserva = new Reserva({ negocio, fecha, importe, estado, pago });
//     await newReserva.save();
//     res.status(201).json(newReserva);
//   } catch (error) {
//     res.status(500).json({ message: "Error al crear la reserva", error });
//   }
// };

// Obtener una reserva por ID
export const getReservaById = async (req, res) => {
  try {
    const { id } = req.params;
    const reserva = await Reserva.findById(id);
    if (!reserva) return res.status(404).json({ message: "Reserva no encontrada" });
    res.json(reserva);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la reserva", error });
  }
};

// Actualizar una reserva por ID
export const updateReserva = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedReserva = await Reserva.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedReserva) return res.status(404).json({ message: "Reserva no encontrada" });
    res.json(updatedReserva);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la reserva", error });
  }
};

// Eliminar una reserva por ID
export const deleteReserva = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedReserva = await Reserva.findByIdAndDelete(id);
    if (!deletedReserva) return res.status(404).json({ message: "Reserva no encontrada" });
    res.json({ message: "Reserva eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la reserva", error });
  }
};

