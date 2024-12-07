import mongoose from 'mongoose';

const FacturacionSchema = new mongoose.Schema({
  negocio: { type: String, required: true },
  razonSocial: { type: String, required: true },
  ruc: { type: String, required: true },
  direccion: { type: String, required: true },
  fecha: { type: Date, required: true },  // Asegúrate de pasar la fecha explícitamente
  importe: { type: Number, required: true },  // Cambié a Number
  reserva: { type: mongoose.Schema.Types.ObjectId, ref: 'Reserva', required: true }  // Asegúrate de que el valor esté presente
});

export default mongoose.model('Facturacion', FacturacionSchema);
