import Negocio from '../models/negocio.models.js';

// Obtener todos los negocios
export const getNegocios = async (req, res) => {
  try {
    const negocios = await Negocio.find();
    res.json(negocios);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener negocios', error });
  }
};

// Crear un nuevo negocio
export const createNegocio = async (req, res) => {
  const negocio = new Negocio(req.body);
  try {
    const nuevoNegocio = await negocio.save();
    res.status(201).json(nuevoNegocio);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear negocio', error });
  }
};

// Actualizar un negocio
export const updateNegocio = async (req, res) => {
  try {
    const negocioActualizado = await Negocio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!negocioActualizado) return res.status(404).json({ message: 'Negocio no encontrado' });
    res.json(negocioActualizado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar negocio', error });
  }
};

// Eliminar un negocio
export const deleteNegocio = async (req, res) => {
  try {
    const negocioEliminado = await Negocio.findByIdAndDelete(req.params.id);
    if (!negocioEliminado) return res.status(404).json({ message: 'Negocio no encontrado' });
    res.json({ message: 'Negocio eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar negocio', error });
  }
};

