import Cliente from '../models/cliente.models.js';

// Obtener todos los clientes
export const getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un cliente
export const createCliente = async (req, res) => {
  const { nombre, email, telefono, direccion } = req.body;

  try {
    const newCliente = new Cliente({ nombre, email, telefono, direccion });
    await newCliente.save();
    res.status(201).json(newCliente);  // Respondemos con el nuevo cliente creado
  } catch (err) {
    res.status(400).json({ message: err.message });  // Manejo de errores
  }
};

// Editar un cliente
export const updateCliente = async (req, res) => {
  const { id } = req.params;
  const { nombre, email, telefono, direccion } = req.body;

  try {
    const cliente = await Cliente.findByIdAndUpdate(id, { nombre, email, telefono, direccion }, { new: true });
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json(cliente);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Eliminar un cliente
export const deleteCliente = async (req, res) => {
  const { id } = req.params;

  try {
    const cliente = await Cliente.findByIdAndDelete(id);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json({ message: 'Cliente eliminado' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
